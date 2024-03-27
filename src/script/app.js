import { data } from './data.js';
const cardsNode = document.querySelector('.cards');
const inputNode = document.querySelector('input');
const selectNode = document.querySelector('select');
const imgNode = document.querySelector('.card__img');

selectNode.addEventListener('change', selectChoice);

let choice;
function selectChoice(evt) {
  let value = evt.target.value;
  if (value === 'Not Found') {
    choice = data.filter((el) => el.house.toLowerCase() === '');
  } else if (value === 'All') {
    choice = data;
  } else {
    choice = data.filter(
      (el) => el.house.toLowerCase() === value.toLowerCase()
    );
  }
  renderCards(choice);
}

inputNode.addEventListener('input', inputHandler);

function inputHandler(evt) {
  let value = evt.target.value;

  const finder = choice.filter(
    (el) =>
      el.name.toLowerCase().includes(value.toLowerCase()) ||
      el.actor.toLowerCase().includes(value.toLowerCase())
  );
  renderCards(finder);
}

function renderCards(data) {
  cardsNode.innerHTML = '';
  data.forEach((el) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img class="card__img" ${
      el.image == false ? 'src="./src/img/person.jpeg"' : `src="${el.image}"`
    }/>
    <div class="card__desc">
    <h2 class="card__name">${el.name}</h2>
    <p class="card__bio">Actor: ${
      el.actor == '' ? 'not found ' : `${el.actor}`
    }</p>
    <p class="card__bio">Gender: ${el.gender}</p>
    <p class="card__bio">House: ${
      el.house == '' ? 'not found' : `${el.house}`
    }</p>
    <p class="card__bio">Wand core: ${
      el.wand.core == '' ? 'not found' : `${el.wand.core}`
    }</p>
    <p class="card__bio">Alive: ${el.alive ? 'yes' : 'no'}</p>
    </div>
    `;
    cardsNode.append(card);
  });
}

renderCards(data);
