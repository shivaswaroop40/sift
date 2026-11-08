---
id: fe11c459f2
title: nspawn 3.0 adds a Docker Engine API socket for systemd-nspawn containers
original_title: "Nspawn 3.0: A Docker-compatible Engine API for systemd-nspawn containers"
url: >-
  https://blog.nspawn.org/posts/nspawn-3-0-a-docker-compatible-engine-api-for-systemd-nspawn-containers/
source: Lobsters
kind: community
section: infrastructure
date: "2026-11-08"
published_at: "2026-11-08T08:41:38.000Z"
authors:
  - blog.nspawn.org via diktomat
  - blog.nspawn.org via diktomat
comments: https://lobste.rs/s/lh0qbr/nspawn_3_0_docker_compatible_engine_api
tags:
  - systemd-nspawn
  - docker-api
  - containers
  - gitlab-runner
  - polkit
  - community
why_read: >-
  The release post lists every endpoint the socket serves, the polkit rules, the GitLab Runner
  config and the breaking changes to the in-machine socket.
rank: 5
interest_score: 6.3
depth_score: 6
novelty_score: 7
utility_score: 6
scored: true
model: glm-5.3
---

nspawn 3.0 serves a Docker Engine API on the host. The socket is /run/nspawn/api.sock, opened by nspawn-api.socket, and the packages ship it turned off. With DOCKER_HOST pointed at it, the docker command runs, execs in, copies files from and removes systemd-nspawn machines. The API answers in the shapes of Docker API 1.51, and of the versions down to 1.24 that clients ask for.

The main purpose is compatibility. Tools that manage containers through the Docker API, such as GitLab Runner's docker executor, Traefik and Dozzle, can drive nspawn machines instead of a Docker daemon. The API server is a client of the same bus service as the command line, gated by polkit actions org.nspawn.inspect for reads and waits and org.nspawn.manage for logs and changes. Connections, streams, waits, attaches and execs are bounded per user, so no user can keep the others or root out.

The permission model parallels the docker group. A user with org.nspawn.manage is root on the host, because a machine runs commands as root and can mount any host path. A breaking change widens the in-machine socket. A machine that mounts it read-write can now create, start, exec in and remove containers, and pull images. A read-only mount allows reads, logs and kills, and refuses the rest with 403. Only root inside the machine can connect, and it sees every machine's -e variables, though --secret values never show.

Endpoint coverage is broad. Container endpoints run from create and start to prune, with AutoRemove, and docker cp works both ways on running and stopped containers, keeping owners and modes. Create settings nspawn has no use for come back in Warnings, and settings that would change what the container does are refused with 400. Images support pull, remove and prune, with the image ID as the config's digest. Packages cover Debian 13+, Ubuntu 24.04+ and Fedora 44+.
