import { Menu } from './core/menu'

export class ContextMenu extends Menu {
  #modules // {type: new Module(type, text),...}

  constructor(selector, modules = []) {
    super(selector);
    this.modules = modules;
  }

  open(top, left) {
    // const [width, height] = this.getComputedSize(this.el);
    // console.log(this.el.clientHeight);

    return this.el?.style
      && Object.keys(this.modules).length
      && (this.el.style = `top:${top || 0}px; left:${left || 0}px; display:block;`);
  }

  close() {
    return this.el?.style && (this.el.style.display = 'none');
  }

  add() { 
    return Object.keys(this.modules).length
      && (this.el.innerHTML = Object.values(this.modules).reduce((acc, mod) => acc += mod.toHTML(), ''));
  }

  getComputedSize(el) {
    return [
      +window.getComputedStyle(el).getPropertyValue("width").match(/\d+/g),
      +window.getComputedStyle(el).getPropertyValue("height").match(/\d+/g)
    ]
  }  

  init() {
    // Add modules to menu
    this.add();

    // Open menu by click on body
    document.body.addEventListener('contextmenu', (event) => 
      this.open(event.offsetY, event.offsetX) && event.preventDefault());

    // Go to module trigger
    this.el.addEventListener('click', (event) =>
      event.target.tagName === 'LI' && this.modules[event.target.dataset.type].trigger());
  }
}
