//Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>Its <span id="area"></span> EUR</h1>');

let calculate = function() {
    const rate = 0.9;
    let usd = document.getElementById('usd').value;
    if(usd > 0) {
        let eur = (usd * rate).toFixed(2);
        
        document.getElementById('area').innerText = eur;
    } else {
        document.getElementById('area').innerText = '';
    }
}