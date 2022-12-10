document.querySelector("input#search-box");(e=>{const o="https://restcountries.com/v3.1/name/";console.log(o+e),fetch(`${o}${e}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{console.log(e)}))})("sw");
//# sourceMappingURL=index.9286883c.js.map
