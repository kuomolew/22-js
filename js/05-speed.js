document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>You should run with speed <span id="speed"></span> km/h</h1>');

let calculate = function() {
    let distance = document.getElementById('distance').value;
    let time = document.getElementById('time').value;
    if(time > 0 && distance > 0) {
        let speed = (distance / time).toFixed(0);
        
        document.getElementById('speed').innerText = speed;
    } else {
        document.getElementById('speed').innerText = '';
    }
}