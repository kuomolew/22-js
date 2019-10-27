let side, perimeter;

while(!side) {
    side = Number(prompt('What is a length of one side of the square?'));
    perimeter = 4 * side;
    side > 0 ? alert(`Perimeter of the square is ${perimeter}`) : side = NaN;
}
