function ocurrencias(numero, arrg){
    var cont = 0;
    for(let i = 0; i < arrg.length; i++){
        if (arrg[i]==numero){
            cont++;
        }
    }
    console.log("El numero "+numero+" esta "+cont+" veces en el arreglo.");
}