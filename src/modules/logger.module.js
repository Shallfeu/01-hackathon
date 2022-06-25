import { Module } from '../core/module';
import { MessagerComponent } from '../components/messager.component';
import { LoggerComponent } from '../components/logger.component';

export class LoggerModule extends Module {
  constructor() {
    super('LoggerModule', 'История использования');
    [this.lggrComponent, this.msgComponent] = [new LoggerComponent(), new MessagerComponent()];    
    this.count = 10;
  }

  trigger() {    
    this.msgComponent.add({ 
      title: `История последних ${this.count} действий`,
      text: this.#getLog()
    }, 10, 'warning');
  }

  #getLog() {
    return Object.entries(this.lggrComponent.getLog)
      .reverse()
      .slice(0, this.count)
      .reduce((acc, [time, text]) => [...acc, `${this.#getDateTextByInt(time)}: ${text}`], [])
        .join('<br/>');
  }

  #getDateTextByInt(secs) {
    const date = new Date(+secs);
    return `
      ${date.getFullYear()}-${this.#addzero(date.getMonth())}-${this.#addzero(date.getDate())}
      ${this.#addzero(date.getHours())}:${this.#addzero(date.getMinutes())}:${this.#addzero(date.getSeconds())}`;
  }

  #addzero(text) {
    return String(text).length === 1 ? `0${text}` : text;
  }
}
