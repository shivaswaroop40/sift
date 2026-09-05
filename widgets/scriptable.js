// Sift lock-screen / home-screen widget for iOS via the Scriptable app.
// 1. Install Scriptable from the App Store. 2. New script, paste this. 3. Add a Scriptable widget, pick this script,
//    and put the domain slug in the widget "Parameter" field (e.g. chemical-engineering).
// Set SITE to your deployed URL.
const SITE = "https://YOUR-USER.github.io/sift";
const domain = (args.widgetParameter || "tech").trim();
const accentFallback = new Color("#1f5fbf");

const req = new Request(`${SITE}/${domain}/latest.json`);
let data;
try { data = await req.loadJSON(); } catch (e) { data = null; }

const w = new ListWidget();
w.backgroundColor = Color.dynamic(new Color("#f6f2ea"), new Color("#14130f"));
w.setPadding(12, 14, 12, 14);
const family = config.widgetFamily || "medium";
const max = family === "small" ? 2 : family === "large" ? 8 : 4;

const head = w.addText(data ? `${data.site} · ${data.name}` : "Sift");
head.font = Font.boldSystemFont(11);
head.textColor = data ? new Color(data.accent) : accentFallback;
if (data?.date) { const d = w.addText(data.date); d.font = Font.mediumMonospacedSystemFont(9); d.textOpacity = 0.6; }
w.addSpacer(6);

if (!data) {
  const t = w.addText("Could not load today's edition."); t.font = Font.systemFont(12);
} else {
  for (const s of data.stories.slice(0, max)) {
    const line = w.addText(`${s.rank}. ${s.title}`);
    line.font = Font.systemFont(family === "small" ? 11 : 12);
    line.lineLimit = family === "small" ? 3 : 2;
    line.url = s.url;
    w.addSpacer(3);
  }
}
w.url = data?.page || `${SITE}/${domain}/`;
w.refreshAfterDate = new Date(Date.now() + 60 * 60 * 1000);
Script.setWidget(w);
Script.complete();
