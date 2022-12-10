export { fetchCountries };
import Notiflix from 'notiflix';

const fetchCountries = name => {
  const baseUrl = 'https://restcountries.com/v3.1/name/';
  console.log(baseUrl + name);
  fetch(`${baseUrl}${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      console.log(response.status);
      if (!response.ok) {
        throw new Error(response.status);
        //throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.length + 1 > 10)
        Notiflix.Notify.info(
          `Too many matches found. Please enter a more specific name.`
        );

      console.log(data);
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(`Oops, there is no country with that name`);
    });
};
