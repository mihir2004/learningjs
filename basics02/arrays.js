myarr = [24,56,45,88,90];
console.log(myarr);
myarr.push(12);
console.log(myarr);
const dcheroes = ["batman", "superman", "joker"];
const marvelHeroes = ["Ironman", "spiderman","captain america"];
const allHeroes = marvelHeroes.concat(dcheroes);
const newAllHeroes = [...marvelHeroes, ...dcheroes];
console.log(`1. ${allHeroes} \n2. ${newAllHeroes}`);