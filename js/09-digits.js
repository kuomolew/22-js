// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>Magic... <span id="newNumber"></span></h1>');

let calculate = function() {
    let number = document.getElementById('number').value;
    if(number > 99 && number <= 999) {
        let newNumber = '';
        while (number >= 1) {
            newNumber = newNumber + number % 10;
            number = Math.floor(number / 10);
        }
        
        
        document.getElementById('newNumber').innerText = newNumber;
    } else {
        document.getElementById('newNumber').innerText = '3 digits. 3! Is it so hard?';
    }
}