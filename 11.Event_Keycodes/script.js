const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  const { key, keyCode, code } = e;
  insert.innerHTML = `
    <div class="key">
        ${key === ' ' ? 'Space' : e.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${code}
        <small>event.code</small>
    </div>
  `;
});
