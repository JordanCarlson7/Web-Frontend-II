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
        let hikes = document.getElementById('hikes');
        let hikeNames = hikes.getElementsByTagName('h2');
        let hikeDivs = hikes.getElementsByTagName('div');
        console.log(hikeNames);
        console.log(hikeDivs);
        let thatHikeView = this.hikesView;
        let thatHikeModel = this.hikeModel;
            for (var i = 0;i < hikeNames.length; i++){
                console.log("here " + hikeNames[i].innerHTML);
                let desiredHike = thatHikeModel.getHikeByName(hikeNames[i].innerHTML);
                hikeDivs[i].addEventListener('click', function(){thatHikeView.renderOneHikeFull(desiredHike)}, true);
                //thatHikesView.renderOneHikeLight(desiredHike);
            }    
        
            
            
            
        
    }
}

/*
import Hikes from './HikeModel.js';
const myHike = new Hikes('hikeListId');
myHike.showHikeList();
*/