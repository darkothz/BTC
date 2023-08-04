const btnConsultar = document.getElementById('btn');
const lblBTC = document.getElementById('lblBTC');

const API = axios.create({
    baseURL: 'https://www.mercadobitcoin.net/api/btc/ticker/'
});

async function consultarBTC(){
    const response = await API.get();
        console.log(response.data.ticker.high);
        lblBTC.innerHTML = response.data.ticker.high;
    }

btnConsultar.onclick = ()=>{
    consultarBTC();
}