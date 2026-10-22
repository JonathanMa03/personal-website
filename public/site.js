// Progressive enhancement only: all content and navigation work without JavaScript.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Document URLs live in index.html. Without JavaScript, both documents stay visible.
const documentToggle = document.querySelector('.document-toggle');
if (documentToggle) {
  const buttons = [...documentToggle.querySelectorAll('button[data-document]')];
  const panels = buttons.map(button => document.getElementById(button.dataset.document));
  if (panels.every(Boolean)) {
    const selectDocument = selected => {
      buttons.forEach((button, index) => {
        const active = button === selected;
        button.setAttribute('aria-pressed', String(active));
        panels[index].hidden = !active;
      });
    };
    buttons.forEach(button => button.addEventListener('click', () => selectDocument(button)));
    selectDocument(buttons[0]);
    documentToggle.hidden = false;
  }
}
