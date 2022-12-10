export { fetchCountries };

const fetchCountries = name => {
  const baseUrl = 'https://restcountries.com/v3.1/name/';
  console.log(baseUrl + name);
  fetch(`${baseUrl}${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
};
