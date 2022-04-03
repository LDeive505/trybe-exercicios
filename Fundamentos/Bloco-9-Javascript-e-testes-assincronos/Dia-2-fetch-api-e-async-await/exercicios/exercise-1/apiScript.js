// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke =  async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

   const response = await fetch(API_URL, myObject);
   const data = await response.json();
   return data.joke;
};

window.onload = async () => {
   const joke = await fetchJoke();
   console.log( typeof joke);
   const paragraph = document.querySelector('#jokeContainer');
  paragraph.innerText = joke;
  }