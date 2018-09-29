function fisica(arrg){
    let suma = 0;

    for(let i = 0; i < arrg.length; i++){
        if(typeof arrg[i]=='number')
        suma = suma + arrg[i];
    }

    let promedio = (1/arrg.length)*(suma);
    console.log("El promedio de las mediciones es: "+promedio.toFixed(1));
    
    let restaCuadrada = 0;

    for(let i = 0; i < arrg.length; i++){
        if(typeof arrg[i]=='number')
        restaCuadrada += Math.pow((arrg[i]-promedio), 2);
    }

    let incerteza = Math.sqrt((1/(arrg.length-1))*restaCuadrada);
    console.log("La incerteza es: "+incerteza.toFixed(1))

}