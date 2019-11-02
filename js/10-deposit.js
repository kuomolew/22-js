document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>You will earn <span id="earn"></span>$</h1>');

let calculate = function() {
    let sum = document.getElementById('sum').value;
    if(sum > 0) {
        const rate = 5;
        let earn = (sum * 0.05/12).toFixed(2)*2;
        
        
        document.getElementById('earn').innerText = earn;
    } else {
        document.getElementById('earn').innerText = 'We need more from you';
    }
}