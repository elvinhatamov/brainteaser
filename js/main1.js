const btn = document.querySelector(".btn")
const blue = document.querySelector(".blue");
const green = document.querySelector('.green')
const orange = document.querySelector('.orange')
const red = document.querySelector('.red')
const txt = document.querySelector("#txt")
const reset = document.querySelector('.reset')
const checkmark  = document.querySelector("#checkmark")
const correct = document.querySelector("#correct")
const time = document.querySelector('#time');
const clrChoice = document.querySelector('.color_choice')



var colors = ['red', 'green', 'blue', 'orange']


// var random = Math.floor(Math.random() * colors.length)

let num = 0;
var currentClr = "";
var correctInt = 1;
var wrongInt = 1;



btn.addEventListener('click', randomColor)
// blue.addEventListener("click",checkAnswer.bind("blue"));
// red.addEventListener('click', checkAnswer)
// green.addEventListener('click', checkAnswer)
// yellow.addEventListener('click', checkAnswer)
reset.addEventListener('click', resertButton)



 var checkAnswer = function(selectedColor ){
 console.log('color2 - ' + selectedColor)
    if(selectedColor === "red" || selectedColor === "orange" || selectedColor === "blue" || selectedColor === "green"){
    
      correct.innerHTML = correctInt++;
    }else {
     
      wrong.innerHTML = wrongInt++;

    }
  }





//setting time Interval and make it equal to myInterval val
const myInterval = setInterval(randomColor , 5000);

//setting random color function 
function randomColor(){
var random = Math.floor(Math.random() * colors.length)
currentClr = colors[random];
 
txt.style.color = colors[random]
random = Math.floor(Math.random() * colors.length)

txt.innerHTML = colors[random];
// blue.innerHTML = colors[random];
// red.innerHTML = colors[random];
// green.innerHTML = colors[random];

// calling myStopFunction
myStopFunction();
// checkAnswer();

}

//Created MyStopFunction stops intervaltime after cetrain amount run
function myStopFunction(){
  num += 1;
  if(num >= 5){
   clearInterval(myInterval);
    txt.textContent = 'GAME OVER!'
  }
console.log("2-" + num);
}


function resertButton(){
  txt.reset();
  time.reset();
  correct.reset();
}



// checkAnswer();







// if(random + 1 == colors.length){
//  txt.innerHTML = colors[random - 3]
// }else{
//  txt.innerHTML = colors[random+1]
// }

// if (random-1 == -1){
//  txt.style.color = colors[random + 3]
// }else{
//  txt.style.color = colors[random - 1]
// }



 // for(let i = 0; i<colors.length; i++){
 //  if (colors[i]==checkClr){
 //   checkClr == colors[i]
 //   console.log("Yeay");
 //  }else{
 //   console.log("Not here");

 //  }
 // }


 
