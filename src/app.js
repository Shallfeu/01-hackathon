import './styles.css';

// Menu
import { ContextMenu } from './menu';

// Import module
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';

const modules = {
  'background': new BackgroundModule('background', 'Изменить фон'),
  'click': new ClicksModule('click', 'Считать клики'),
  'shape': new ShapeModule('shape', 'Случайная фигура'),
};

const contextMenu = new ContextMenu('#menu', modules);
contextMenu.init();
