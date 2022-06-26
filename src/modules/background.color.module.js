import { BackgroundColorComponent } from '../components/background.color.component';
import { Module } from '../core/module';

// eslint-disable-next-line import/prefer-default-export
export class BgColorModule extends Module {
  #bgColor;

  constructor() {
    super('BgColor', 'Случайный фон');
    this.#bgColor = new BackgroundColorComponent();
  }

  trigger() {
    this.#bgColor.randomColor();
  }
}
