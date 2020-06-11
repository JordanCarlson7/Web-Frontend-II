const pokemonAPI = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon(url) {

fetch(url)
.then(response => response.json())
.then(json => {
    displayData(json);
    editNextPrev(json);
 })
.catch(error => console.log("Error: " + error))

} 


function editNextPrev(res) {
    console.log(res);
    if (res.previous != null) {
        const prev = res.previous;
        let prevButton = document.getElementById('previous');
        prevButton.onclick = function() {getPokemon(prev)};
    }
    if (res.next != null) {
        const next = res.next;
        let nextButton = document.getElementById('next');
        nextButton.onclick = function() {getPokemon(next)};
    }
}

function displayData(res) {
    const array = res.results;
    const pokemonList = document.querySelector('#pokemonList');
    pokemonList.innerHTML = "";
    array.forEach(element => {
        let item = document.createElement('li');
        let name = document.createElement('h3');
        let button = document.createElement('button');
        button.id = element.name;
        button.addEventListener('click', function() {getDetails(this.id, pokemonAPI)}, false);
        button.button = element.url;
        name.innerText = element.name;
        button.appendChild(name);
        item.appendChild(button);
        pokemonList.appendChild(item);
    });

    function getDetails(id, url) {
        fetch(url + "/" + id)
        .then(response => response.json())
        .then(json => {displayDetails(json);})
    }
    function displayDetails(json) {
        const pokemonDet = document.getElementById('details');
        let name = document.createElement('h3');
        let img = document.createElement('img');
        let moves = document.createElement('ul');
        name.innerText = json.forms[0].name;
        img.src = json.sprites.front_shiny;
        json.moves.forEach(element => {
            let li = document.createElement('li');
            li.innerText = element.move.name;
            moves.appendChild(li);
        });
        pokemonDet.appendChild(name);
        pokemonDet.appendChild(img);
        pokemonDet.appendChild(moves);
    }
    
}