
let init =  function() {
    console.log('It\'s alive...');

    var radius = -1;
    console.log(radius);

    // function circleArea(){
    //     radius = document.getElementById("radius").value;
    //     console.log('start');
    //     alert(radius);
    
    // }

    function print() {
        radius = document.getElementById("radius").value;
    }
    console.log(radius);
    document.getElementById("submit").addEventListener('click', print);

    
    document.getElementById('counter').insertAdjacentHTML('afterend', '<div id="two">two</div>');

    console.log(radius);
}

init();




      





  



