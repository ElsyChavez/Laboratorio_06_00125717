function murcielago(cadena) {
    let arrg = cadena.split("");
    let arrgAux = [];

    for (let x of arrg){
            if(x==0){
                x="m";
                arrgAux.push(x);
            }
            if(x==1){
                x="u";
                arrgAux.push(x);
            }
            if(x==2){
                x="r";
                arrgAux.push(x);
            }
            if(x==3){
                x="c";
                arrgAux.push(x);
            }
            if(x==4){
                x="i";
                arrgAux.push(x);
            }
            if(x==5){
                x="e";
                arrgAux.push(x);
            }
            if(x==6){
                x="l";
                arrgAux.push(x);
            }
            if(x==7){
                x="a";
                arrgAux.push(x);
            }
            if(x==8){
                x="g";
                arrgAux.push(x);
            }
            if(x==9){
                x="o";
                arrgAux.push(x);
            }
        }

        let cifrada = arrgAux.join("");
        console.log("Original: "+ cadena);
        console.log("Actual encriptada: "+cifrada);
    }


