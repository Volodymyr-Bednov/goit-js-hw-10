import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

//

const DEBOUNCE_DELAY = 300;
const inputCountryName = document.querySelector('input#search-box');

inputCountryName.addEventListener(
  'input',
  debounce(evt => {
    const countryName = evt.target.value.trim();
    console.log(countryName, evt.target.value.length);
    //Notiflix.info(`'Cogito ergo sum' - ${countryName}`);
    if (!countryName) return;
    fetchCountries(countryName);
  }, 300)
);

// function fetchCountries(name) {
//   const baseUrl = 'https://restcountries.com/v3.1/name/';
//   console.log(baseUrl + name);
//   fetch(baseUrl + name)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       console.log(response);
//       const res = response.json();
//       console.log(res);
//       return res;
//     })
//     .then(data => {
//       console.log(data);
//     });
// }
