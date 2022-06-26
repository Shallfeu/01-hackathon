import { Module } from '../core/module';
import { random } from '../utils';
import '../css/random-shape.module.css';

export class RandomShapeModule extends Module {
   #typesOfShape
  
   constructor() {
      super('ShapeModule', 'Случайная фигура');
      this.#typesOfShape = ['rect', 'circle', 'ellipse', 'polygon', 'line'];
   }

   randomType() {
      return random(0, this.#typesOfShape.length - 1);
   };
   randomColor() {
      return `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`;
   };
   randomGradiend() {
      return `
         <defs>
            <linearGradient id="${random(0, 200)}" gradientTransform="rotate(${random(0, 100)})">
               <stop offset="${random(0, 15)}%"  stop-color="${this.randomColor()}"></stop>
               <stop offset="${random(85, 100)}%" stop-color="${this.randomColor()}"></stop>
            </linearGradient>
         </defs>
      `;
   };
   createRect() {
      const gradientID = random(0, 200);
      const width = random(50, 250);
      const height = random(50, 250);
      return `
        <svg>
            <defs>
            <linearGradient id="${gradientID}" gradientTransform="rotate(${random(0, 100)})">
               <stop offset="${random(0, 15)}%"  stop-color="${this.randomColor()}"></stop>
               <stop offset="${random(85, 100)}%" stop-color="${this.randomColor()}"></stop>
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
   createCircle() {
      const gradientID = random(0, 200);
      const width = random(50, 250);
      const height = random(50, 250);
      return `
         <svg width="${width}" height="${height}">
            <defs>
            <linearGradient id="${gradientID}" gradientTransform="rotate(${random(0, 100)})">
               <stop offset="${random(0, 15)}%"  stop-color="${this.randomColor()}"></stop>
               <stop offset="${random(85, 100)}%" stop-color="${this.randomColor()}"></stop>
            </linearGradient>
            </defs>
            <circle 
            width="${width}" 
            height="${height}" 
            r="${random(20, 100)}" 
            cx="${random(70, 90)}" 
            cy="${random(70, 90)}" 
            fill="url('#${gradientID}')"
            />
         </svg>
      `;
   };
   createEllips() {
      const gradientID = random(0, 200);
      const width = random(50, 250);
      const height = random(50, 250);
      return `
         <svg width="${width}" height="${height}">
            <defs>
            <linearGradient id="${gradientID}" gradientTransform="rotate(${random(0, 100)})">
               <stop offset="${random(0, 15)}%"  stop-color="${this.randomColor()}"></stop>
               <stop offset="${random(85, 100)}%" stop-color="${this.randomColor()}"></stop>
            </linearGradient>
            </defs>
            <ellipse 
            rx="${random(60, 110)}" 
            ry="${random(30, 100)}" 
            cx="${random(60, 110)}" 
            cy="${random(30, 100)}" 
            fill="url('#${gradientID}')"
            />
         </svg>`;
       
   };
   createLine() {
      const gradientID = random(85, 100);
      const width = random(50, 250);
      const height = random(50, 250);

      return `
         <svg width="${width}" height="${height}">
            <defs>
            <linearGradient id="${gradientID}" gradientTransform="rotate(${random(0, 100)})">
               <stop offset="${random(0, 15)}%"  stop-color="${this.randomColor()}"></stop>
               <stop offset="${random(85, 100)}%" stop-color="${this.randomColor()}"></stop>
            </linearGradient>
            </defs>
            <line 
            x1="${random(0, 70)}" 
            y1="${random(20, 30)}" 
            x2="${random(0, 120)}" 
            y2="${random(60, 180)}" 
            stroke="url('#${gradientID}')"
            />
         </svg>
      `;
   };
   createPolygon() {
      const gradientID = random(85, 100);
      const width = random(50, 250);
      const height = random(50, 250);
      return `
         <svg width="${width}" height="${height}">
            <defs>
            <linearGradient id="${gradientID}" gradientTransform="rotate(${random(0, 100)})">
               <stop offset="${random(0, 15)}%"  stop-color="${this.randomColor()}"></stop>
               <stop offset="${random(85, 100)}%" stop-color="${this.randomColor()}"></stop>
            </linearGradient>
            </defs>
            <polygon points="
            ${random(5,10)},${random(100,150)}
            ${random(100,150)},${random(5,15)}
            ${random(200,250)},${random(100,150)}"
            fill="url('#${gradientID}')"
            />
         </svg>
      `;
   };
   removeShape() {
      document.querySelector('.random-shape').remove();
   };

   createRandomShape() {
      const wrapper = document.createElement('div');
      wrapper.className = 'random-shape';
      wrapper.style.cssText = `
         position: absolute; 
         top: ${random(10, window.innerHeight - 100)}px;
         left: ${random(10, window.innerWidth - 100)}px;
      `
      
      switch (this.#typesOfShape[this.randomType()]) {
         case 'rect':
             wrapper.innerHTML = this.createRect();
             return wrapper;
         case 'circle': 
            wrapper.innerHTML = this.createCircle();
            return wrapper;
         case 'ellipse':
            wrapper.innerHTML = this.createEllips();
            return wrapper;
         case 'line':
            wrapper.innerHTML = this.createLine();
            return wrapper;
         case 'polygon': 
            wrapper.innerHTML = this.createPolygon();
            return wrapper;
         default: 
            wrapper.innerHTML = this.createPolygon();
            return wrapper
         }
   }
   trigger() {
      document.body.append(this.createRandomShape());
      setTimeout(() => this.removeShape(), 2000);
   }
}
