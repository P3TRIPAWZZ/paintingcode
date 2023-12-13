let colorPicker;
var x, y;
x = 20
y = 20



function setup() {
  createCanvas(1000, 1000);
  circleSize = x + y;
  // create color picker and start it at red
  colorPicker = createColorPicker("red");
  // position color picker
  colorPicker.position(100, 800);
  // size color picker
  colorPicker.size(50, 50);
  console.log(circleSize);
}

function mousePressed()  {
    fill(colorPicker.color());
ellipse(mouseX, mouseY, x, y);

}

function mouseReleased() {
  painting = false;
}

function keyPressed(){
    if (keyCode === UP_ARROW){
          x= x + 5;
      y =y + 5;
    }
    if (keyCode === DOWN_ARROW){
            x= x - 5;
      y =y - 5;
      
    }
  function keyTyped(){
       if (key === 'e'){
         save ("painting.png");
       }
  }
}
  