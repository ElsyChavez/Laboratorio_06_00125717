function sumaMatrices(matrizA, matrizB) {
    let matrizC = [];

    for (let i = 0; i < matrizA.length; i++) {
        for (let j = 0; j < matrizA[0].length; j++) {
            if ((matrizA.length == matrizB.length) && (matrizA[i].lenght == matrizB[i].lenght)) {
                let suma = matrizA[i][j] + matrizB[i][j];
                matrizC.push(suma);
            }
            else {
                console.log("Matrices no validas.")
            }
        }
    }

    console.log(matrizC);

}