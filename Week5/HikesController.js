import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';

export default class HikesController {
    constructor(parentId){
        this.parentElement = document.getElementById(parentId);
        this.hikeModel = new HikeModel();
        console.log("constructor" + this.hikeModel.getAllHikes());
        this.hikesView = new HikesView(parentId);
    }
    showHikeList() {
        this.hikesView.renderHikeList(this.hikeModel.getAllHikes(), 'hikes');
    }
    showOneHike(hikeName){
        let desiredHike = this.hikeModel.getHikeByName(hikeName);
        console.log("controller: " + desiredHike);
        this.hikesView.renderOneHikeLight(desiredHike);
    }
    addHikeListener(){
        document.getElementById('hikes');
        
    }
}

/*
import Hikes from './HikeModel.js';
const myHike = new Hikes('hikeListId');
myHike.showHikeList();
*/