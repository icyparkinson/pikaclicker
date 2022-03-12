const btn = document.querySelector("button");
const score = document.querySelector("#score");
let points = Number(0)

//When you click on Pika//
document.querySelector(".illustration").addEventListener("click", addPoints)


function playAudio(audioFile) {
  let clickFile ="https://cdn.glitch.global/3dcd6566-702e-4c3d-adb7-c371085120f7/mixkit-video-game-retro-click-237.wav?v=1646965480672";
  let catFile = "https://cdn.glitch.global/3dcd6566-702e-4c3d-adb7-c371085120f7/meow.wav?v=1646963644919";
  let airhornFile = "https://cdn.glitch.global/3dcd6566-702e-4c3d-adb7-c371085120f7/Dj-air-horn-sound-effect.mp3?v=1646965266913";
  let selected;
  
  if (audioFile === "horn") {
    selected = airhornFile;
  } else if (audioFile === "cat") {
    selected = catFile;
  } else {
    selected = clickFile
  }
    
  new Audio(selected).play();
}


function makeDiv(){
const para = document.createElement("div");
let top=Math.random();
    top=top*80+'vh';                
let left=Math.random();
    left=left*90+'vw';    
let width=Math.floor(Math.random()*(16-10)+10);
     width=width+'%';

para.style.top=top;
console.log(para.style)
para.style.left=left;
para.style.position='absolute';
para.style.width=width;
para.innerHTML = '<img src="pokedollar.webp" width="50%">';
document.body.appendChild(para);
setTimeout(function() {para.hide}, 1000)

}




let multiplier = 1
let cost = 10
document.querySelector("#firstUpgrade").addEventListener("click", addToMult)


//ERROR MESSAGE

function floatError(){
  document.querySelector("#error").classList.add("error-box")
  setTimeout(function(){document.querySelector("#error").classList.remove("error-box")}, 500)
  document.querySelector("#errorMessage").innerText = "Not enough pokedollars!" 
}


function addToMult(){
  if (points >= cost){
    multiplier += 1
    console.log(`multiplier is at ${multiplier}`)
    points -= cost
    cost = 10*multiplier*2.5
    score.innerText = points
    document.querySelector("#firstUpgrade").innerText = `Upgrade click multiplier to x${multiplier+1} for ${cost} pokedollars`
  return multiplier}
  else{
    floatError()
  }
}

let thresh100 = false

function hundredThreshold(){
  playAudio("cat")
  thresh100 = true
}

//floaty clicky value stuff
function floatValue(){
  document.querySelector("#plusplus").classList.add("plus-box")
  setTimeout(function(){document.querySelector("#plusplus").classList.remove("plus-box")}, 500)
  document.querySelector("#plusNum").innerText = `+ ${1 * multiplier}`
}




function addPoints(){
  console.log("button is clicked")
// adding +value floater //
  floatValue()



  // if points reach past 100 threshold // 
    if ((points >= 50) && (thresh100 == false)){
    hundredThreshold()
    console.log("greater")
  }
  
  //playAudio(audioFile) Audio file options: "click", "horn", "cat"
  
  
  playAudio('click')
  points += (1 * multiplier)
  score.innerText = points
  

}
  
  
//   if (points < 10){
//       points += 1
//       score.innerText = points
//       } 
//   else if ((points === 10) || (points === 540) || (points === 870)){
//       playAudio("cat")
//       points += 30
//       score.innerText = points
//       document.querySelector("#mult").classList.remove("hidden")
//       document.querySelector("#mult").innerText = "Multiplier Activate!"
//   }
//   else if (points < 990){
//       points += 100
//       score.innerText = points
      
//       }
//   else if ((points === 1000) || (points === 7000) || (points === 10000)){
//     playAudio("horn")
//     points += 1000
//     score.innerText = points
//     document.querySelector("#mult").innerText = "Super Multiplier GO!"
//   }
  
//   else {
//       points += Math.floor((Math.random() * (5000 - 1000)+ 1000))
//       score.innerText = points
//       }
  
