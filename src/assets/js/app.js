let pageSlider = new Swiper(".page", {
  // Свои классы
  wrapperClass: "page__wrapper",
  slideClass: "page__screen",

  // Вертикальный слайдер
  direction: "vertical",

  // Количество слайдов для показа
  slidesPerView: "auto",

  // Управление клавиатурой
  keyboard: {
    // Включить\выключить
    enabled: true,
    // Включить\выключить
    // только когда слайдер
    // в пределах вьюпорта
    onlyInViewport: true,
    // Включить\выключить
    // управление клавишами
    // pageUp, pageDown
    pageUpDown: true,
  },

  // Управление колесом мыши
  mousewheel: {
    // Чувствительность колеса мыши
    sensitivity: 1,
    // Класс объекта на котором
    // будет срабатывать прокрутка мышью.
    //eventsTarget: ".image-slider"
  },

  // Отключение функционала
  // если слайдов меньше чем нужно
  watchOverflow: true,

  // Скорость
  speed: 800,

  // Обновить свайпер
  // при изменении элементов слайдера
  observer: true,

  // Обновить свайпер
  // при изменении родительских
  // элементов слайдера
  observeParents: true,

  // Обновить свайпер
  // при изменении дочерних
  // элементов слайда
  observeSlideChildren: true,

  // текущее положение
  on: {
    slideChange: function () {
      let currentSlide = this.realIndex + 1;
      document.querySelector(".current-slide").innerHTML = currentSlide;
    },
    init: function () {
      let currentSlide = this.realIndex + 1;
      document.querySelector(".current-slide").innerHTML = currentSlide;
    },
  },
});
