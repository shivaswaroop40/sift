import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { once } from 'node:events';

test('Messages calls through a gateway carry x-opencode-session', async (t) => {
  const summary = { title: 'A title', summary: ['One.', 'Two.'], why_read: 'Because.', tags: ['a', 'b'] };
  const seen = [];
  const server = http.createServer((req, res) => {
    seen.push(req.headers);
    req.resume();
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({
      id: 'msg_1', type: 'message', role: 'assistant', model: 'minimax-m3', stop_reason: 'end_turn',
      content: [{ type: 'text', text: JSON.stringify(summary) }],
      usage: { input_tokens: 1, output_tokens: 1 },
    }));
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => server.close());

  // claude.mjs reads its configuration at import time.
  process.env.ANTHROPIC_BASE_URL = `http://127.0.0.1:${server.address().port}`;
  process.env.ANTHROPIC_API_KEY = 'test';
  process.env.SIFT_MODEL = 'minimax-m3';
  delete process.env.SIFT_PROVIDER;
  delete process.env.SIFT_FALLBACK_MODEL;
  const { summarise } = await import('./claude.mjs');

  const out = await summarise({ name: 'Tech', audience: 'engineers' }, { source: 'S', title: 'T', url: 'https://example.com/' }, 'text');

  assert.equal(out.title, 'A title');
  assert.equal(seen.length, 1);
  assert.match(seen[0]['x-opencode-session'] ?? '', /^sift-\d{4}-\d{2}-\d{2}-/);
});
