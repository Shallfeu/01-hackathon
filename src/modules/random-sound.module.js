import { Module } from '../core/module';
import { random } from '../utils';

export class RandomSoundModule extends Module {
  
   constructor() {
      super('Sound', 'Случайный звук');
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

   async getRandomPhrase() {
      const allPhrase = await this.getAllPhrases();
      const randomPhrase = allPhrase[random(0, allPhrase.length - 1)].body.split(' ');
      return randomPhrase[random(0, randomPhrase.length - 1)];
   }

   async trigger() {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(await this.getRandomPhrase()));
   }
}
