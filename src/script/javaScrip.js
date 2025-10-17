// let btnMenuMob= document.querySelector('#btn-mobile')
//   let line1 = document.querySelector('.line-menumob-1')
//   let line2 = document.querySelector('.line-menumob-2')
// let menuMobile= document.querySelector('#menu-mobile')
 
//   btnMenuMob.addEventListener('click', () =>{
// line1.classList.toggle('ativo1')
// line2.classList.toggle('ativo2')
// menuMobile.classList.toggle('abrir')

//   })
const btnCloseMobile = document.getElementById('closeMenuBtn');
const btnOpenMobile = document.getElementById('menuBtn');
const MenuMobile = document.getElementById('menu-mobile');

// 👉 Abrir menu
btnOpenMobile.addEventListener('click', () => {
  MenuMobile.classList.remove('hidden'); // mostra o menu
  btnOpenMobile.classList.add('hidden'); // esconde o botão "abrir"
});

// 👉 Fechar menu
btnCloseMobile.addEventListener('click', () => {
  MenuMobile.classList.add('hidden'); // esconde o menu
  btnOpenMobile.classList.remove('hidden'); // mostra o botão "abrir"
});

// 👉 Fechar menu ao clicar em um link
MenuMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    MenuMobile.classList.add('hidden'); // esconde o menu
    btnOpenMobile.classList.remove('hidden'); // mostra o botão "abrir" de novo
  });
});



var MenuItem = document.querySelectorAll('.item-menu')
function SelectLink(){

  MenuItem.forEach((item) => {
    item.classList.remove("ativo")
  });
  this.classList.add("ativo")
}
MenuItem.forEach((item) =>
item.addEventListener('click', SelectLink))