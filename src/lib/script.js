const { open, writeFile, write } = require('fs');
const openJson = require('./data.json');
const movieJson = {};
const showJson = {};

for(let i = 0; i < openJson.length; i++) {
    if(openJson[i].category === 'Movie') {
        movieJson.assign({id: i + 1, ...openJson[i]});
    } else {
        showJson.assign({id: i + 1 , ...openJson[i]});
    }
}

console.log(movieJson);


// writeFile('./movies.json', JSON.stringify(movieJson), function(err) {
//     if(err) throw err;
// });
// writeFile('./shows.json', JSON.stringify(showJson), function(err) {
//     if(err) throw err;
// });