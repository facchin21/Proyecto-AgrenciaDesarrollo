document.addEventListener("DOMContentLoaded", (event) =>{
    
    // Funcion Mostrar o Ocultar.
    const showHiddenMenu = () => {
        mobile_menu.classList.toggle("menu__mobile--show");
    }
    // Seleccionar 2 elementos pricipapales.
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");
     
    // Al dar click al boton mostramos el menu.
    mobile_btn.addEventListener("click" , showHiddenMenu );
    // Si el menu supera los 1000px en este caso se oculta el menu.
    window.addEventListener("resize", ()=>{
        let window__width = parseInt(document.body.clientWidth);
        let max = 1000;
        if(window__width > max){
            mobile_menu.classList.remove("menu__mobile--show");
        }
    })

    // Funcionamiento de del boton close.
    let btn_close = document.querySelector(".menu-mobile__close");
    btn_close.addEventListener("click" ,showHiddenMenu);

    // Desplegar submenus.

    let menu_item = document.querySelectorAll(".menu-mobile__item");

    menu_item.forEach(item => {
        item.addEventListener("click", (event)=>{
             let submenu = item.lastElementChild;
             console.log(submenu);
            if(submenu.className === "menu-mobile__submenu-mobile"){
                if(submenu.style.display === "block"){
                    submenu.style.display = "none";
                }else{
                    submenu.style.display = "block";
                }
            }
        })
    })
})

