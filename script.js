

const menuBars = document.querySelector('.menu-bars');
const menu = document.querySelector('.navlink');

menuBars.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
    menuBars.style.display="none";
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != menuBars    ){
            menu.classList.toggle("spread");
   
            menuBars.style.display="inline-block";
    }
})
