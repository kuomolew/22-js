document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>You can buy <span id="number"></span> chocolate bars</h1>');
document.getElementById('counter').insertAdjacentHTML("afterend", '<h1><span id="change"></span> $ will left in your pocket</h1>');

let calculate = function() {
    let money = document.getElementById('money').value;
    let price = document.getElementById('price').value;
    if(price > 0 && money > 0) {
        let number = Math.floor(money / price);
        let change = money - number * price;
        
        document.getElementById('number').innerText = number;
        document.getElementById('change').innerText = change;
    } else {
        document.getElementById('change').innerText = '';
        document.getElementById('number').innerText = '';
    }
}