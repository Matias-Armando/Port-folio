let btnMenuMob= document.querySelector('#btn-mobile')
  let line1 = document.querySelector('.line-menumob-1')
  let line2 = document.querySelector('.line-menumob-2')
let menuMobile= document.querySelector('#menu-mobile')
 
  btnMenuMob.addEventListener('click', () =>{
line1.classList.toggle('ativo1')
line2.classList.toggle('ativo2')
menuMobile.classList.toggle('abrir')

  })


  // scroll suave ao clicar nos links do menu
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     }

//     // ativa highlight no menu atual
//     document.querySelectorAll(".nav-conteiner ul li a, .menu-mobile ul li a").forEach(link => {
//       link.classList.remove("ativo");
//     });
//     this.classList.add("ativo");
//   });
// });

var MenuItem = document.querySelectorAll('.item-menu')
function SelectLink(){

  MenuItem.forEach((item) => {
    item.classList.remove("ativo")
  });
  this.classList.add("ativo")
}
MenuItem.forEach((item) =>
item.addEventListener('click', SelectLink))