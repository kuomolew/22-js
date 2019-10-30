document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>Area of this circle is: <span id="area"></span></h1>');

let calculate = function() {
    let radius = document.getElementById('radius').value;
    if(radius > 0) {
        let area = (Math.PI * radius * radius).toFixed(3);
        
        document.getElementById('area').innerText = area;
    } else {
        document.getElementById('area').innerText = '';
    }
}