class VideoSlides extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.swiper = new Swiper(this, {
      spaceBetween: 15,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        580: {
          slidesPerView: 2,
        },
        750: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      },
    });

    this.playVideoOnClick();
  }
  playVideoOnClick() {
    this.querySelectorAll(".swiper-slide-inner video").forEach((video) => {
      video.addEventListener("click", function () {
        if (this.paused) {
          // this.play();
        } else {
          this.pause();
          this.previousElementSibling.style.display = "flex";
        }
      });
    });
  }
}

customElements.define("video-slide", VideoSlides);

class playButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener("click", () => {
      this.nextElementSibling.play();
      this.style.display = "none";
    });
  }
}

customElements.define("video-slide-play-button", playButton);
