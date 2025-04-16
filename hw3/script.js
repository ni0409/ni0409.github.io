// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 3, dy = 3, r = 30, color = "#6b6b6b";
let x2 = canvas.width, y2 = 0, dx2 = 3, dy2 = 3, r2 = 30, color2 = "#ffff33", a=1;
ctx.globalAlpha=a;

// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawBall(x2, y2, r2, color2)
{
    ctx.beginPath();
    ctx.arc(x2, y2, r2, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color2;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = x + dx;
    y = y + dy;
	
	x2 = x2 + dx2;
    y2 = y2 + dy2;

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...
	if(x < 0 ||x > canvas.width)
	{
		dx = -dx;
        if(a == 1 || a == 0.7 || a == 0.4)
        {
            a = a-0.3;
            ctx.globalAlpha=a;
        }
        else if(a == 0.1 || a == 0.5)
        {
            a = a+0.4;
            ctx.globalAlpha=a;
        }
        else
        {
            a = a+0.1;
            ctx.globalAlpha=a;
        }
	}
	if(y < 0 ||y > canvas.height)
	{
		dy = -dy;
        if(a == 1 || a == 0.7 || a == 0.4)
        {
            a = a-0.3;
            ctx.globalAlpha=a;
        }
        else if(a == 0.1 || a == 0.5)
        {
            a = a+0.4;
            ctx.globalAlpha=a;
        }
        else
        {
            a = a+0.1;
            ctx.globalAlpha=a;
        }
	}
	
	if(x2 < 0 ||x2 > canvas.width)
	{
		dx2 = -dx2;
	}
	if(y2 < 0 ||y2 > canvas.height)
	{
		dy2 = -dy2;
	}
	
	if((x-x2)*(x-x2) + (y-y2)*(y-y2) < (r+r2)*(r+r2))
	{
		[dx, dx2] = [dx2, dx];
		[dy, dy2] = [dy2, dy];
        if(a == 1 || a == 0.7 || a == 0.4)
        {
            a = a-0.3;
            ctx.globalAlpha=a;
        }
        else if(a == 0.1 || a == 0.5)
        {
            a = a+0.4;
            ctx.globalAlpha=a;
        }
        else
        {
            a = a+0.1;
            ctx.globalAlpha=a;
        }
	}

    drawBall(x, y, r, color);
	drawBall(x2, y2, r2, color2);
    requestAnimationFrame(draw);
}
draw();