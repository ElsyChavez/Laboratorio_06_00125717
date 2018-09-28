function sumarPromedioArrg(arrg) {
    var suma = 0;

    for(let i = 0; i < arrg.length; i++){
        if(typeof arrg[i]=='number')
        suma = suma + arrg[i];
    }

    var promedio = (suma/arrg.length);

    console.log("La suma es: "+suma);
    console.log("El promedio es: "+promedio);
}