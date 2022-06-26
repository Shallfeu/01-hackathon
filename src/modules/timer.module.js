import { Module } from '../core/module';
import { MessagerComponent } from '../components/messager.component';
import '../css/message.module.css';

export class TimerModule extends Module {
  #timers;

  constructor() {
    super('TimerModul', 'Задать таймер');
    this.msgComponent = new MessagerComponent();
    this.#timers = [];
  }

  // Decrease timer
  decreseTime(timerComponent) {
    const timerStr = timerComponent.querySelector('.timer-time');
    const interval = setInterval(() => {
      const oldTime = Number(timerStr.textContent);
      const newTime = oldTime - 1;

      if (newTime < 1) {
        timerStr.textContent = 'Время вышло!';
        clearInterval(interval);
        setTimeout(() => {
          timerComponent.remove();
        }, 1000);
      } else {
        timerStr.textContent = newTime;
      }
    }, 1000);
  }

  // Create h2 element where we will keep time
  #createTimerCounter(time) {
    const timerCounter = document.createElement('h2');
    timerCounter.classList.add('timer-time');
    timerCounter.textContent = time;
    return timerCounter;
  }

  // Remove timer form and append timer str
  createTimer(target) {
    const mainH = target.closest('h2');
    const timerDiv = mainH.querySelector('.timer');
    const timerValue = timerDiv.querySelector('.timer-time').value;
    timerDiv.remove();
    const timeStr = this.#createTimerCounter(timerValue);
    mainH.append(timeStr);
    return mainH.closest('.MessagerComponent__item');
  }

  trigger() {
    const timer = this.msgComponent.add(
      {
        text: 'Timer',
        title:
          '<div class="timer"><input class="timer-time" type="number" value="0"><button class="timer-btn">Start</button></div>',
      },
      100,
    );
    this.#timers.push(timer);
    timer.querySelector('.timer-btn').addEventListener('click', (event) => {
      const timeStr = this.createTimer(event.target);
      this.decreseTime(timeStr);
    });
  }
}
