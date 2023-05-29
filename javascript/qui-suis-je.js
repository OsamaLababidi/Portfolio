const header = document.querySelector("header");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 100);
  
  if (window.scrollY > 100) {
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

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open');
};


// Initialisation de ScrollMagic
var controller = new ScrollMagic.Controller();

// Sélectionnez tous les éléments ".progressbar"
var progressBars = document.querySelectorAll('.progressbar');

// Parcourir chaque élément ".progressbar" pour créer une animation de remplissage
progressBars.forEach(function (progressBar) {
  var bar = progressBar.querySelector('.bar'); // Sélectionnez l'élément ".bar" à l'intérieur de ".progressbar"
  var barWidth = bar.offsetWidth; // Obtenez la largeur réelle de la barre de progression

  // Créez une nouvelle animation GSAP pour remplir la barre de progression
  var fillAnimation = gsap.fromTo(bar, { width: '0px' }, { width: barWidth + 'px', duration: 2 });

  // Fonction pour vérifier la position de défilement et déclencher l'animation
  var checkScrollPosition = function () {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // Obtenez la position de défilement actuelle

    if (scrollPosition >= 500) {
      // Démarrez l'animation lorsque la position de défilement atteint 400 pixels
      fillAnimation.play();
    } else {
      // Mettez l'animation en pause si la position de défilement est inférieure à 400 pixels
      fillAnimation.pause();
    }
  };

  // Ajoutez l'événement de défilement pour vérifier la position
  window.addEventListener('scroll', checkScrollPosition);

  // Appelez la fonction une fois au chargement de la page pour vérifier la position initiale
  checkScrollPosition();
});



