canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d"); 

var mouseEvent = "empty";


color = "Red";
width_of_the_line = 2;

var width = screen.width;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_the_line").value;
    mouseEvent= "mouseDown";
}


canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[e].clientX - canvas.offsetLeft;
   current_position_of_touch_y = e.touches[e].clientY - canvas.offsetTop;

   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = width_of_the_line;
   ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
   ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
   ctx.stroke();

   last_position_x = current_position_of_mouse_x;
   last_position_y = current_position_of_mouse_y;
}




canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown")
    {

        console.log("Current position of X and Y coordinates");
        console.log("x = "+ current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;
        ctx.moveTo(last_position_of_mouse_x, last_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

        last_position_x = current_position_of_mouse_x;
        last_position_y = current_position_of_mouse_y;

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseup";
}




canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

var last_position_x, last_position_y;
var new_width = screen.width - 70;
var new_height = screen.height - 300;

if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    console.log("My_touchstart");
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_the_line").value;

    last_position_X = e.touches[e].clientX - canvas.offsetLeft;
    last_position_y = e.touches[e].clientY - canvas.offsetTop;
}


function clear_area()
{
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}