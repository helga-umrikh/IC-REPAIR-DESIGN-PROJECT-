const entities = [
  {
    url: './asserts/image_1.jpg',
    menuBtn: "ROSTOV-ON-DON, ADMIRAL",
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months"
  },

  {
    url: "./asserts/image_2.jpg",
    menuBtn:  "SOCHI THIEVES",
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months"
  },

  {
    url: "./asserts/image_3.jpg",
    menuBtn: "ROSTOV-ON-DON PATRIOTIC",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months"
  }
];

function initSlider() {

  let currIndex = 0;

  //ноды
  const sliderBox =  document.querySelector(".compl-projects");
  const imageBox = document.querySelector(".projects-image");
  const menuBox = document.querySelector(".pr-nav");

  //СМЕНА КАРТИНКИ//
  function initImages(index) {
    imageBox.src = `${entities[index].url}`;
  };
  initImages(currIndex);

  //НАВИГАЦИЯ МЕНЮ
  function initMenu() {
    entities.forEach((option, index) => {
      let menuText = `<li class= "pr-nav-item yeseva-font"><a class="slider-menu add-border" data-index="${index}">${entities[index].menuBtn}</a></li>`;
      menuBox.innerHTML += menuText;
    });

    //обработчик для смены слайдов
    menuBox.querySelectorAll(".slider-menu").forEach(option => {
      option.addEventListener("click", function() {
        initImages(this.dataset.index);
        initProjectDetails(this.dataset.index);
      });
    });
  };
  initMenu();

  const cityItem = document.querySelector(".city");
  const areaItem = document.querySelector(".area");
  const timeItem = document.querySelector(".time");

  //СМЕНА ДАННЫХ ПРОЕКТОВ
  function initProjectDetails(currIndex) {
    cityItem.textContent = entities[currIndex].city;
    areaItem.textContent = entities[currIndex].area;
    timeItem.textContent = entities[currIndex].time;
  };
  initProjectDetails(currIndex);

  //СТРЕЛКИ  НОДЫ//
  const leftArr = sliderBox.querySelector(".arrow_left");
  const rightArr = sliderBox.querySelector(".arrow_right");

  //ПЕРЕКЛЮЧЕНИЕ СТРЕЛОК
  function initArrows() {
    leftArr.addEventListener("click", function() { 
      if(currIndex === 0) {
        currIndex = 2;
      }else if (currIndex > 0) {
        currIndex = currIndex - 1;
      };
  
      initImages(currIndex);
      initProjectDetails(currIndex);
    });

    rightArr.addEventListener("click", function() {
      if(currIndex === 2) {
        currIndex = 0; 
      }else if (currIndex < 2) {
        currIndex = currIndex + 1;
      };
      initImages(currIndex);
      initProjectDetails(currIndex);
    });
  };
  initArrows();

  const dotsBox = document.querySelector(".dot-symbols");

  // ПЕРЕКЛЮЧЕНИЕ ТОЧКАМИ
  function initDots() {
    entities.forEach((option, index) => {
      let dot = `<div class="dot-symbol" data-index="${index}"></div>`;
      dotsBox.innerHTML += dot;
    });

    dotsBox.querySelectorAll(".dot-symbol").forEach(dot => {
      dot.addEventListener("click", function() {
        initImages(this.dataset.index);
        initProjectDetails(this.dataset.index);
      })
    })
  };
  initDots();
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider();
})