import '../css/background.color.module.css';
import { BackgroundColorComponent } from '../components/background.color.component';
import { Module } from '../core/module';

// eslint-disable-next-line import/prefer-default-export
export class BgColorModule extends Module {
  #bgColor;

  constructor() {
    super('BgColorModule', 'Случайный фон');
    this.#bgColor = new BackgroundColorComponent();
  }

  trigger() {
    this.#bgColor.randomColor();
  }
}
