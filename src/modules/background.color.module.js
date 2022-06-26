import { BackgroundColor } from '../components/background.color.component'
import { Module } from '../core/module'

export class BgColor extends Module {
  #bgColor

  constructor() {
    super('BgColor', 'Обычный фон')
    this.#bgColor = new BackgroundColor()
  }
  trigger() {
    this.#bgColor.randomColor()
  }
}

export class GradientColor extends Module {
  #gradientColor

  constructor() {
    super('GradientColor', 'Необычный фон')
    this.#gradientColor = new BackgroundColor()
  }
  trigger() {
    this.#gradientColor.randomGradient()
  }
}
