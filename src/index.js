import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const inputCountryName = document.querySelector('input#search-box');
const countryListRef = document.querySelector('ul.country-list');

const getResult = elem => {
  const enteredValue = elem.value.trim();
  if (!enteredValue) {
    removeData();
    return;
  }
  fetchCountries(enteredValue)
    .then(data => {
      createElements(data);
    })
    .catch(error => {
      removeData();
      Notiflix.Notify.failure(`Oops, there is no country with that name`);
    });
};

inputCountryName.addEventListener(
  'input',
  debounce(evt => {
    getResult(evt.target);
  }, DEBOUNCE_DELAY)
);

const createElements = data => {
  if (data.length > 10) {
    removeData();
    return Notiflix.Notify.info(
      `Too many matches found. Please enter a more specific name.`
    );
  }
  console.log(data.length);

  const items = data
    .map(({ name, capital, population, flags, languages }) => {
      console.log(name.official, capital, population, flags.svg, languages);
      return `
      <li>
        <img src="${flags.svg}" alt="${name.official}" style="width: 30px;" />
        <span>${name.official} </span>
        <p>Сapital: ${capital} </p>
        <p>Population: ${population} </p>
        <p>Languages: ${Object.values(languages).join(', ')} </p>
     </li>`;
    })
    .join(' ');
  renderContent(items);
};

const renderContent = contetn => {
  removeData();
  countryListRef.insertAdjacentHTML('beforeend', contetn);
};

const removeData = () => {
  countryListRef.innerHTML = '';
};
