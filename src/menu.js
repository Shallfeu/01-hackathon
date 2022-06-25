import { Menu } from './core/menu'

export class ContextMenu extends Menu {
  #modules;
  #menuWidthPx;
  #menuHeightPx;

  constructor(selector, modules = []) {
    super(selector);
    this.modules = modules;
  }

  open(topClick, leftClick) {
    // Set menu size
    this.#computedMuneSizes();

    // Get current menu position by click position
    const [top, left] = this.#computedMenuPosition(topClick, leftClick);

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

  #computedMuneSizes() {
    if(this.#menuWidthPx > 0 && this.#menuHeightPx > 0) {
      return false;
    }
    const menuClone = this.el.cloneNode(true);
    menuClone.style.cssText = "display: inline-block;";
    document.body.append(menuClone);
    [this.#menuWidthPx, this.#menuHeightPx] = [menuClone.clientWidth, menuClone.clientHeight];
    menuClone.remove();
  }  

  #computedMenuPosition(topClick, leftClick) {
    console.log(window.innerHeight,topClick);
    return [
      window.innerHeight - topClick > this.#menuHeightPx ? topClick : topClick - this.#menuHeightPx,
      window.innerWidth - leftClick > this.#menuWidthPx ? leftClick : leftClick - this.#menuWidthPx
    ];
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
      && this.modules.find((mod) => mod.type === event.target.dataset.type)?.trigger());
  }
}
