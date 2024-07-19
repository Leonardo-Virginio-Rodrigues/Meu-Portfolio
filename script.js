let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
  menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})


document.addEventListener('DOMContentLoaded', function() {
  const html = document.querySelector('html');
  
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.classList.add('dark-mode');
  }
});

