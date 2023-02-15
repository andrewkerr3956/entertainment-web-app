const { open, writeFile, write } = require('fs');
const openJson = require('./data.json');
const movieJson = [];
const showJson = [];
let movieCount = 0;
let showCount = 0;

for(let i = 0; i < openJson.length; i++) {
    if(openJson[i].category === 'Movie') {
        movieJson.push({id: i + 1, ...openJson[i]});
        movieCount++;
    } else {
        showJson.push({id: i + 1 , ...openJson[i]});
        showCount++;
    }
}

console.log(movieJson);


writeFile('./movies.json', JSON.stringify(movieJson), function(err) {
    if(err) throw err;
});
writeFile('./shows.json', JSON.stringify(showJson), function(err) {
    if(err) throw err;
});