//Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>You can write <span id="area"></span> films</h1>');

let calculate = function() {
    const film = 0.82;
    let flash = document.getElementById('flash').value;
    if(flash > 0) {
        let number = (flash / film).toFixed(0);
        
        document.getElementById('area').innerText = number;
    } else {
        document.getElementById('area').innerText = '';
    }
}