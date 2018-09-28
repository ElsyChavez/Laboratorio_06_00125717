function remove(arreglo, index){
    return arreglo.slice(0,index).concat(arreglo.slice(index+1));
}

function PrimerosUltimos(arrg){
    var longitud = arrg.length;
    var i = 0;

    if(longitud%2==0){
        while(longitud!=0){
            var suma = arrg[i] + arrg[arrg.length-1];//arrg.length-1
            console.log(suma);
            arrg = remove(arrg,i);
            arrg = remove(arrg,(arrg.length-1));
            console.log(arrg);
            longitud = arrg.length;
        }
    }

    else if(longitud%2!=0){
        while(longitud!=1){
            var suma = arrg[i] + arrg[arrg.length-1];//arrg.length-1
            console.log(suma);
            arrg = remove(arrg,i);
            arrg = remove(arrg,(arrg.length-1));
            console.log(arrg);
            longitud = arrg.length;
        }
        var suma_medio= arrg[i]+arrg[i];
        console.log(suma_medio);
    }


}