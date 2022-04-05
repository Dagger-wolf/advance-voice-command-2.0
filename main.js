x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){

  apple = loadImage("apple.png");

}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 to_number = Number(content);

 if(Number.isInteger(to_number)){

  document.getElementById("status").innerHTML = "Started drawing apple";
  draw_apple = "set";

 }

 else{

  document.getElementById("status").innerHTML = "The speech has not recognised a number";

 }

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {

  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width, screen_height-150)
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number + " Apple drawn";
    speak();
    draw_apple = "";

    for(to_number){

      i = 1;
      if(i < 1){

        i = i + 1;

      }

      else if(i = 1){

        i = i + 1;

      }

      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);

      image(apple, x, y, 50, 50);

    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
