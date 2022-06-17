//1 Will chose all selector from html and eaqual
const mainEl = document.querySelector('main')
const btn = document.querySelector('.btn')
const txtBtn = document.querySelector('.textBtn')
const txtClr = document.querySelector('.txtClr')
const txt = document.querySelector('#txt');

var correctInt = 0;


//2.will store color in a array and I will use on the game

var arr = ["Blue" , "Red" ,"Green" ,"Yellow"]
var random = Math.floor(Math.random()*4);
var chosenColor = arr[random];
txt.style.color = chosenColor;
txt.innerHTML = chosenColor;

if(random+1 == 4){
 txt.style.color = arr[random-1];
}else {
 txt.style.color = arr[random+1];
}
if(random-1 == -1){
 txt.style.color = arr[random + 3]
}else{
 txt.style.color = arr[random -1]
}


function random(number) {
  return Math.floor(Math.random(number) * 6)
}

txt.style.display = "block";
btn.addEventListener('click', setInterval(checkColor, 1000));


function checkColor(color, chosenColor){
 if(color === chosenColor){
  correctInt++;
 } 
}

// function randomColor(){
//   if (random + 1 == 4) {
//     txt.style.color = arr[random - 1]
//   } else {
//     txt.style.color = arr[random + 1]
//   }
//   if (random - 1 == -1) {
//     txt.style.color = arr[random + 3]
//   } else {
//     txt.style.color = arr[radon - 1]
//   }

// }





//addEventListener -----> functions will go here

// ...addEventListener("click",buttonHanler)

//3. will create function that generates randome color and store it in the same variable with text will show up
// function randomColor(){ // will be timed}

//4. I will create function which will calculate how many wrong and how many right answer user found
// function calculateAnswer(){//...}

//5. Since user will use buttons to continue the game , I will create button andf button handler error function;

// function buttonHandler(e =>....)

//6 during the functions I will need use createElement event
