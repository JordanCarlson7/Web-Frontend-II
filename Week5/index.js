import HikesController from './HikesController.js';

let controller = new HikesController('hikes');
controller.showHikeList();
document.addEventListener('onload', controller.addHikeListener());
//controller.showOneHike('Bechler Falls');