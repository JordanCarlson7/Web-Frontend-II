import { getJSON, getLocation } from './utilities.js';
import QuakesController from './QuakesController.js'
let parent = document.getElementById("quakeList")
var quakesController = new QuakesController("#quakeList");
quakesController.init();

let preURL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
document.getElementById("locationButton").addEventListener('click', function () {
  
}, false);

