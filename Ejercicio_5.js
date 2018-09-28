function diversosTipos(arrg, tipoDato){
    aux1 = [];
    aux2 = [];
    aux3 = [];
    aux4 = [];
    for(let x of arrg){
        if(typeof x=='number'){
            aux1.push(x);
        }
        if(typeof x=='boolean'){
            aux2.push(x);
        }
        if(typeof x=='string'){
            aux3.push(x);
        }
        if(typeof x=='object'){
            aux4.push(x);
        }
    }

    if(tipoDato=='number'){
        console.log(aux1);
    }
    if(tipoDato=='boolean'){
        console.log(aux2);
    }
    if(tipoDato=='string'){
        console.log(aux3);
    }
    if(tipoDato=='object'){
        console.log(aux4);
    }
}

