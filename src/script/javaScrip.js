
const btnCloseMobile = document.getElementById('CloseMobile');
const btnOpenMobile = document.getElementById('OpenMobile');
const MenuMobile = document.getElementById('navbar-mobile');

// 👉 Abrir menu
btnOpenMobile.addEventListener('click', () => {
  MenuMobile.classList.add('open'); // ativa a animação do CSS
  btnOpenMobile.classList.add('hidden'); // esconde o botão "abrir"
});

// 👉 Fechar menu
btnCloseMobile.addEventListener('click', () => {
  MenuMobile.classList.remove('open'); // fecha o menu
  btnOpenMobile.classList.remove('hidden'); // mostra o botão "abrir"
});

// 👉 Fechar menu ao clicar em um link
MenuMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    MenuMobile.classList.remove('open');
    btnOpenMobile.classList.remove('hidden');
  });
});




var MenuItem = document.querySelectorAll('.item-menu')
function SelectLink(){

  MenuItem.forEach((item) => {
    item.classList.remove("active")
  });
  this.classList.add("active")
}
MenuItem.forEach((item) =>
item.addEventListener('click', SelectLink))