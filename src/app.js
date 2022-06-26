import './styles.css';

// 1. --- Modules import
import { MessageModule } from './modules/message.module';
import { LoggerModule } from './modules/logger.module';

// 2. --- Init modules list
const modules = [
  new MessageModule(),
  new LoggerModule(),
];

// Context menu
import { ContextMenu } from './menu';

const contextMenu = new ContextMenu('#menu', modules);
contextMenu.init();
