const html = document.querySelector('html');

if (window.matchMedia((prefers-color-scheme dark)).matches) {
    html.classList.add('dark-mode');
}