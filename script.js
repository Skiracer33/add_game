

const main = document.createElement("main");
document.body.appendChild(main);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var score=0
var time=120

let a1=getRandomInt(10,100)
let a2=getRandomInt(10,100)
let a3=getRandomInt(10,100)
let a4=getRandomInt(10,100)

var start_seconds = new Date().getTime() / 1000;


function start(){

  return `<h1 id="time"> Time: ${Math.floor(120 - new Date().getTime() / 1000 + start_seconds)}</h1>
  <h1 id="question"> ${a1} + ${a2} + ${a3} +${a4} =   </h1>

  <input type="text" id="name" name="name" required
  minlength="4" maxlength="8" size="10">

  <h2 id="score"> Score: ${score} </h2>

  Rules: add the numbers together. Try to get a high score as possible in 2 minutes!
  `

}


main.innerHTML = start();

function run_code(){

  console.log(a1+a2+a3+a4)
  let time = Math.floor(121 - new Date().getTime() / 1000 + start_seconds)
  document.querySelector("#time").innerHTML= `Time: ${time}`
  let ret=document.querySelector("#name").value

  if (ret==a1+a2+a3+a4){
    console.log('correct')
    score+=1
    a1=getRandomInt(10,100)
    a2=getRandomInt(10,100)
    a3=getRandomInt(10,100)
    a4=getRandomInt(10,100)
    document.querySelector("#name").value=""
    document.querySelector("#question").innerHTML=`${a1} + ${a2} + ${a3} +${a4} =   `

    document.querySelector("#score").innerHTML=`Score: ${score}`
    //main.innerHTML = score_details();
  }
  document.querySelector("#name").autofocus=true

  if (time < 1){
    if (score>20){
      main.innerHTML=`<h1> Congratulations your score was: ${score} </h1>`
    } else{
      main.innerHTML=`<h1> Your score was only ${score} try harder next time</h1>`
    }
  }
  
  console.log(ret)
}



setInterval(run_code,100)