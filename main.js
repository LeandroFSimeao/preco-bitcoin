function atualizaPreco(moeda, htmlElement) {

    fetch(`https://www.mercadobitcoin.net/api/${moeda}/ticker/`)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let obj = document.querySelector(`#${htmlElement}`);
        obj.innerHTML = parseFloat(data.ticker.last).toLocaleString(undefined, {minimumFractionDigits: 2});
    })
    .catch(err => console.log('Erro ao obter a cotação:', err))

}

function main() {
    atualizaPreco('LTC', 'litecoin');
    atualizaPreco('BTC', 'bitcoin');
    atualizaPreco('ETH', 'ethereum');
    atualizaPreco('DOGE', 'dogecoin');

    let obj = ["bitcoin","litecoin","ethereum","dogecoin"];
    obj.forEach(function(item){
        let elem = document.querySelector(`#${item}`);
        elem.innerHTML = "<mark>"+elem.textContent+"</mark>";
    });
}

setInterval (function () {
    main();
}, 5000);
