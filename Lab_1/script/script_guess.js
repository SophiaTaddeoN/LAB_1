function guess(){
    let x = Math.random() * 100;
    let i = Math.floor(x);
    let resposta = resp;
    console.log(i)

    if (num > i) {
        document.getElementById('resp').innerHTML = "O número é menor do que " + num;
    }
}