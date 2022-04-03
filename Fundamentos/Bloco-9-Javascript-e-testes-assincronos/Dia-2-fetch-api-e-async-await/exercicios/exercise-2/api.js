// apiScript.js     
const URL = 'https://api.coincap.io/v2/assets';
const list = document.querySelector('#list');

const fetchCriptos =  async () => {
   const response = await fetch(URL);
   const data = await response.json();
   return data.data;
};

async function showCoinsList(data) {
   let datafetched = await fetchCriptos();   
   datafetched = datafetched.filter((data) => data.rank <= 10 );
   datafetched.forEach((data) => {
      const coin = document.createElement('li');
      let { name, symbol, priceUsd } = data;
      priceUsd = Number(priceUsd);
      coin.innerText = `${name}(${symbol}): ${priceUsd.toFixed(2)}`;
      list.appendChild(coin);
   });
   console.log();
}

window.onload = async () => {
   showCoinsList();
  }

  // id, rank, simbol, name, supply