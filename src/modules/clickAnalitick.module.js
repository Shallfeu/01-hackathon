import { Module } from '../core/module';
import { MessagerComponent } from '../components/messager.component';
import '../css/clickAnalitick.module.css';

export class ClickAnaliticModule extends Module {
  constructor() {
    super('ClickAnaliticModule', 'Аналитик кликов');
    this.msgComponent = new MessagerComponent();
  }

  clickCounter(analiticBlock, delay = 2) {
    let clicks = -1;
    document.querySelector('body').addEventListener('click', () => {
      clicks += 1;
    });
    const timeStr = analiticBlock.querySelector('.analitic-time');
    const interval = setInterval(() => {
      const newTime = Number(timeStr.textContent) - 1;
      if (newTime < 1) {
        timeStr.textContent = `Время истекло, количество ваших кликов равно: ${clicks}`;
        clearInterval(interval);
        setTimeout(() => {
          this.msgComponent.delete(analiticBlock);
        }, delay * 1000);
      } else {
        timeStr.textContent = newTime;
      }
    }, 1000);
  }

  trigger() {
    const analitic = this.msgComponent.add(
      {
        text: 'Click analitic',
        title: '<div class="analitic-time">2</div>',
      },
      100,
      'success',
    );

    this.clickCounter(analitic);
  }
}
