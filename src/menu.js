import { Menu } from './core/menu';
import { LoggerComponent } from './components/logger.component';

export class ContextMenu extends Menu {
  #modules;
  #menuWidthPx;
  #menuHeightPx;
  #log;

  constructor(selector, modules = []) {
    super(selector);
    this.#modules = modules;
    this.#log = new LoggerComponent();
  }

  open(topClick, leftClick) {
    // Set menu size
    this.#computedMuneSizes();

    // Get current menu position by click position
    const [top, left] = this.#computedMenuPosition(topClick, leftClick);

    // Logging
    this.#log.setLog = `Menu open [${top}, ${left}]`;

    return this.el?.style
      && Object.keys(this.#modules).length
      && (this.el.style = `top:${top || 0}px; left:${left || 0}px; display:block;`);
  }

  close() {
    this.#log.setLog = `Menu close`;
    return this.el?.style && (this.el.style.display = 'none');
  }

  add() {    
    return Object.keys(this.#modules).length
      && (this.el.innerHTML = Object.values(this.#modules).reduce((acc, mod) => {
        this.#log.setLog = `Add module '${mod.text}' to menu`;
        return acc += mod.toHTML();        
    }, ''));
  }

  #computedMuneSizes() {
    if(this.#menuWidthPx > 0 && this.#menuHeightPx > 0) {
      return false;
    }
    const menuClone = this.el.cloneNode(true);
    menuClone.style.cssText = "display: inline-block;";
    document.body.append(menuClone);
    [this.#menuWidthPx, this.#menuHeightPx] = [menuClone.clientWidth, menuClone.clientHeight];
    menuClone.remove();

    this.#log.setLog = `Computed menu sizes [${this.#menuWidthPx} x ${this.#menuHeightPx}]px`;
  }  

  #computedMenuPosition(topClick, leftClick) {
    return [
      window.innerHeight - topClick > this.#menuHeightPx ? topClick : topClick - this.#menuHeightPx,
      window.innerWidth - leftClick > this.#menuWidthPx ? leftClick : leftClick - this.#menuWidthPx
    ];
  }

  #addSwitchBut() {
    this.el.insertAdjacentHTML('beforeend', `<li class="switch-style">Ночной режим</li>`)
    this.el.querySelector('.switch-style').addEventListener('click', (event) =>
      this.el.classList.contains('dark')
        ? (event.target.innerHTML = 'Ночной режим') && this.el.classList.remove('dark')
        : (event.target.innerHTML = 'Дневной режим') && this.el.classList.add('dark'));
  }

  init() {
    // Add modules to menu
    this.add();

    // Open menu by click on body
    document.body.addEventListener('contextmenu', (event) => 
      this.open(event.offsetY, event.offsetX) && event.preventDefault());

    // Go to module trigger
    this.el.addEventListener('click', (event) =>
      event.target.tagName === 'LI'
      && this.#modules.find((mod) => 
        (mod.type === event.target.dataset.type) && (this.#log.setLog = `Switch '${mod.text}' on!`))
        ?.trigger()
      );

    // Add style swith
    this.#addSwitchBut(); 
  }
}
