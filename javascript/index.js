const header = document.querySelector("header");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", this.window.scrollY > 100);
  
  if (this.window.scrollY > 100) {
    logo.style.width = "60px";
    header.classList.add("sticky");
  } else {
    logo.style.width = "120px";
    header.classList.remove("sticky");
  }
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

window.onscroll  = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
};

//Filter 
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.post-box').show('1000');
        }
        else{
           $('.post-box').not('.'+value).hide('1000') ;
           $('.post-box').filter('.'+value).show('1000') ;

        }
    });
    $('.filter-item').click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});





