// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let canmove = 0, x = -50, y = 50, dx = 10, dy = 10, r = 30, color = "#0095DD";

// 畫圓形
function drawBall() 
{
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

// 按下按鍵時觸發
document.addEventListener("keydown", keyDownHandler);
function keyDownHandler(e) 
{
	if(e.key == "ArrowRight")        x += dx;
	else if(e.key == "ArrowLeft")    x -= dx;
    else if(e.key == "ArrowUp")      y -= dy;
	else if(e.key == "ArrowDown")    y += dy;
}

// TODO: 滑鼠移動()時觸發，改變位置(x, y)為滑鼠目前位置(e.clientX, e.clientY)
document.addEventListener("mousemove", mouse);
function mouse(e)
{
	if(canmove)
	{
		x = e.clientX - canvas.offsetLeft;
		y = e.clientY - canvas.offsetTop;
	}
}

document.addEventListener("mousedown", mousedown);
function mousedown(e)
{
	x = e.clientX - canvas.offsetLeft;
	y = e.clientY - canvas.offsetTop;
	canmove = 1;
	color = "#" + Math.floor(Math.random()*16777215).toString(16);
}

document.addEventListener("mouseup", mouseup);
function mouseup(e)
{
	canmove = 0;
}

// 更新畫布
function draw() 
{	
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    requestAnimationFrame(draw);
}
draw();