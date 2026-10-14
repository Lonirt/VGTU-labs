let name = prompt("Как вас зовут?");
// Выводим приветствие
alert("Привет, " + name + "!");
const myButton = document .getElementById( "myBtn" );
myButton.addEventListener( "click" , function () {   alert( "Кнопка нажата!" ); });
let clickCount = 0;
const button = document.getElementById("myBtn2");
button.addEventListener("click", function() {
    clickCount++; // Увеличение счётчика
    console.log("Количество нажатий: " + clickCount);
});