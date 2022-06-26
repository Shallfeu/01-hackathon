import './styles.css'

// 1. --- Modules import
import { MessageModule } from './modules/message.module';
import { TimerModule } from './modules/timer.module';
import { LoggerModule } from './modules/logger.module';
import { ClickAnaliticModule } from './modules/clickAnalitick.module';

// 2. --- Init modules list
const modules = [
  new MessageModule(),
  new LoggerModule(),
  new TimerModule(),
  new ClickAnaliticModule(),
];

// Context menu
import { ContextMenu } from './menu'

const contextMenu = new ContextMenu('#menu', modules);
contextMenu.init();
