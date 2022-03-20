var img;
var initials ='ac'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('rock.png')
   img2= loadImage('bunny.png')
   img3=loadImage('grass.png')
   img4=loadImage('tree.png')
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }

}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(04);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool
    stroke( 204, 229, 255 );
    testtriangle( 224, 229, 255 );
 
  } else if (toolChoice == '3') { // third tool
  stroke( 204, 229, 255 );
  fill(204,229,255,80);
  rect(mouseX, mouseY, 90, 50);
    
  } else if (toolChoice == '4') {
  stroke(255, 255, 255);
  fill(255,255,255);
  translate(mouseX, mouseY);
  scale(mouseX / 90);
  ellipse(mouseX, mouseY, 50, 50);
    
  } else if (key == '5') { // this tool calls a function
    stroke(0, 0, 255);
    testbox(20, 20, 200);
    testbox(150, 20, 20);
    

  } else if (toolChoice == '6') {

    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '7') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    testbox(mouseX, mouseY, 200, 150);
  
      
  } else if (toolChoice == '8') {
    stroke(300, 100, 0, 80);
    fill(300, 100, 0, 80);
    translate(mouseX, mouseY);
    rect(0, 0, 30, 30);
    translate(35, 10);
    rect(0, 0, 15, 15);
    translate(-25, -15);
    rect(0, 0, 55, 5);
    
  } else if (toolChoice == '9') {
     stroke(0, 0);
     rotate(mouseX / 100.0);
     rotate(mouseY / 100.0);
     testtriangle2(random(150), random(30), random(80), random(255));

  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 200, 150);
    
    
  } else if (toolChoice == 't' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img4, mouseX, mouseY, 300, 300);
    
  } else if (toolChoice == 'b' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img2, mouseX, mouseY, 100, 100);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img3, mouseX, mouseY, 100, 100);
   
     } else if (toolChoice == 'c' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 150, 200);
    
  }
 
function testtriangle(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  triangle(x-0, y-0, 200, 100, 50, 85);

}
function testtriangle2(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  triangle(500, 300, 150, 100, 150, 85);

}
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
