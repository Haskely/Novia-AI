document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", () => ({
    open: false,

    toggle() {
      this.open = !this.open;
    },
  }));

  Alpine.data("timer", () => ({
    timer: null,
    counter: 0,
    init() {
      // Register an event handler that references the component instance
      this.timer = setInterval(() => {
        // console.log('Increased counter to', ++this.counter);
        ++this.counter;
      }, 1000);
    },
    destroy() {
      // Detach the handler, avoiding memory and side-effect leakage
      clearInterval(this.timer);
    },
  }));

  Alpine.store("darkMode", {
    init() {
      this.on = window.matchMedia("(prefers-color-scheme: dark)").matches;
    },

    on: false,

    toggle() {
      this.on = !this.on;
    },
  });
});
