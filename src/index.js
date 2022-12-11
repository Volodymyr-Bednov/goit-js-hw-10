import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const inputCountryName = document.querySelector('input#search-box');
const countryListRef = document.querySelector('ul.country-list');
const countryInfoRef = document.querySelector('div.country-info');

const getResult = elem => {
  const enteredValue = elem.value.trim();
  if (!enteredValue) {
    removeData();
    return;
  }
  fetchCountries(enteredValue)
    .then(data => {
      createContent(data);
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

const createContent = data => {
  let content = '';
  console.log(data.length);
  if (data.length > 10) {
    removeData();
    return Notiflix.Notify.info(
      `Too many matches found. Please enter a more specific name.`
    );
  } else if ((data.length > 1) & (data.length <= 10)) {
    content = data
      .map(({ name, flags }) => {
        return `
      <li class="item commonContainer">
      <img src="${flags.svg}" alt="${name.official}" class="flag" style="width: 50px; height:40px" />
      <span>${name.official} </span>
     </li>`;
      })
      .join(' ');
    renderContent(content, countryListRef);
  } else if (data.length == 1) {
    console.log(data);
    const [{ name, capital, population, flags, languages }] = data;
    content = `
      <div class="commonContainer"> 
        <img src="${flags.svg}" alt="${
      name.official
    }" style="width: 50px; height:40px" />
        <span class="single-titel">${name.official}</span>
      </div>
      <p><b>Сapital</b>: ${capital} </p>
      <p><b>Population</b>: ${population} </p>
      <p><b>Languages</b>: ${Object.values(languages).join(', ')}</p>`;
    renderContent(content, countryInfoRef);
  }
};

const renderContent = (contetn, element) => {
  removeData();
  element.insertAdjacentHTML('beforeend', contetn);
};

const removeData = () => {
  countryListRef.innerHTML = '';
  countryInfoRef.innerHTML = '';
};
