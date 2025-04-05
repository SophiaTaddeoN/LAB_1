//Primeiro Canvas

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

function arco(n, color, color_b, x, y, z, rad1, rad2){
    ctx.beginPath();
    ctx.lineWidth = n;
    ctx.fillStyle = color;
    ctx.strokeStyle = color_b;
    ctx.arc(x,y,z,rad1*Math.PI,rad2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function texto(n, color, tama_font, posicao, text, x, y) {  
    ctx.beginPath();
    ctx.lineWidth = n;
    ctx.fillStyle = color;
    ctx.font = tama_font;
    ctx.textAlign = posicao;
    ctx.fillText(text , x, y);
    ctx.fill();
    ctx.closePath();
}

quadrado(1, 'blue', 'blue', 0, 0, 50, 50)
quadrado(1, 'red', 'red', 250, 0, 50, 50)
quadrado(1, 'aqua', 'aqua', 0, 120, 30, 60)
quadrado(1, 'aqua', 'aqua', 270, 135, 30, 30)
quadrado(1, 'red', 'red', 110, 150, 40, 40)
linha(1, 'yellow', 'yellow', 0, 240, 0, 300, 60, 300, 60, 270, 30, 270, 30, 240, 0, 240)
linha(1, 'black', 'black', 270, 240, 270, 270, 240, 270, 240, 300, 300, 300, 300, 240, 270, 240)
linha(2, 'gray', 'gray', 150, 300, 150, 150)
linha(1, 'green', 'green', 0, 150, 300, 150)
arco(1, 'white', 'green', 150, 150, 80, 1.75,0)
arco(1, 'white', 'green', 150, 150, 80, 1, 1.25)
arco(1, 'white', 'green', 150, 150, 60, 1,0)
arco(1, 'white', 'green', 150, 300, 80, 1, 1.5)
linha(1, 'red', 'red', 150, 150, 300, 0)
linha(1, 'blue', 'blue', 0, 0, 150, 150)
arco(1, 'white', 'green', 150, 300, 60, 1.5,0)
arco(1, 'aqua', 'green', 150, 300, 40, 1,0)
arco(1, 'yellow', 'green', 70, 220, 15, 0, 2)
arco(1, 'yellow', 'green', 220, 220, 15, 0, 2)
arco(1, 'aqua', 'blue', 150, 115, 15, 0, 2)
texto(1, 'black', "20px Sans-Serif", "center", "Canvas", 150, 50)

//Segundo Canvas

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

function quadrado2(n, color, color_b, x, y, zx, zy) {
    ctx2.beginPath();
    ctx2.lineWidth = n;
    ctx2.fillStyle = color;
    ctx2.strokeStyle = color_b;
    ctx2.fillRect(x,y,zx,zy);
    ctx2.strokeRect(x,y,zx,zy);
    ctx2.closePath();
}

function linha2(n, color, color_b, x0, y0, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6) {
    ctx2.beginPath();
    ctx2.lineWidth = n;
    ctx2.fillStyle = color;
    ctx2.strokeStyle = color_b;
    ctx2.moveTo(x0,y0);
    ctx2.lineTo(x1,y1);
    ctx2.lineTo(x2,y2);
    ctx2.lineTo(x3,y3);
    ctx2.lineTo(x4,y4);
    ctx2.lineTo(x5,y5);
    ctx2.lineTo(x6,y6);
    ctx2.fill();
    ctx2.stroke();
    ctx2.closePath();
}

function arco2(n, color, color_b, x, y, z, rad1, rad2){
    ctx2.beginPath();
    ctx2.lineWidth = n;
    ctx2.fillStyle = color;
    ctx2.strokeStyle = color_b;
    ctx2.arc(x,y,z,rad1*Math.PI,rad2*Math.PI);
    ctx2.fill();
    ctx2.stroke();
    ctx2.closePath();
}

function texto2(n, color, tama_font, posicao, text, x, y) {  
    ctx2.beginPath();
    ctx2.lineWidth = n;
    ctx2.fillStyle = color;
    ctx2.font = tama_font;
    ctx2.textAlign = posicao;
    ctx2.fillText(text , x, y);
    ctx2.fill();
    ctx2.closePath();
}

quadrado2(1, 'gray', 'gray', 0, 230, 300, 70)
linha2(1, '#458efc', '#458efc', 0, 230, 0, 300, 110, 300, 110, 265, 35, 265, 35, 230)
arco2(1, '458efc', '458efc', 0, 230, 35, 1,0)
arco2(1, '458efc', '458efc', 110, 300, 35, 1,0)
quadrado2(1, 'saddlebrown', 'saddlebrown', 36, 195, 15, 35)
arco2(1, 'green', 'green', 43.5, 175, 22.5, 0, 2)
quadrado2(1, 'saddlebrown', 'saddlebrown', 110, 150, 80, 80)
linha2(1, '#f5694d', '#f5694d', 110, 150, 190, 150, 150, 110)
quadrado2(1, '#624423', '#624423', 141.25, 190, 17.5, 40)
quadrado2(1, '#47bdfd', '#47bdfd', 119, 168, 20, 20)
quadrado2(1, '#47bdfd', '#47bdfd', 160, 168, 20, 20)
quadrado2(1, 'saddlebrown', 'saddlebrown', 259, 230, 15, 35)
arco2(1, 'green', 'green', 266.5, 212.5, 22.5, 0, 2)
arco2(1, 'yellow', 'yellow', 225, 75, 34, 0, 2)

//linha2(1,'black','black', 0, 150, 300, 150)