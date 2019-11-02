// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
const year = new Date().getFullYear();
let yearOfBirth, age;

while(!yearOfBirth) {
    yearOfBirth = Number(prompt('What is your year of birth?'));
    age = year - yearOfBirth;
    Number.isInteger(yearOfBirth) && yearOfBirth > 0 && yearOfBirth <= year ? alert(`You are ${age} years old`) : yearOfBirth = NaN;
}
