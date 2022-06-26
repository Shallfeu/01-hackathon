import { Module } from '../core/module';
import { MessagerComponent } from '../components/messager.component';
import '../css/message.module.css';

export class TimerModule extends Module {
  constructor() {
    super('TimerModul', 'Задать таймер');
    this.msgComponent = new MessagerComponent();
  }

  // Decrease timer
  decreseTime(timerComponent, msgForUser = 'Время вышло!', delay = 1) {
    const timerStr = timerComponent.querySelector('.time');
    const interval = setInterval(() => {
      const newTime = Number(timerStr.textContent) - 1;
      if (newTime < 1) {
        timerStr.textContent = msgForUser;
        clearInterval(interval);
        setTimeout(() => {
          this.msgComponent.delete(timerComponent);
        }, delay * 1000);
      } else {
        timerStr.textContent = newTime;
      }
    }, delay * 1000);
  }

  // Create h2 element where we will keep time
  #createTimerCounter(time) {
    const timerCounter = document.createElement('h2');
    timerCounter.classList.add('time');
    timerCounter.textContent = time;
    return timerCounter;
  }

  // Remove timer form and append timer str
  createTimer(target) {
    const mainH = target.closest('h2');
    const timerDiv = mainH.querySelector('.timer');
    const timerValue = timerDiv.querySelector('.timer-time').value;
    this.msgComponent.delete(timerDiv);
    const timeStr = this.#createTimerCounter(timerValue);
    mainH.append(timeStr);
    return mainH.closest('.MessagerComponent__item');
  }

  trigger() {
    const timer = this.msgComponent.add(
      {
        text: 'Timer',
        title:
          '<div class="timer"><input class="timer-time" type="number" value="0" min="0" max="100"><button class="timer-btn">Start</button></div>',
      },
      100,
      'error',
    );

    timer.querySelector('.timer-btn').addEventListener('click', (event) => {
      const timeStr = this.createTimer(event.target);
      this.decreseTime(timeStr);
    });
  }
}
