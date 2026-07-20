/* Presenter notes drawer for standalone Culture Camp decks.
   Reads the same #speaker-notes JSON the deck-stage uses and shows it
   in a toggleable drawer (press N or tap the Notes pill). */
(() => {
  const tag = document.getElementById('speaker-notes');
  let notes = [];
  try { notes = JSON.parse(tag ? tag.textContent : '[]') || []; } catch (e) { notes = []; }
  if (!Array.isArray(notes) || !notes.length) return;
  let idx = 0, open = false;
  const drawer = document.createElement('div');
  drawer.style.cssText = 'position:fixed;left:0;right:0;bottom:0;background:#232323;color:#fff;font:16px/1.6 Mulish,system-ui,sans-serif;padding:18px 96px 22px 24px;z-index:9999;display:none;max-height:38vh;overflow:auto;box-shadow:0 -6px 20px rgba(0,0,0,.35);white-space:pre-wrap;';
  const label = document.createElement('div');
  label.style.cssText = 'font:600 12px/1 Oswald,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#F7B23C;margin-bottom:8px;';
  const body = document.createElement('div');
  drawer.append(label, body);
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = 'Notes (N)';
  btn.setAttribute('aria-label', 'Toggle teacher notes');
  btn.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:10000;background:rgba(35,35,35,.85);color:#fff;border:0;border-radius:999px;padding:10px 18px;font:600 13px/1 Oswald,sans-serif;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;';
  function render() {
    label.textContent = 'Teacher Notes · Slide ' + (idx + 1);
    body.textContent = notes[idx] || '(no notes for this slide)';
  }
  function toggle() {
    open = !open;
    drawer.style.display = open ? 'block' : 'none';
    btn.style.background = open ? '#E21C24' : 'rgba(35,35,35,.85)';
    render();
  }
  btn.addEventListener('click', toggle);
  window.addEventListener('keydown', (e) => {
    if ((e.key === 'n' || e.key === 'N') && !e.metaKey && !e.ctrlKey && !e.altKey) toggle();
  });
  window.addEventListener('message', (e) => {
    const d = e.data;
    if (d && typeof d.slideIndexChanged === 'number') { idx = d.slideIndexChanged; if (open) render(); }
  });
  document.body.append(drawer, btn);
})();
