let canvas1 = document.getElementById('canvas1');
let ctx = canvas1.getContext('2d');

function quadrado(n, color, color_b, x, y, zx, zy) {
    ctx.beginPath();
    ctx.lineWidth = n;
    ctx.fillStyle = color;
    ctx.strokeStyle = color_b;
    ctx.fillRect(x,y,zx,zy);
    ctx.strokeRect(x,y,zx,zy);
    ctx.closePath();
}

function linha(n, color, color_b, x0, y0, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6) {
    ctx.beginPath();
    ctx.lineWidth = n;
    ctx.fillStyle = color;
    ctx.strokeStyle = color_b;
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.lineTo(x4,y4);
    ctx.lineTo(x5,y5);
    ctx.lineTo(x6,y6);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function arco(n, color_b, x, y, z, rad1, rad2){
    ctx.beginPath();
    ctx.lineWidth = n;
    ctx.strokeStyle = color_b;
    ctx.arc(x,y,z,rad1*Math.PI,rad2*Math.PI);
    ctx.stroke();
    ctx.closePath();
}

quadrado(1, 'blue', 'blue', 0, 0, 50, 50)
quadrado(1, 'red', 'red', 250, 0, 50, 50)
quadrado(1, 'aqua', 'aqua', 0, 120, 30, 60)
quadrado(1, 'aqua', 'aqua', 270, 135, 30, 30)
quadrado(1, 'red', 'red', 110, 150, 40, 40)

linha(1, 'yellow', 'yellow', 0, 240, 0, 300, 60, 300, 60, 270, 30, 270, 30, 240, 0, 240)
linha(1, 'black', 'black', 270, 240, 270, 270, 240, 270, 240, 300, 300, 300, 300, 240, 270, 240)
linha(2, 'gray', 'gray', 150, 235, 150, 150)
linha(1, 'red', 'red', 150, 150, 300, 0)
linha(1, 'green', 'green', 0, 150, 300, 150)

arco(1, 'green', 150, 150, 80, 1.75,0)
arco(1, 'green', 150, 150, 60, 1,0)