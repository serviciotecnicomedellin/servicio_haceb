const carrusel = document.getElementById("carrusel");
const carruselItems = document.querySelectorAll(".carrusel-item");
const anteriorBtn = document.getElementById("anterior");
const siguienteBtn = document.getElementById("siguiente");
let index = 0;
let intervalId; // Variable para almacenar el ID del intervalo

siguienteBtn.addEventListener("click", () => {
  avanzarCarrusel();
});

anteriorBtn.addEventListener("click", () => {
  retrocederCarrusel();
});

// Función para avanzar el carrusel
function avanzarCarrusel() {
  if (index < carruselItems.length - 1) {
    index++;
  } else {
    index = 0;
  }
  actualizarCarrusel();
}

// Función para retroceder el carrusel
function retrocederCarrusel() {
  if (index > 0) {
    index--;
  } else {
    index = carruselItems.length - 1;
  }
  actualizarCarrusel();
}

// Función para actualizar el carrusel
function actualizarCarrusel() {
  carrusel.style.transform = `translateX(-${index * 100}%)`;
}

// Función para iniciar el carrusel automático
function iniciarCarruselAutomatico() {
  intervalId = setInterval(avanzarCarrusel, 3000); // Avanzar cada 3 segundos (3000 ms)
}

// Iniciar el carrusel automático al cargar la página
iniciarCarruselAutomatico();

// Detener el carrusel automático cuando el mouse está sobre el carrusel
carrusel.addEventListener("mouseenter", () => {
  clearInterval(intervalId); // Detener el intervalo
});

// Reanudar el carrusel automático cuando el mouse sale del carrusel
carrusel.addEventListener("mouseleave", () => {
  iniciarCarruselAutomatico(); // Iniciar nuevamente el intervalo
});

/*scroll*/
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aparecer");
    }
  });
}

// Configurar el observador de intersección
const opcionesObservador = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Ajusta este valor según la cantidad de visibilidad requerida
};

const observador = new IntersectionObserver(
  handleIntersection,
  opcionesObservador
);

// Obtener todas las imágenes que deseas hacer aparecer
const elementos = document.querySelectorAll(
  ".contenedor-imagen-especializaciones"
);

// Agregar cada elemento al observador
elementos.forEach((elemento) => {
  observador.observe(elemento);
});

const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(
  ".contenedor-necesitas-quieres-instalacion"
);
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Variable para llevar el seguimiento de la imagen actual
let currentSlide = 0;

// Función para mostrar la diapositiva actual
function showSlide() {
  slider.style.transform = `translateX(-${currentSlide * 30}%)`; // Ajusta el 30% según el ancho de las imágenes
}

// Función para avanzar a la siguiente diapositiva
function nextSlide() {
  currentSlide++;
  if (currentSlide >= 3) {
    currentSlide = 0;
  }
  showSlide();
}

// Función para retroceder a la diapositiva anterior
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 2;
  }
  showSlide();
}

// Agregar listeners para los botones
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Verificar si estamos en un dispositivo móvil (ancho menor a 768px)
if (window.innerWidth < 768) {
  // Iniciar el slider en dispositivos móviles
  showSlide();
  setInterval(nextSlide, 4000); // Cambiar de diapositiva cada 4 segundos
} else {
  // Ocultar el slider en versiones de escritorio
  sliderContainer.style.display = "none";
}
