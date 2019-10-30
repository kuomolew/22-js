document.getElementById('form').insertAdjacentHTML('afterend', '<h2>Area is: <span id="area"><span>');

// function calculateArea (form) {
//     var input = form.getElementsByTagName("input");

//     var radius;
//     for (var i = 0; i < input.length; i ++) {
//         if(input[i].type != "number") {
//             continue;
//         }

//         radius = input[i].value;
//     }
//     console.log(radius);
//     let area = radius * radius * Math.PI;
//     document.getElementById("area").textContent = area;

//     return false;
// }