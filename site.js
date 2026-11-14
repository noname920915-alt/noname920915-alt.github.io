const dialog = document.querySelector('#image-viewer');
if (dialog) {
  const picture = dialog.querySelector('img');
  const title = dialog.querySelector('span');
  const original = dialog.querySelector('a');
  let last;
  document.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-picture]');
    if (!button) return;
    last = button;
    picture.src = button.dataset.picture;
    original.href = button.dataset.picture;
    picture.alt = button.dataset.label;
    title.textContent = button.dataset.label;
    dialog.showModal();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => last?.focus());
}
