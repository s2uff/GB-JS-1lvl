"use strict";

const slider = {
    slides: document.querySelectorAll('.slide'),
    leftArrow: document.querySelector(".leftArrow"),
    rightArrow: document.querySelector(".rightArrow"),

    init() {
        this.addEventListeners();
    },

    addEventListeners() {
        this.leftArrow.addEventListener("click", this.swipeLeft);
        this.rightArrow.addEventListener("click", this.swipeRight);
    },

    swipeRight() {
        let currentSlide = document.querySelector(".zIndex1");
        let currentSlideIndex = slider.findCurrentSlideIndex(currentSlide);
        let nextSlideIndex = slider.getNextRightSlideIndex(currentSlideIndex);
        slider.prepareNextSlide(currentSlideIndex, nextSlideIndex);
        slider.playSwipeToRight(currentSlideIndex, nextSlideIndex);
    },

    swipeLeft() {
        let currentSlide = document.querySelector(".zIndex1");
        let currentSlideIndex = slider.findCurrentSlideIndex(currentSlide);
        let nextSlideIndex = slider.getNextLeftSlideIndex(currentSlideIndex);
        slider.prepareNextSlide(currentSlideIndex, nextSlideIndex);
        slider.playSwipeToLeft(currentSlideIndex, nextSlideIndex);
    },

    prepareNextSlide(currentSlideIndex, nextSlideIndex) {
        slider.slides[nextSlideIndex].classList.remove("hidden");
        slider.slides[nextSlideIndex].classList.add("zIndex0");
    },

    playSwipeToRight(currentSlideIndex, nextSlideIndex) {
        slider.slides[currentSlideIndex].classList.add("toRightAni");
        setTimeout(function() {
            slider.slides[currentSlideIndex].classList.remove("toRightAni");
            slider.setDefaultClasses(currentSlideIndex , nextSlideIndex);
        }, 1000)
    },

    playSwipeToLeft(currentSlideIndex, nextSlideIndex) {
        slider.slides[currentSlideIndex].classList.add("toLeftAni");
        setTimeout(function() {
            slider.slides[currentSlideIndex].classList.remove("toLeftAni");
            slider.setDefaultClasses(currentSlideIndex , nextSlideIndex);
        }, 1000)
    },

    setDefaultClasses(currentSlideIndex , nextSlideIndex) {
        slider.slides[currentSlideIndex].classList.remove("zIndex1");
        slider.slides[currentSlideIndex].classList.add("hidden");
        slider.slides[nextSlideIndex].classList.add("zIndex1");
        slider.slides[nextSlideIndex].classList.remove("zIndex0");
    },

    findCurrentSlideIndex (currentSlide) {
        for (let n = 0; n <= slider.slides.length; n++)
        if (currentSlide === slider.slides[n]) {
            return n;
        }
    },

    getNextRightSlideIndex(currentSlideIndex) {
        if ((currentSlideIndex + 1) > slider.slides.length - 1) {
            return 0;
        } else {
            return currentSlideIndex + 1;
        }
    },

    getNextLeftSlideIndex(currentSlideIndex) {
        if ((currentSlideIndex - 1) < 0) {
            return slider.slides.length - 1;
        } else {
            return currentSlideIndex - 1;
        }
    },
}

slider.init();