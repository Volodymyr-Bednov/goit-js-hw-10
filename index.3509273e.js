!function(){var n,o;document.querySelector("input#search-box");n="sw",o="https://restcountries.com/v3.1/name/",console.log(o+n),fetch("".concat(o).concat(n,"?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){console.log(n)}))}();
//# sourceMappingURL=index.3509273e.js.map
