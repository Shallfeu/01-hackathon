import '../css/timer.component.css';

export class TimerComponent {
  #el; // Timer area DOM-element

  // Set timer area
  constructor() {
    this.#el = document.createElement('div');
    this.#el.classList.add(this.constructor.name);
    document.body.append(this.#el);
    localStorage.setItem('timerTime', 0);
  }

  // Create timer
  #createTimer(time) {
    localStorage.setItem('timerTime', time);
    const timer = document.createElement('div');
    timer.innerHTML = `<h2 class='timer'>${time}</h2>`;
    timer.classList.add(`${this.constructor.name}__item`);
    return timer;
  }

  // Delete timer from DOM
  #deleteTimer(timer) {
    timer.remove();
  }

  // Decrease timer
  decreseTime(timer) {
    const timerStr = timer.querySelector('.timer');
    const interval = setInterval(() => {
      const timeFromLC = localStorage.getItem('timerTime');
      const newTime = timeFromLC - 1;
      if (newTime < 1) {
        timerStr.textContent = 'Время вышло!';
        clearInterval(interval);
        setTimeout(() => {
          this.#deleteTimer(timer);
        }, 1000);
      } else {
        timerStr.textContent = newTime;
      }
      localStorage.setItem('timerTime', newTime);
    }, 1000);
  }

  // Add timer to DOM
  add(time) {
    const timer = this.#createTimer(time);
    this.#el.append(timer);
    return timer;
  }
}
