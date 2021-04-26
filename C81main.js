var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="purple";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", draw);
function draw(e){
  color=document.getElementById("inputcolor").value;
  console.log(color);
  mousex=e.clientX-canvas.offsetLeft;
  mousey=e.clientY-canvas.offsetTop;
  console.log("x coordinate of mouse is"+mousex+"y coordinate of mouse is"+mousey);
  circle(mousex,mousey);
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
}
function erase(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}