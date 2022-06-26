import '../css/linear.gradient.color.module.css';
import { BackgroundColorComponent } from '../components/background.color.component';
import { Module } from '../core/module';

export class GradientColorModule extends Module {
  #gradientColor;

  constructor() {
    super('GradientColorModule', 'Случайный фон градиент');
    this.#gradientColor = new BackgroundColorComponent();
  }

  trigger() {
    this.#gradientColor.randomGradient();
  }
}
