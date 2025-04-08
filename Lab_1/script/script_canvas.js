//Primeiro Canvas

let canvas1 = document.getElementById('canvas1');
let ctx = canvas1.getContext('2d');

function quadrado(contexto,n, color, color_b, x, y, zx, zy) {
    contexto.beginPath();
    contexto.lineWidth = n;
    contexto.fillStyle = color;
    contexto.strokeStyle = color_b;
    contexto.fillRect(x,y,zx,zy);
    contexto.strokeRect(x,y,zx,zy);
    contexto.closePath();
}

function linha(contexto, n, color, color_b, x0, y0, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6) {
    contexto.beginPath();
    contexto.lineWidth = n;
    contexto.fillStyle = color;
    contexto.strokeStyle = color_b;
    contexto.moveTo(x0,y0);
    contexto.lineTo(x1,y1);
    contexto.lineTo(x2,y2);
    contexto.lineTo(x3,y3);
    contexto.lineTo(x4,y4);
    contexto.lineTo(x5,y5);
    contexto.lineTo(x6,y6);
    contexto.fill();
    contexto.stroke();
    contexto.closePath();
}

function arco(contexto, n, color, color_b, x, y, z, rad1, rad2){
    contexto.beginPath();
    contexto.lineWidth = n;
    contexto.fillStyle = color;
    contexto.strokeStyle = color_b;
    contexto.arc(x,y,z,rad1*Math.PI,rad2*Math.PI);
    contexto.fill();
    contexto.stroke();
    contexto.closePath();
}

function texto(contexto, n, color, tama_font, posicao, text, x, y) {  
    contexto.beginPath();
    contexto.lineWidth = n;
    contexto.fillStyle = color;
    contexto.font = tama_font;
    contexto.textAlign = posicao;
    contexto.fillText(text , x, y);
    contexto.fill();
    contexto.closePath();
}

quadrado(ctx,1, 'blue', 'blue', 0, 0, 50, 50)
quadrado(ctx,1, 'red', 'red', 250, 0, 50, 50)
quadrado(ctx,1, 'aqua', 'aqua', 0, 120, 30, 60)
quadrado(ctx,1, 'aqua', 'aqua', 270, 135, 30, 30)
quadrado(ctx,1, 'red', 'red', 110, 150, 40, 40)
linha(ctx,1, 'yellow', 'yellow', 0, 240, 0, 300, 60, 300, 60, 270, 30, 270, 30, 240, 0, 240)
linha(ctx,1, 'black', 'black', 270, 240, 270, 270, 240, 270, 240, 300, 300, 300, 300, 240, 270, 240)
linha(ctx,2, 'gray', 'gray', 150, 300, 150, 150)
linha(ctx,1, 'green', 'green', 0, 150, 300, 150)
arco(ctx,1, 'white', 'green', 150, 150, 80, 1.75,0)
arco(ctx,1, 'white', 'green', 150, 150, 80, 1, 1.25)
arco(ctx,1, 'white', 'green', 150, 150, 60, 1,0)
arco(ctx,1, 'white', 'green', 150, 300, 80, 1, 1.5)
linha(ctx,1, 'red', 'red', 150, 150, 300, 0)
linha(ctx,1, 'blue', 'blue', 0, 0, 150, 150)
arco(ctx,1, 'white', 'green', 150, 300, 60, 1.5,0)
arco(ctx,1, 'aqua', 'green', 150, 300, 40, 1,0)
arco(ctx,1, 'yellow', 'green', 70, 220, 15, 0, 2)
arco(ctx,1, 'yellow', 'green', 220, 220, 15, 0, 2)
arco(ctx,1, 'aqua', 'blue', 150, 115, 15, 0, 2)
texto(ctx,1, 'black', "20px Sans-Serif", "center", "Canvas", 150, 50)

//Segundo Canvas

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

quadrado2(ctx2,1, 'gray', 'gray', 0, 230, 300, 70)
linha2(ctx2,1, '#458efc', '#458efc', 0, 230, 0, 300, 110, 300, 110, 265, 35, 265, 35, 230)
arco2(ctx2,1, '458efc', '458efc', 0, 230, 35, 1,0)
arco2(ctx2,1, '458efc', '458efc', 110, 300, 35, 1,0)
quadrado2(ctx2,1, 'saddlebrown', 'saddlebrown', 36, 195, 15, 35)
arco2(ctx2,1, 'green', 'green', 43.5, 175, 22.5, 0, 2)
quadrado2(1, 'saddlebrown', 'saddlebrown', 110, 150, 80, 80)
linha2(1, '#f5694d', '#f5694d', 110, 150, 190, 150, 150, 110)
quadrado2(1, '#624423', '#624423', 141.25, 190, 17.5, 40)
quadrado2(1, '#47bdfd', '#47bdfd', 119, 168, 20, 20)
quadrado2(1, '#47bdfd', '#47bdfd', 160, 168, 20, 20)
quadrado2(1, 'saddlebrown', 'saddlebrown', 259, 230, 15, 35)
arco2(1, 'green', 'green', 266.5, 212.5, 22.5, 0, 2)
arco2(1, 'yellow', 'yellow', 225, 75, 34, 0, 2)

//linha2(1,'black','black', 0, 150, 300, 150)