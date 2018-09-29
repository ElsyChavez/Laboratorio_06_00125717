function numeroAleatorio(){
    let arrg = [];
    
    for(let i = 0; i < 20; i++){
        arrg.push(Math.floor((Math.random() * 100) + 1));
    }

    let numero_seleccionado = arrg[Math.floor((Math.random() * 19) + 1)];

    while(true){
        let numero = prompt("Adivine el numero que seleccionamos entre 1 y 100");
        if(numero==numero_seleccionado){
            alert("ADIVINASTE! ERA "+numero);
            break;
        }
        if (numero < numero_seleccionado){
            console.log("Muy pequeno.");
        }
        if (numero > numero_seleccionado){
            console.log("Muy grande.");
        }
    }
}