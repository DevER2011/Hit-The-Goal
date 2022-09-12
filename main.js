
// Create canvas variable
var canvas = new fabric.canvas('myCanvas')
//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf-h1.png", function(img) {
hole_obj = Img;
hole_obj.scaleToWidth(50);
hole_obj.set({
	top:hole_y,
	left:hole_x

	});
canvas.add(hole_obj);
	});





	}
	// write code to Upload golf image on the canvas
	new_image();


function new_image()
{
		fabric.image.fromURL("ball.png", function(img) {
	ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.set({
		top:ball_y,
		left:ball_x
	
		});
	canvas.add(ball_obj);
		});
}

if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball.obj);
}
document.getElementById("hd3").innerHTML =  "You Have Hit The Goal!!!!!!! Congrats!!!!";
document.getElementById("myCanvas").style.borderColor="red";

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
	
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

