const mode = document.getElementById('mode');

if (mode !== null) {

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {

    if (event.matches) {

      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-dark-mode', '');
      document.getElementById('asm_logo').setAttribute('src', '/asm_white.png')

    } else {

      localStorage.setItem('theme', 'light');
      document.documentElement.removeAttribute('data-dark-mode');
      document.getElementById('asm_logo').setAttribute('src', '/asm_black.png')

    }

  })

  mode.addEventListener('click', () => {

    document.documentElement.toggleAttribute('data-dark-mode');
    localStorage.setItem('theme', document.documentElement.hasAttribute('data-dark-mode') ? 'dark' : 'light');
    if (localStorage.getItem('theme') === 'dark') {

      document.getElementById('asm_logo').setAttribute('src', '/asm_white.png')

    } else {

      document.getElementById('asm_logo').setAttribute('src', '/asm_black.png')

    }

  });

  if (localStorage.getItem('theme') === 'dark') {

    document.documentElement.setAttribute('data-dark-mode', '');
    document.getElementById('asm_logo').setAttribute('src', '/asm_white.png')

  } else {

    document.documentElement.removeAttribute('data-dark-mode');
    document.getElementById('asm_logo').setAttribute('src', '/asm_black.png')

  }

}
