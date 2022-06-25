import { Module } from '../core/module';
import { MessagerComponent } from '../components/messager.component';
import '../css/message.module.css';

export class MessageModule extends Module {
  constructor() {
    super('MessageModul', 'Случайное сообщение');
    this.msgComponent = new MessagerComponent();

    // (IIEF): try to set Messages list by server
    (async function (context) {
      try {
        const response = await fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
        if (!response.ok) {
          throw Error('Not today man');
        }

        const quotes = await response.json();
        context.msgs = quotes?.quotes;
      } catch (e) {}
    }(this));
  }

  async trigger() {
    const randomMsg = this.msgs?.length ? this.msgs[~~(this.msgs.length * Math.random())] : { author: 'Заголовок', quote: 'Текст' };
    this.msgComponent.add({ text: randomMsg.author, title: randomMsg.quote }, 3000);
  }
}
