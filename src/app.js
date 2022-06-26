import './styles.css';

// 1. --- Modules import
import { MessageModule } from './modules/message.module';
import { LoggerModule } from './modules/logger.module';
import { RandomShapeModule } from './modules/random-shape.module';
import { RandomSoundModule } from './modules/random-sound.module';

// 2. --- Init modules list
const modules = [
  new MessageModule(),
  new LoggerModule(),
  new RandomShapeModule(),
  new RandomSoundModule(),
];

// Context menu
import { ContextMenu } from './menu';

const contextMenu = new ContextMenu('#menu', modules);
contextMenu.init();
