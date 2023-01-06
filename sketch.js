
let iterationSlider;
let widthSlider;
let spreadSlider;
let styleSlider;
let orientationSlider;

let stopBtn;
let saveBtn;

let loopOn;

let img;
let logo;

function preload()
{
  img = loadImage('seat.png');
  logo = loadImage('brno.jpg');
}

function setup() {
  loopOn = true;
  
  // Slider to control for loop iterations
  iterationSlider = createSlider(5, 100, 30);
  iterationSlider.position(90, 500);
  iterationSlider.style('width', '80px');
  
  // Slider to control the width of lines
  widthSlider = createSlider(20, 400, 30);
  widthSlider.position(190, 500);
  widthSlider.style('width', '80px');
  
  // Slider to control the spread of lines
  spreadSlider = createSlider(2, 40, 10);
  spreadSlider.position(290, 500);
  spreadSlider.style('width', '80px');
  
  // Slider to control the design style
  styleSlider = createSlider(0, 1, 0);
  styleSlider.position(390, 500);
  styleSlider.style('width', '80px');
  
  // Slider to control if the lines are horizontal / vertical
  orientationSlider = createSlider(0, 1, 0);
  orientationSlider.position(490, 500);
  orientationSlider.style('width', '80px');
  
  // Button to save current canvas
  saveBtn = createButton("Save Canvas");
  saveBtn.position(730, 490);
  saveBtn.size(110, 30);
  saveBtn.class("pushBtn");
  saveBtn.mousePressed(saveToFile);
  
  // Button to stop generation
  stopBtn = createButton("Stop/Resume");
  stopBtn.position(600, 490);
  stopBtn.size(120, 30);
  stopBtn.class("pushBtn");
  stopBtn.mousePressed(stopCanvas);

  createCanvas(windowWidth, windowHeight);
  frameRate(0.5);
}


function saveToFile() {
  // Save the current canvas to file as png
  saveCanvas('mycanvas', 'png')
}


function stopCanvas() {
  if (loopOn)
  {
       frameRate(0);
       loopOn = false;
  }
  else {
      frameRate(0.5);
      loopOn = true;
  }
}


function draw() { 
  textSize(32);
  text('word', 10, 300); 
  background(color('#da2127'));
  stroke(255);

  let iterations = iterationSlider.value();
  let spread = spreadSlider.value();
  let designStyle = styleSlider.value();
  let orientation = orientationSlider.value();
  
  push();
  translate(90, 100);
  
  // Design A
  if (designStyle == 0) 
  {
      if (orientation == 0) { // Horizontal
          for (let i = 0; i < iterations; i++)
          {
            let w = random(20, widthSlider.value()); // random line                     length

            // Thinnest line
            strokeWeight(1);
            let x1 = random(400); // random starting x position
            line(x1, 10+spread*i, x1+w, 10+spread*i);

            // 2nd thinnest line
            strokeWeight(2);
            let x2 = random(400); // random starting x position
            line(x2, 20+spread*i, x2+w, 20+spread*i);

            // 2nd thickest line
            strokeWeight(4);
            let x3 = random(400); // random starting x position
            line(x3, 30+spread*i, x3+w, 30+spread*i);

            // Thickest line
            strokeWeight(6);
            let x4 = random(400); // random starting x position
            line(x4, 40+spread*i, x4+w, 40+spread*i);
          }
      }
      else if (orientation == 1) // Vertical
      {
          for (let i = 0; i < iterations; i++)
          {
            let w = random(20, widthSlider.value()); // random line                     length

            // Thinnest line
            strokeWeight(1);
            let x1 = random(400); // random starting x position
            line(10+spread*i, x1, 10+spread*i, x1+w);

            // 2nd thinnest line
            strokeWeight(2);
            let x2 = random(400); // random starting x position
            line(20+spread*i, x2, 20+spread*i, x2+w);

            // 2nd thickest line
            strokeWeight(4);
            let x3 = random(400); // random starting x position
            line(30+spread*i, x3, 30+spread*i, x3+w);

            // Thickest line
            strokeWeight(6);
            let x4 = random(400); // random starting x position
            line(40+spread*i, x4, 40+spread*i, x4+w);
          }
      }
      
  }

  // Design B
  if (designStyle == 1)
  {
      if (orientation == 0) { // Horizontal
        for (let i = 0; i < iterations; i++)
        {   
          let x = random(400); // random starting x position
          let w = random(20, widthSlider.value());

          // Thinnest line
          strokeWeight(1);
          line(x+random(0,30), 10+spread*i, x+w+random(0,30),                         10+spread*i);

          // 2nd thinnest line
          strokeWeight(2);
          line(x+random(0,30), 20+spread*i, x+w+random(0,30),                         20+spread*i);

          // 2nd thickest line
          strokeWeight(4);
          line(x+random(0,30), 30+spread*i, x+w+random(0,30),                         30+spread*i);

          // Thickest line
          strokeWeight(6);
          line(x+random(0,30), 40+spread*i, x+w+random(0,30),                         40+spread*i);
        }
      }
     if (orientation == 1) // Vertical
     {
        for (let i = 0; i < iterations; i++)
        {   
          let x = random(400); // random starting x position
          let w = random(20, widthSlider.value());

          // Thinnest line
          strokeWeight(1);
          line(10+spread*i, x+random(0,30), 10+spread*i,                         x+w+random(0,30));

          // 2nd thinnest line
          strokeWeight(2);
          line(20+spread*i, x+random(0,30), 20+spread*i,                                 x+w+random(0,30));

          // 2nd thickest line
          strokeWeight(4);
          line(30+spread*i, x+random(0,30), 30+spread*i,                         x+w+random(0,30));


          // Thickest line
          strokeWeight(6);
          line(40+spread*i, x+random(0,30), 40+spread*i,                         x+w+random(0,30));
        }
     }
  }
  
  let mockupWidth = 320;
  let mockupHeight = 260;
  
  copy(0, 0, 400, 400, 
       400-mockupWidth+280, 
       400-mockupHeight-170, 
       mockupWidth, mockupHeight
      );
  
  line(400, 0, 400, 400);
  
  pop();
 
  fill(color('#131313'));
  stroke(color('#131313'));
  // create rectangles to frame the layout
  rect(0, 0, 90, 1080);
  rect(0, 0, 1920, 90);
  rect(0, 450, 1920, 1000);
  rect(497, 80, 1000, 20);
  rect(487, 50, 20, 800);
  rect(850, 90, 1000, 1000);

  image(img, 500, 100, 350, 350);
  image(logo, 200, 0, 180, 90);
  
}