let name = prompt("Как вас зовут?");
alert("Привет, " + name + "!");
const myButton = document .getElementById( "myBtn" );
myButton.addEventListener( "click" , function () {   alert( "Кнопка нажата!" ); });
let clickCount = 0;
const button = document.getElementById("myBtn2");
button.addEventListener("click", function() {
    clickCount++;
    console.log("Количество нажатий: " + clickCount);
});
// Массив фактов
const facts = [
    "Я люблю программирование",
    "Мой любимый язык - JavaScript",
    "Я учусь в WebStorm"
];

// Функция для получения случайного факта
function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}
const threebutton = document.getElementById("btn3");
threebutton.addEventListener("click", function() {
    const randomFact = getRandomFact();
        console.log( `Случайный факт: ${randomFact}`);
    });