const toggle= document.querySelector('.toggle');
const menu= document.querySelector('.menu');

function togglemenu (){
   if(menu.classList.contains("active")){
     menu.classList.remove("active");
     toggle.querySelector("a").innerHTML =" <i class='fas fa-bars'></i>";
   }else{
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML=" <i class='fa-solid fa-xmark'></i>";

   }
}
toggle.addEventListener('click',togglemenu,false);

// submenu
const items = document.querySelectorAll('.item');

function toggleitem(){
  if (this.classList.contains("submenu-active")){
    this.classList.remove("submenu-active");
  }else if (menu.querySelector(".submenu-active")){
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else{
    this.classList.add("submenu-active"); 
  }
}

for (let item of items ){
    if (item.querySelector('.subitem')){
        item.addEventListener('click',toggleitem,false);
    }
}


