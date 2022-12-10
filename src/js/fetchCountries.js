export { fetchCountries };
import Notiflix from 'notiflix';

const baseUrl = 'https://restcountries.com/v3.1/name/';

const fetchCountries = name => {
  return fetch(
    `${baseUrl}${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    console.log(response.status);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// const baseUrl = 'https://restcountries.com/v3.1/name/';

// const fetchCountries = name => {
//   fetch(`${baseUrl}${name}?fields=name,capital,population,flags,languages`)
//     .then(response => {
//       console.log(response.status);
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       // if (data.length + 1 > 10)
//       //   Notiflix.Notify.info(
//       //     `Too many matches found. Please enter a more specific name.`
//       //   );
//       //renderValue(data);
//       //console.log(data);
//       return data;
//     })
//     .catch(error => {
//       //console.log(error);
//       Notiflix.Notify.failure(`Oops, there is no country with that name`);
//     });
// };

// /*({
//         name: { official },
//         capital,
//         population,
//         flags: { svg },
//         languages,
//       })*/
