let canva = document.getElementById('canva');
let ctx = canva.getContext('2d');

let capivara = {
    x: 150,
    y: 150,
    width: 120,
    height: 120,
    img: new Image(),
    desenha: function(){
        this.img.src = 'imagens/capivara.com.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,300,300)
    capivara.desenha();
    requestAnimationFrame(animacao)
}

animacao();

document.addEventListener('mousemove', function(evento){
    let rect = canva.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    let nova_x = x_mouse - capivara.width / 2;
    let nova_y = y_mouse - capivara.height / 2;

    nova_x = Math.max(0, Math.min(nova_x, canva.width - capivara.width));
    nova_y = Math.max(0, Math.min(nova_y, canva.height - capivara.height));

    capivara.x = nova_x;
    capivara.y = nova_y;
})

