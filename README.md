## Hackaton #1

## Modules
- MessageModule: Random message or famous quote output during some time 

# Developer Documentation
## Add module:
1. Add Module script to ./src/modules/[moduleName].module.js
2. Import Module script in ./src/app.js. For exapmle: import { MessageModule } from './modules/message.module';
3. Initializate module in module list (./src/app.js). For example: const modules = [
  new MessageModule(), ...
];
4. Import module style if needed. For example: import './css/message.module.css';
5. Add module description in readme section 'Modules'
6. Add module icon (24p x 24px) to .src/assets/[molule-file-name].png, and add it to module css file (For example: li[data-type=LoggerModule]::before { background-image: url('../assets/logger.module.png') !important; }) (else it'll be default icon) 

# Components (for using in modules)
## MessagerComponent : src/components/messager.component
### add({text, title}, delay, type)
1. String text* - Message Text (necessarily)
2. String title - Message Title
3. Number delay - Lifetime (sec) default = 3
4. String type - ClassName ('info'|'error'|'warning') default - 'info'
