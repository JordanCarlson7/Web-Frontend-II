class toDo { 
    constructor(content){
        this.id = new Date().getTime(); //timestamp 
        this.content = content; //String 
        this.completed = false; //bool 
    }
   
}

toDoList = []; //toDo array
let  doneCount = 0; //count of all completed tasks

function changeFilter(preference) {
    switch(preference) {
        case 'all':
            displayTasks(toDoList);
            break;
        case 'active':
            displayTasks(toDoList.filter(task => task.completed === false));
            break;
        case 'completed':
            displayTasks(toDoList.filter(task => task.completed === true));
            break;
        default:
            console.log('no filter, sorry bro');
            break;
    }
    
}

function changeComplete(elementId) {
    let check = document.getElementById(elementId);

    console.log(check.nextSibling.nextSibling);
    if (check.innerHTML == 'X'){
        check.innerHTML = "";
        check.nextSibling.nextSibling.style.textDecoration = "none";
        doneCount++;
    }
    else {
        check.innerHTML = "X";
        check.nextSibling.nextSibling.style.textDecoration = "line-through";
        doneCount--;
    }
    let currentList = JSON.parse(localStorage.getItem("toDoList"));
    currentList.forEach(element => {
        if (element.content == elementId){
            //toggle when clicked false -> true, true -> false
            element.completed = !element.completed;
        }      
    });           
    remaining.innerHTML = doneCount + " Tasks Remaining";
    toDoList = currentList;
    localStorage.removeItem("toDoList");
    localStorage.setItem("toDoList", JSON.stringify(toDoList));


}

//create a new toDo object
function createTask() {
    
    let input = document.getElementById('taskInput').value;
    let newTask = new toDo(input);
    
    return newTask;
}

//update local array and localstorage
function addTask() {
    let newToDo = createTask();
    
    if (localStorage.getItem("toDoList")) {
        let currentList = JSON.parse(localStorage.getItem("toDoList"));
        currentList.push(newToDo);
        toDoList = currentList;
    }
    else {
        toDoList.push(newToDo);
    }
    
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    
    //update
    displayTasks(toDoList);
    
}

function deleteTask(deleteName) {
    
    let currentList = JSON.parse(localStorage.getItem("toDoList"));
    let deletedArray  = currentList.filter(task => task.content != deleteName);
    
    toDoList = deletedArray;
    localStorage.removeItem("toDoList");
    localStorage.setItem("toDoList", JSON.stringify(toDoList));

    //update
    displayTasks(toDoList);
}

function displayTasks(filteredTasks) {
    document.getElementById("tasks").innerHTML = "";
    if (localStorage.getItem("toDoList")) {
        
        //let currentList = JSON.parse(localStorage.getItem("toDoList"));
        doneCount = 0;
        filteredTasks.forEach(element => {
        console.log("in list item:" + element.content + element.completed);

        
        if(!element.completed){
            document.getElementById("tasks").innerHTML +=
            `<div class="task">
                <button type="button" id="${element.content}" onclick="changeComplete(this.id)"></button>
                <h4>${element.content}</h4>
                <button type="button" name="${element.content}" onclick="deleteTask(this.name)">DEL</button>
            </div>`;
            doneCount++;
        }
        else {
            
            document.getElementById("tasks").innerHTML +=
            `<div class="task">
                <button type="button" id="${element.content}" onclick="changeComplete(this.id)">X</button>
                <h4 style="text-decoration: line-through">${element.content}</h4>
                <button type="button" name="${element.content}" onclick="deleteTask(this.name)">DEL</button>
            </div>`;
        }

        
        });
        let remaining = document.getElementById('remaining');
        remaining.innerHTML = doneCount + " Tasks Remaining";
    }
}

window.onload = function(){
    let currentList = JSON.parse(localStorage.getItem("toDoList"));
    displayTasks(currentList);
}; 

    