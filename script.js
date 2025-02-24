const pokemon = document.getElementById("search-input");
const names = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pweight = document.getElementById("weight");
 const pheight = document.getElementById("height");
 const ptypes = document.getElementById("types");
 const hp = document.getElementById("hp");
 const attack = document.getElementById("attack");
 const defense = document.getElementById("defense");
 const specialAttack = document.getElementById("special-attack");
 const specialDefense = document.getElementById("special-defense");
 const speed = document.getElementById("speed");
 const sprite = document.getElementById("sprite-container");
 const button = document.getElementById("search-button");

const findPokemon = async () => {
  try{
    const pokemoneNameOrId = pokemon.value.toLowerCase();
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemoneNameOrId}`);
    const data = await res.json();
  pokemonInfo(data);
  }
  catch(err){
    alert("Pokemon not found")
    console.log(err)
  }

}

const pokemonInfo = data => {
  const { name, id, weight, height, types, sprites, stats } = data;
  names.textContent = `${name[0].toUpperCase() + name.slice(1)}`;
  pokemonId.textContent = `#${id}`;
  pweight.textContent = `${weight}`;
  pheight.textContent = `${height}`;
  sprite.innerHTML = `<img id="sprite" src="${sprites.front_default}" alt="${name}"></img>`
hp.textContent = stats[0].base_stat;
attack.textContent = stats[1].base_stat;
defense.textContent = stats[2].base_stat;
specialAttack.textContent = stats[3].base_stat;
specialDefense.textContent = stats[4].base_stat;
speed.textContent = stats[5].base_stat;

ptypes.innerHTML = types.map(obj => `<span>${obj.type.name[0].toUpperCase() +
obj.type.name.slice(1)}</span>`).join(" ")
}



button.addEventListener("click", e => {
  e.preventDefault();
  findPokemon()
})
    


 
  
  
  
  
  
  
  
  
  
 
