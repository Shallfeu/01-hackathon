## Hackaton #1

## Modules
- MessageModule: Random message or famous quote output during some time 

## Developer Documentation
# Add module:
1. Add Module script to ./src/modules/[moduleName].module.js
2. Import Module script in ./src/app.js. For exapmle: import { MessageModule } from './modules/message.module';
3. Initializate module in module list (./src/app.js). For example: const modules = [
  new MessageModule(), ...
];
4. Import module style if needed. For example: import './css/message.module.css';
5. Add module description in readme section 'Modules'

## Components (for using in modules)
# MessagerComponent : src/components/messager.component
- add({text, title}, delay, type)
String text* - Message Text (necessarily)
String title - Message Title
Number delay - Lifetime (sec) default = 3
String type - ClassName ('info'|'error'|'warning') default - 'info'
