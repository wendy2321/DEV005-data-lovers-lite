import { filtrarDatos, ordenarDatos } from './data.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const root = document.getElementById('root');
//const tipo = document.getElementById('tipoPokemon');
//parametrizar renderPokemon
const renderPokemon = (dataArray) => {
  const div = document.createElement('div');
  dataArray.forEach((pokemon) => {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    h2.textContent = pokemon.name;
    h3.textContent = pokemon.num;
    img.setAttribute('src', pokemon.img);

    article.append(img, h2, h3);
    div.append(article);

  })
  return div
}
root.appendChild(renderPokemon(data.pokemon))

//const btnOrdenar = document.querySelector('#btnOrdenar');
//btnOrdenar = (ordenarDatos(data.pokemon))
//console.log(ordenarDatos(data.pokemon));

//Filtrar pokemon
const tipoPokemon = document.getElementById('tipoPokemon');

tipoPokemon.addEventListener('change', (e) => {
  const option = e.target.value
  // console.log(option);
  const filterResult = filtrarDatos(data.pokemon, option)
  root.replaceChildren(renderPokemon(filterResult))
})
//evento change.
//console.log(filtrarDatos(data.pokemon, "grass"));
//evento change condicion

//const ordenaPokemon = document.getElementById('ordenaPokemon');

/*ordenaPokemon.addEventListener('change', (e) => {
  const orden = e.target.value
  console.log(orden);
  const ordernarPokemones = ordenarDatos(data.pokemon, orden)
  root.replaceChildren(renderPokemon(ordernarPokemones))
})*/

const ordenaPokemon = document.getElementById("ordenaPokemon");
ordenaPokemon.addEventListener('click', (e) => {
  const ordernarPokemones = e.target.value
  ordernarPokemones === "az"
  const ordenAz = ordenarDatos(data.pokemon, ordernarPokemones)
  //condicional del la z a a
  root.replaceChildren(renderPokemon(ordenAz))
  
}
)