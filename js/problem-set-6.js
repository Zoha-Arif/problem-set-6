/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  var canvas = document.getElementById("canvas1");
  var text = canvas.getContext("2d");
  text.clearRect(0, 0, canvas1.width, canvas1.height);
  text.font = "48px sans-serif";
  text.fillStyle = 'black';
  //https://www.w3schools.com/howto/howto_js_typewriter.asp
  //The fillText() method draws filled text on the canvas. The default color of the text is black.
  //object.fillText(text, x, y, maxWidth)
  // text = Specifies the text that will be written on the canvas
  // x = The x coordinate where to start painting the text (relative to the canvas)	in pixels
// y = The y coordinate where to start painting the text (relative to the canvas) in pixels
//maxWidth = Optional. The maximum allowed width of the text, in pixels.
  text.strokeText("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  var canvas2 = document.getElementById("canvas2");
  var text2 = canvas4.getContext("2d");
  text2.clearRect(0, 0, canvas2.width, canvas2.height);
  var height = prompt("Enter height");

  height = Number(height);
  if (Number.isInteger(height) == false) {
    while (Number.isInteger(height) == false){
      var input1 = prompt("That's not a number! Enter a number:");
      height = input1;
      height = Number(height);
    }
    }

  height = Number(height);
  if (1 < height) {
  }

  else {
    while (height < 1) {
      var input2 = prompt("Enter a number higher than 1:");
      height = input2;
      height = Number(height);
    }
  }

  var width = prompt("Enter width");

  width = Number(width);
  if (Number.isInteger(width) == false) {
    while (Number.isInteger(width) == false){
      var input3 = prompt("That's not a number! Enter a number:");
      width = input3;
      width = Number(width);
    }
    }

  width = Number(width);
  if (1 < width) {
  }

  else {
    while (width < 1) {
      var input4 = prompt("Enter a number higher than 1:");
      width = input4;
      width = Number(width);
    }
  }

  var x_coordinate = prompt("Enter x-coordinate");

    x_coordinate = Number(x_coordinate);
    if (Number.isInteger(x_coordinate) == false) {
      while (Number.isInteger(x_coordinate) == false){
        var input6 = prompt("That's not a number! Enter a number:");
        x_coordinate = input6;
        x_coordinate = Number(x_coordinate);
      }
      }

  console.log("5");
    x_coordinate = Number(x_coordinate);
    if (5 <= x_coordinate) {
    }

    else {
      while (x_coordinate < 5) {
        var input8 = prompt("Enter a number higher than or equal to 5:");
        x_coordinate = input8;
        x_coordinate = Number(x_coordinate);
      }
    }

    var y_coordinate = prompt("Enter y-coordinate");
      y_coordinate = Number(y_coordinate);
      if (Number.isInteger(y_coordinate) == false) {
        while (Number.isInteger(y_coordinate) == false){
          var input9 = prompt("That's not a number! Enter a number:");
          y_coordinate = input9;
          y_coordinate = Number(y_coordinate);
        }
        }

      y_coordinate = Number(y_coordinate);
      if (5 <= y_coordinate) {
      }

      else {
        while (y_coordinate < 5) {
          var input3 = prompt("Enter a number higher than or equal to 5:");
          y_coordinate = input3;
          y_coordinate = Number(y_coordinate);
        }
      }

      var canvas1 = document.getElementById("canvas2");
      var text2 = canvas1.getContext("2d");
      text2.rect(x_coordinate, y_coordinate, width, height);
      text2.stroke();


}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  var canvas3 = document.getElementById("canvas3");
  var text3 = canvas3.getContext("2d");
  text3.clearRect(0, 0, canvas3.width, canvas3.height);
  var color = prompt("What color would you like your rectangle to be?");
  color = color.toLowerCase();
  console.log(color);
  console.log(typeof color);
  console.log(typeof "black");
  let value = -1;
  if (!(color == "black" || color == "blue" || color == "green" || color == "orange" || color == "purple" || color == "red" || color == "yellow")) {
    alert(`${color} is not a supported color.`);
  }
  else {
    var canvas3 = document.getElementById("canvas3");
    var text3 = canvas3.getContext("2d");
    text3.fillStyle = color;
    text3.fillRect(10, 10, 100, 50);
    text3.stroke();
  }
  /*context.rect(x,y,width,height);
  Use .fill and .stroke to actually draw the rectangle
The fillRect() method draws a "filled" rectangle. The default color of the fill is black.
Use the fillStyle property to set a color, gradient, or pattern used to fill the drawing.
Before, the or was also resolving to true because if color is not black, then it's not blue.
while (value < 0) {
  color = prompt("Unrecognizable Color! What color would you like your rectangle to be?");
  if (!(color == "black" || color == "blue" || color == "green" || color == "orange" || color == "purple" || color == "red" || color == "yellow")){
    value = -1;
  }
  else {
    value = 0;
  }
}
if (color != black || color != blue)
Think about it then you'll understand.

The canvas element allows you to programatically place pixels on the screen. It does all of this by expecting you to specify simple (and often tedious) draw commands that mimic
 the path a pen would take on a piece of paper.

 The HTML5 <canvas> tag is used to draw graphics, on the fly, via scripting (usually JavaScript).
 However, the <canvas> element has no drawing abilities of its own (it is only a container for graphics) -
  you must use a script to actually draw the graphics.
 The getContext() method returns an object that provides methods and properties for drawing on the canvas.


*/


}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  var canvas4 = document.getElementById("canvas4");
  var text4 = canvas4.getContext("2d");
  text4.clearRect(0, 0, canvas4.width, canvas4.height);
  var side1 = prompt("You are going to draw a right triangle. Enter length of side 1:");
  var side2 = prompt("Enter length of side 2:");
  var side3 = prompt("Enter length of side 3:");
  /*Math.pow(base, exponent)*/
  var sidearray = [side1, side2, side3];
  var shortest = Math.min.apply(null, sidearray);
  var largest = Math.max.apply(null, sidearray);
  var slargest;
  for (var i = 0; i < sidearray.length; i++){
    if (sidearray[i] == sidearray[0]){
    }
    else if ((sidearray[i] == shortest) || (sidearray[i] == largest)) {
    }
    else {
      slargest = sidearray[i];
    }
  }

  var side1sq = Math.pow(shortest, 2);
  var side2sq = Math.pow(slargest, 2);
  var side3sq = Math.pow(largest, 2);
  var sqsum = side1sq + side2sq;

  if (sqsum != side3sq){
    alert("That is not a valid right triangle");
  }

  else if ((largest > canvas4.width) || (shortest > canvas4.height) || (slargest > canvas4.width)){
    alert("The triangle will not fit on the canvas.");
  }

  else {
    var canvas4 = document.getElementById("canvas4");
    var text4 = canvas4.getContext("2d");
    text4.clearRect(0, 0, canvas4.width, canvas4.height);
    text4.beginPath();
    text4.moveTo(10, 10);
    text4.lineTo(10, shortest);
    text4.lineTo(slargest, shortest);
    text4.moveTo(10, 10);
    text4.lineTo(slargest, shortest);
    /* text4.closePath(); */
    text4.stroke();
  }
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  var canvas5 = document.getElementById("canvas5");
  var text5 = canvas4.getContext("2d");
  text5.clearRect(0, 0, canvas5.width, canvas5.height);
  context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false); 
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

}
