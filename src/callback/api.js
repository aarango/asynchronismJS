
global.fetch = require("node-fetch");

const url_api = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {
fetch(url_api)
  .then((response) => {
      if (response.status !== 200) {
        return;
      }
      response.json()
    .then((data) => {
        callback(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

fetchData(url_api, function(data1){
  console.log(data1.results[0])
}) 