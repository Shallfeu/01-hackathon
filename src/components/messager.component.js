import '../css/messager.component.css'

export class MessagerComponent {
  #el; // Message area DOM-element

  // Set message area
  constructor() {
    if (this.#el = document.body.querySelector(`.${this.constructor.name}`)) {
      return true;
    }
    this.#el = document.createElement('div');
    this.#el.classList.add(this.constructor.name);
    document.body.append(this.#el);
  }

  // Create and add msg to DOM
  #render(text, title, type) {
    const msg = document.createElement('div');
    msg.innerHTML = `${title ? `<h2 class='title'>${title}</h2>` : ''} <p>${text}</p>`;
    msg.classList.add(`${this.constructor.name}__item`, type);
    this.#el.append(msg);
    return msg; 
  }

  // Delete message from DOM
  #delete(msg) {
    msg.remove();
  }

  // --- Add message
  add({text, title}, delay = 3, type = 'info') {
    const msg = this.#render(text, title, type);
    setTimeout(() => this.#delete(msg), delay * 1000);
    return msg;
  }
}
