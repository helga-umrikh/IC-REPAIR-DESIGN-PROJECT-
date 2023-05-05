let images = [{
  url: "./asserts/image_1.jpg"
}, {
  url: "./asserts/image_2.jpg"
}, {
  url: "./asserts/image_3.jpg"
}];



let text = ["ROSTOV-ON-DON, ADMIRAL", "SOCHI THIEVES", "ROSTOV-ON-DON PATRIOTIC"];
let cityText = ["Rostov-on-Don LCD admiral", "Sochi Thieves", "Rostov-on-Don Patriotic"];
let apartmentArea = ["81 m2", "105 m2", "93 m2"];
let repairTime= ["3.5 months", "4 months", "3 months"];

function initSlider(options) {
  if (!images || !images.length) return;

  options = options || {
    dots: true,
    autoplay: false
  };

  let sliderImages = document.querySelector(".projects-image");
  let sliderArrows = document.querySelector(".arrow-symbol");
  let sliderDots = document.querySelector(".dot-symbols");
  let sliderMenu = document.querySelector(".pr-nav");
  let projectDetails = document.querySelector(".projects_items");

  
  initImages();
  initArrows();
  initMenu();
  // addProjectDetails();

  if (options.dots) {
    initDots();
  }
  
  if (options.autoplay) {
    initAutoplay();
  }

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv =`<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index = "${index}"></div>`;
      sliderImages.innerHTML += imageDiv;

      let cityContainer = projectDetails.querySelector(".city");
      cityContainer.innerText = `${cityText[index]}`;
    })
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider-arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("arrow_left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    })
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="dot-symbol n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".dot-symbol").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }

  function initMenu() {
    images.forEach((image, index) => {
      let menuText = `<li class="pr-nav-item yeseva-font">
      <a class="slider-menu add-border n${index} ${index === 0? "active-title" : ""}"
      data-index="${index}"" href="#">${text[index]}</a>
      </li>`;
      sliderMenu.innerHTML += menuText;
    });
    sliderMenu.querySelectorAll(".slider-menu").forEach(option => {
      option.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }

  // function addProjectDetails() {
  //   images.forEach((image, index) => {
  //     let cityContainer = projectDetails.querySelector(".city");
  //     cityContainer.innerText = `${cityText[index]}`;
  //   });
  // }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }

    sliderMenu.querySelector(".active-title").classList.remove("active-title");
    sliderMenu.querySelector(".n" + num).classList.add("active-title");

  }

  function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);
  };

}



let sliderOptions = {
  dots: true,
  autoplay: true,
  autoplayInterval: 5000
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});