import { Module } from '../core/module';
import { random } from '../utils';
import styles from '../css/random-shape.module.css';

export class RandomShapeModule extends Module {
   #typesOfShape
  
   constructor() {
      super('ShapeModule', 'Случайная фигура');
      this.#typesOfShape = ['rect', 'circle', 'ellipse', 'polygon'];
   }

   #randomType() {
      return random(0, this.#typesOfShape.length - 1);
   };
   #randomColor() {
      return `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`;
   };
   #createRect() {
      const gradientID = random(0, 200);
      const width = random(50, 250);
      const height = random(50, 250);
      return `
        <svg>
            <defs>
            <linearGradient id="${gradientID}" gradientTransform="rotate(${random(0, 100)})">
               <stop offset="${random(0, 15)}%"  stop-color="${this.#randomColor()}"></stop>
               <stop offset="${random(85, 100)}%" stop-color="${this.#randomColor()}"></stop>
            </linearGradient>
            </defs>
            <rect 
            width="${width}" 
            height="${height}" 
            fill="url('#${gradientID}')"
            />
        </svg>
      `;
   };
   #createCircle() {
      const gradientID = random(0, 200);
      const width = random(50, 250);
      const height = random(50, 250);
      return `
         <svg>
            <defs>
            <linearGradient id="${gradientID}" gradientTransform="rotate(${random(0, 100)})">
               <stop offset="${random(0, 15)}%"  stop-color="${this.#randomColor()}"></stop>
               <stop offset="${random(85, 100)}%" stop-color="${this.#randomColor()}"></stop>
            </linearGradient>
            </defs>
            <circle 
            width="${width}" 
            height="${height}" 
            r="${random(20, 70)}" 
            cx="50%" 
            cy="50%" 
            fill="url('#${gradientID}')"
            />
         </svg>
      `;
   };
   #createEllips() {
      const gradientID = random(0, 200);
      const width = random(50, 250);
      const height = random(50, 250);
      return `
         <svg width="${width}" height="${height}">
            <defs>
               <linearGradient id="${gradientID}" gradientTransform="rotate(${random(0, 100)})">
                  <stop offset="${random(0, 15)}%"  stop-color="${this.#randomColor()}"></stop>
                  <stop offset="${random(85, 100)}%" stop-color="${this.#randomColor()}"></stop>
               </linearGradient>
            </defs>
            <ellipse 
            rx="50%" 
            ry="50%" 
            cx="50%" 
            cy="50%" 
            fill="url('#${gradientID}')"
            />
         </svg>`;
       
   };
   #createPolygon() {
      const gradientID = random(85, 100);
      return `
         <svg>
            <defs>
            <linearGradient id="${gradientID}" gradientTransform="rotate(${random(0, 100)})">
               <stop offset="${random(0, 15)}%"  stop-color="${this.#randomColor()}"></stop>
               <stop offset="${random(85, 100)}%" stop-color="${this.#randomColor()}"></stop>
            </linearGradient>
            </defs>
            <polygon points="
            ${random(5,10)},${random(100,150)}
            ${random(50,150)},${random(5,80)}
            ${random(100,250)},${random(50,150)}"
            fill="url('#${gradientID}')"
            />
         </svg>
      `;
   };
   #removeShape() {
      document.querySelector('.random-shape').remove();
   };

   #createRandomShape() {
      const wrapper = document.createElement('div');
      wrapper.className = 'random-shape rotate';
      wrapper.style.cssText = `
         position: absolute; 
         bottom: ${random(10, window.innerHeight - 250)}px;
         right: ${random(10, window.innerWidth - 250)}px;
      `
      
      switch (this.#typesOfShape[this.#randomType()]) {
         case 'rect':
             wrapper.innerHTML = this.#createRect();
             return wrapper;
         case 'circle': 
            wrapper.innerHTML = this.#createCircle();
            return wrapper;
         case 'ellipse':
            wrapper.innerHTML = this.#createEllips();
            return wrapper;
         case 'polygon': 
            wrapper.innerHTML = this.#createPolygon();
            return wrapper;
         default: 
            wrapper.innerHTML = this.#createPolygon();
            return wrapper
         }
   }
   trigger() {
      document.body.append(this.#createRandomShape());
      setTimeout(() => this.#removeShape(), 2000);
   }
}
