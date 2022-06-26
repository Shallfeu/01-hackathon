import './styles.css';

// 1. --- Modules import
import { MessageModule } from './modules/message.module';
import { BgColorModule } from './modules/background.color.module';
import { GradientColorModule } from './modules/linear.gradient.color.module';

// Context menu
import { ContextMenu } from './menu';

// 2. --- Init modules list
const modules = [
  new MessageModule(),
  new BgColorModule(),
  new GradientColorModule(),
];

const contextMenu = new ContextMenu('#menu', modules);
contextMenu.init();
