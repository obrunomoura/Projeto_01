/*Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:  
1. "Telefonou para vítima?" 
2. "Esteve no local do crime?"
3. "Mora perto da vítima?"
4. "Devia para a vítima?"
5. "Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a participação da
pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".*/

console.log('Digite 1 para Sim e 0 para Não, para as seguintes perguntas:');
let pergunta1 = +prompt('Você telefonou para a vítima? ');

let pergunta2 = +prompt('Você esteve no local do crime? ');

let pergunta3 = +prompt('Você mora perto da vítima? ');

let pergunta4 = +prompt('Você devia para a vítima? ');

let pergunta5 = +prompt('Você já trabalhou com a vítima? ');


if(pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5 == 5){
  console.log('Resultado: Você é o Assassino(a)!')
} 
else if(pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5 == 0){
  console.log('Resultado: Você é Inocente!')
}
else if(pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5 == 2){
  console.log('Resultado: Você é Suspeito(a)!')
}
else if(pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5 == 3 ||4){
  console.log('Resultado: Você é Cúmplice!')}