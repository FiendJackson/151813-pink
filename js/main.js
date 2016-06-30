var link = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");
link.addEventListener("click", function() {
  link.classList.toggle("main-nav__toggle--open");
  menu.classList.toggle("main-nav--open");
});

var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.93863075783236,30.323054499999976],
        zoom: 16,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

}
