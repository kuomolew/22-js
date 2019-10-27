let name;

while (!name) {
    name = prompt('What is your name?');
    name ? alert(`Hello, ${name}`) : name;
}