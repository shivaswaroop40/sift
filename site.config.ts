// Everything about identity and voice lives here. The pipeline and the site both read it.
export const SITE = {
  name: 'Sift',
  tagline: 'Fewer things, worth reading.',
  description:
    'A daily digest per field. Sift reads every feed that matters, scores each item for depth, novelty and usefulness, and keeps the dozen worth your time.',
  author: 'Shiv',
  defaultDomain: 'tech',
  // How many stories make the cut per domain per day. Domains can override.
  perDay: 12,
  // How far back to look for candidates, in hours. Feeds can override (journals use a week).
  windowHours: 36,
  // Stories older than this drop out of the RSS feed.
  rssDays: 14,
};

// The house voice. Injected into every prompt. Edit this to change the tone everywhere at once.
export const VOICE = `
Write in plain, direct British English.
Short sentences, one idea each. No hype, no exclamation marks, no rhetorical questions.
Say what happened, then why a practitioner should care. Give the concrete detail: the number, the mechanism, the trade-off.
Do not use em-dashes, colons for drama, or lists of three adjectives.
Never open with "In a world" or "In today's". Never say "delve", "landscape", "game-changer", "unlock", "leverage" or "robust".
Do not praise the source. Do not moralise. If a claim is thin, say it is thin.
`.trim();
