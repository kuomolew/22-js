//Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».l

et name;

while (!name) {
    name = prompt('What is your name?');
    name ? alert(`Hello, ${name}`) : name;
}