import { Module } from '../core/module';
import { TimerComponent } from '../components/timer.component';
import '../css/message.module.css';
import { random } from '../utils';

export class TimerModule extends Module {
  #timers;

  constructor() {
    super('TimerModul', 'Задать таймер');
    this.tmrComponent = new TimerComponent();
    this.#timers = [];
  }

  createTimePromise(time) {
    const timer = this.tmrComponent.add(time);
    const promiseTimer = new Promise((resolve) => {
      setTimeout(() => {
        this.tmrComponent.decreseTime(timer);
        resolve();
      }, 1000);
    });

    return promiseTimer;
  }

  seqRunner(deeds) {
    return deeds.reduce((p, deed) => p.then(() => deed()), Promise.resolve());
  }

  trigger() {
    this.#timers.push(this.createTimePromise(random(2, 3)));
    if (this.#timers.length) {
      this.seqRunner(this.#timers).then(() => {
        console.log('Done!');
      });
    }
  }
}
