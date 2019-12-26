(function () {
  const SlideInOnScroll = {
    cacheDom() {
      this.slider = document.querySelector('.items');
    },
    init() {
      this.cacheDom();
      this.isDown = false;
      this.startX = 0;
      this.scrollLeft = 0;
      window.document.documentElement.classList.add('js-enabled');
      this.addEventListeners();
    },
    addEventListeners() {
      this.slider.addEventListener('mousedown', e => {
        this.mousedown(e);
      });

      this.slider.addEventListener('mouseleave', () => {
        this.mouseleave();
      });

      this.slider.addEventListener('mouseup', () => {
        this.mouseup();
      });

      this.slider.addEventListener('mousemove', e => {
        this.mousemove(e);
      });
    },
    mousedown(e) {
      this.isDown = true;
      this.slider.classList.add('active');
      // offsetLeft c'est le déplacement
      this.startX = e.pageX - this.slider.offsetLeft;
      this.scrollLeft = this.slider.scrollLeft;
    },
    mouseleave() {
      this.isDown = false;
      this.slider.classList.remove('active');
    },
    mouseup() {
      this.isDown = false;
      this.slider.classList.remove('active');
    },
    mousemove(e) {
      if (!this.isDown) return; // stop the fn from running
      e.preventDefault();
      const x = e.pageX - this.slider.offsetLeft;
      const walk = (x - this.startX) * 3;
      this.slider.scrollLeft = this.scrollLeft - walk;
    },
  };

  SlideInOnScroll.init();
})();