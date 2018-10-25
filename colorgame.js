var numSquares = 6;
var colors= [];
var pickedColor;
var squares= document.querySelectorAll(".square");
var colorDisplay =  document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  
   setupModeButtons();
   setupSquares();  
   reset();
}


function setupModeButtons(){

  for(var i=0; i<modeButtons.length;i++)
  {
     modeButtons[i].addEventListener("click", function(){
     modeButtons[0].classList.remove("selected");
     modeButtons[1].classList.remove("selected");
     this.classList.add("selected");
     this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
     reset();
    }); 
  }
}


function setupSquares(){

  for(var i=0; i<squares.length;i++)
  {

    squares[i].addEventListener("click", function(){
     
      var clickedColor = this.style.background;
    if(this.style.background == pickedColor){ 
     messageDisplay.textContent= "Correct!";
     changeColors(clickedColor);
     h1.style.background = clickedColor;
     resetButton.textContent = "Play Again?";
   }else
   {
     this.style.background = "#232323";
     messageDisplay.textContent = "Try Again";
   }

     });
  }
}


function reset()
{
  colors= generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i=0; i<squares.length;i++)
    {
      if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
      }else{
        squares[i].style.display = "none";
      }
    } 
    h1.style.background = "steelblue";  messageDisplay.textContent = " ";
    resetButton.textContent = "New Colors"; 
}


resetButton.addEventListener("click", function(){
    reset(); 
});




function changeColors(color)
{
  //loop through all square and //change each color to match //given color
  for(var i=0; i<squares.length;i++){
    squares[i].style.background = color;
  }
}

function pickColor()
{
 var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(number)
{
  //make array
  //add random colors to array
  //return array
  var arr = [];
for(var i=0 ; i<number; i++)
{
  arr.push(randomColor())
  //get random color
} 
  return arr
}


function randomColor(){
  //pick a "red" shade
 var r = Math.floor(Math.random() * 256);
 var g = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"; 
}