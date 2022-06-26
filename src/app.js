import './styles.css';

// 1. --- Modules import
import { MessageModule } from './modules/message.module';
import { TimerModule } from './modules/timer.module';

// Context menu
import { ContextMenu } from './menu';

// 2. --- Init modules list
const modules = [new MessageModule(), new TimerModule()];

const contextMenu = new ContextMenu('#menu', modules);
contextMenu.init();
