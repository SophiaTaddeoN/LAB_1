let x = Math.random() * 100;
let i = Math.floor(x);
let tentativas = 0;
console.log(i);

function guess(){
    let num = parseInt(document.getElementById('num').value);
    if (num > i) {
        document.getElementById('resp').innerHTML = "O número é menor do que " + num;
        document.getElementById("resp").style.setProperty("background-color", "red");
    }
    else if(num < i) {
        document.getElementById('resp').innerHTML = "O número é maior do que " + num;
        document.getElementById("resp").style.setProperty("background-color", "red");
    }
    tentativas++
    document.getElementById('num_tenta').innerHTML = "" + tentativas;
    if (num == i) {
        document.getElementById('resp').innerHTML = "Parabéns! Você acertou. ";
        document.getElementById("resp").style.setProperty("background-color", "green");
        document.getElementById('num_tenta').innerHTML = "" + tentativas;
    }
}