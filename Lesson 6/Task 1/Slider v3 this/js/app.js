"use strict";

const slider = {
    currentSlide: undefined,
    currentSlideIndex: null,
    nextSlideIndex: null,

    slides: document.querySelectorAll('.slide'),
    leftArrow: document.querySelector(".leftArrow"),
    rightArrow: document.querySelector(".rightArrow"),

    init() {
        this.addEventListeners();
    },

    addEventListeners() {
        let object = slider;
        this.leftArrow.addEventListener("click", function (){
            object.swipeLeft()
        });
        this.rightArrow.addEventListener("click", function () {
            object.swipeRight();
        });
    },

    swipeRight() {
        this.currentSlide = document.querySelector(".zIndex1");
        this.findCurrentSlideIndex();
        this.getNextRightSlideIndex();
        this.prepareNextSlide();
        this.playSwipeToRight();
    },

    swipeLeft() {
        this.currentSlide = document.querySelector(".zIndex1");
        this.findCurrentSlideIndex();
        this.getNextLeftSlideIndex();
        this.prepareNextSlide();
        this.playSwipeToLeft();
    },

    prepareNextSlide() {
        this.slides[this.nextSlideIndex].classList.remove("hidden");
        this.slides[this.nextSlideIndex].classList.add("zIndex0");
    },

    playSwipeToRight() {
        this.slides[this.currentSlideIndex].classList.add("toRightAni");
        let object = slider;
        setTimeout(function() {
            object.setDefaultClasses();
        }, 1000)
    },

    playSwipeToLeft() {
        this.slides[this.currentSlideIndex].classList.add("toLeftAni");
        let object = slider;
        setTimeout(function() {
            object.setDefaultClasses();
        }, 1000)
    },

    setDefaultClasses() {
        this.slides[this.currentSlideIndex].classList.remove("zIndex1");
        this.slides.forEach(function (element) {
            element.classList.remove("toRightAni");
            element.classList.remove("toLeftAni");
            element.classList.remove("zIndex0");
            element.classList.add("hidden");
        });
        this.slides[this.nextSlideIndex].classList.remove("hidden");
        this.slides[this.nextSlideIndex].classList.add("zIndex1");
    },

    findCurrentSlideIndex () {
        for (let n = 0; n <= this.slides.length; n++)
        if (this.currentSlide === this.slides[n]) {
            this.currentSlideIndex = n;
        }
    },

    getNextRightSlideIndex() {
        if ((this.currentSlideIndex + 1) > this.slides.length - 1) {
            this.nextSlideIndex = 0;
        } else {
            this.nextSlideIndex = this.currentSlideIndex + 1;
        }
    },

    getNextLeftSlideIndex() {
        if ((this.currentSlideIndex - 1) < 0) {
            this.nextSlideIndex = this.slides.length - 1;
        } else {
            this.nextSlideIndex = this.currentSlideIndex - 1;
        }
    },
}

slider.init();