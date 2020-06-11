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
        .then(console.log(url + "/" + id));
    }
    
}