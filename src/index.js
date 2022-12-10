import './css/styles.css';
import { fetchCountries } from './js/fetchCountries.js';

const DEBOUNCE_DELAY = 300;
const inputCountryName = document.querySelector('input#search-box');

fetchCountries('sw');

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
