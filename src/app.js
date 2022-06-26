import './styles.css'

// 1. --- Modules import
import { MessageModule } from './modules/message.module'
import { BgColor, GradientColor } from './modules/background.color.module'

// 2. --- Init modules list
const modules = [new MessageModule(), new BgColor(), new GradientColor()]

// Context menu
import { ContextMenu } from './menu'

const contextMenu = new ContextMenu('#menu', modules)
contextMenu.init()
