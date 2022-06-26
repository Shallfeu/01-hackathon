import '../css/random-sound.module.css';
import { Module } from '../core/module';
import { random } from '../utils';

export class RandomSoundModule extends Module {
  
   constructor() {
      super('RandomSoundModule', 'Случайный звук');
   }

   async getAllPhrases() {
      try {
         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
         if (!response.ok) {
           throw new Error('Something was wrong...');
         }
         const phrases = await response.json();
         return phrases;
       } catch (err) {
         console.log(err);
       }
   }

   async getRandomPhrase(greeting = 'Привет от группы 33(34)-2') {
      const allPhrase = await this.getAllPhrases();
      if (allPhrase) {
         const randomPhrase = allPhrase[random(0, allPhrase.length - 1)]?.body.split(' ');
         return randomPhrase[random(0, randomPhrase.length - 1)] || phrase;
      }
      return greeting;
   }

   async trigger() {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(await this.getRandomPhrase())) 
   }
}
