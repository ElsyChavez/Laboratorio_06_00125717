function tipoDato(arrg){
    var contNumber = 0;
    var contBoolean = 0;
    var contString = 0;
    var contObject = 0;
    for(let x of arrg){
        if(typeof x=='number'){
            console.log(x+" es de tipo number");
            contNumber++;
        }
        if(typeof x=='boolean'){
            console.log(x+" es de tipo boolean");
            contBoolean++;
        }
        if(typeof x=='string'){
            console.log(x+" es de tipo string");
            contString++;
        }
        if(typeof x=='symbol'){
            console.log(x+" es de tipo symbol");
            contSymbol++;
        }
        if(typeof x=='object'){
            console.log(x+" es de tipo object");
            contObject++;
        }
    }

    console.log("De cada tipo de dato hay: ");
    console.log("Number: "+contNumber);
    console.log("Boolean: "+contBoolean);
    console.log("String: "+contString);
    console.log("Object: "+contObject);
}

