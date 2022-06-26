import './styles.css';

// 1. --- Modules import
import { MessageModule } from './modules/message.module';
import { LoggerModule } from './modules/logger.module';
import { RandomShapeModule } from './modules/random-shape.module';
import { TimerModule } from './modules/timer.module';

// 2. --- Init modules list
const modules = [
  new MessageModule(),
  new LoggerModule(),
  new RandomShapeModule(),
  new TimerModule(),
];

// Context menu
import { ContextMenu } from './menu';

const contextMenu = new ContextMenu('#menu', modules);
contextMenu.init();
