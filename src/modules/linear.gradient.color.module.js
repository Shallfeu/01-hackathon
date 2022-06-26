import { BackgroundColorComponent } from '../components/background.color.component';
import { Module } from '../core/module';

export class GradientColorModule extends Module {
  #gradientColor;

  constructor() {
    super('GradientColor', 'Случайный фон градиент');
    this.#gradientColor = new BackgroundColorComponent();
  }

  trigger() {
    this.#gradientColor.randomGradient();
  }
}
