let date = new Date();
let hours = date.getHours();

greeting = document.getElementById('greetings');

console.log(greeting);

console.log(hours);

if (hours < 12){
  greeting.textContent = "Bom Dia";
} else if (hours < 20){
  greeting.textContent = 'Boa Tarde';
} else if (hours < 24){
  greeting.textContent = "Boa Noite";
} else {
  greeting.textContent = "Olá!";
}