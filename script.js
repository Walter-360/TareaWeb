


function menuClic() {
  const menu = document.getElementById("menuFranja");
  menu.classList.toggle("active");
}

function mostrarHistoria() {
  // Ocultar el video inicial y otras secciones
  const intro = document.getElementById("introVi");
  const arquitecturaVideo = document.getElementById("videoArquitectura");
  const arquitecturaText = document.getElementById("arquitecturaCompu");
  const arquitecturaCarru = document.getElementById("carouselContainerArquitectura");

  intro.style.display = "none";
  arquitecturaVideo.style.display = "none";
  arquitecturaText.style.display = "none";
  arquitecturaCarru.style.display = "none";

  // Mostrar historia
  const historia = document.getElementById("videoHistoria");
  const historiaText = document.getElementById("historiaCompu");
  const historiaCarru = document.getElementById("carouselContainer");
  historia.style.display = "block";
  historiaText.style.display = "block";
  historiaCarru.style.display = "block";

  historiaText.scrollTop = 0;
  historia.currentTime = 0;

  // Cerrar la franja
  const franja = document.getElementById("menuFranja");
  franja.classList.remove("active");
}

function mostrarArquitectura() {
  // Ocultar el video inicial y otras secciones
  const intro = document.getElementById("introVi");
  const historiaVideo = document.getElementById("videoHistoria");
  const historiaText = document.getElementById("historiaCompu");
  const historiaCarru = document.getElementById("carouselContainer");

  intro.style.display = "none";
  historiaVideo.style.display = "none";
  historiaText.style.display = "none";
  historiaCarru.style.display = "none";

  // Mostrar arquitectura
  const arquitecturaVideo = document.getElementById("videoArquitectura");
  const arquitecturaText = document.getElementById("arquitecturaCompu");
  const arquitecturaCarru = document.getElementById("carouselContainerArquitectura");
  arquitecturaVideo.style.display = "block";
  arquitecturaText.style.display = "block";
  arquitecturaCarru.style.display = "block";

  arquitecturaText.scrollTop = 0;
  arquitecturaVideo.currentTime = 0;

  // Cerrar la franja
  const franja = document.getElementById("menuFranja");
  franja.classList.remove("active");
}

function mostrarInicio() {
  // Ocultar todas las secciones menos el intro
  const intro = document.getElementById("introVi");
  const historiaVideo = document.getElementById("videoHistoria");
  const historiaText = document.getElementById("historiaCompu");
  const historiaCarru = document.getElementById("carouselContainer");

  const arquitecturaVideo = document.getElementById("videoArquitectura");
  const arquitecturaText = document.getElementById("arquitecturaCompu");
  const arquitecturaCarru = document.getElementById("carouselContainerArquitectura");

  historiaVideo.style.display = "none";
  historiaText.style.display = "none";
  historiaCarru.style.display = "none";

  arquitecturaVideo.style.display = "none";
  arquitecturaText.style.display = "none";
  arquitecturaCarru.style.display = "none";

  intro.style.display = "block";
  intro.currentTime = 0;

  // Cerrar la franja
  const franja = document.getElementById("menuFranja");
  franja.classList.remove("active");
}

function scrollCarousel(direction) {
    const carousel = document.getElementById("carousel");
    const scrollAmount = 320; // Tamaño de una imagen + espacio

    if (direction === 'left') {
      if (carousel.scrollLeft === 0) {
        // Ir al final si estamos al inicio
        carousel.scrollLeft = carousel.scrollWidth;
      } else {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    } else {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      if (Math.ceil(carousel.scrollLeft) >= maxScrollLeft) {
        // Ir al inicio si estamos al final
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }



window.addEventListener('mouseover', initLandbot, { once: true });
window.addEventListener('touchstart', initLandbot, { once: true });
var myLandbot;
function initLandbot() {
  if (!myLandbot) {
    var s = document.createElement('script');
    s.type = "module"
    s.async = true;
    s.addEventListener('load', function() {
      var myLandbot = new Landbot.Livechat({
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2802265-X395X2F76ORCQHTM/index.json',
      });
    });
    s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
}



