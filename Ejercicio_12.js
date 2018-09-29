let arrg_personas = [];

function remove(arreglo, index){
    return arreglo.slice(0,index).concat(arreglo.slice(index+1));
}

function control() {
    let opcion;
    let id_persona, nombre_p, apellido_p, edad_p, sexo_p;
    let buscador;
    let verificador, actualizador, nombre_n, apellido_n, edad_n, sexo_n;
    let eliminador;

    while (opcion != 6) {
        console.log("******Menu******");
        console.log("1. Ingresar una persona.");
        console.log("2. Buscar una persona.");
        console.log("3. Modificar una persona.");
        console.log("4. Eliminar una persona.");
        console.log("5. Mostrar todas las personas.");
        console.log("6. Salir del programa.");
        opcion = prompt("Opcion que desea ejecutar: ");

        if (opcion == 1) {
            id_p = prompt("Ingrese el numero identificador de la persona");
            nombre_p = prompt("Ingrese el nombre de la persona");
            apellido_p = prompt("Ingrese el apellido de la persona");
            edad_p = prompt("Ingrese la edad de la persona");
            sexo_p = prompt("Ingrese el sexo de la persona (Masculino o femenino)");
            var persona = { 
                  id_persona: id_p,
                  nombre: nombre_p,
                  apellido: apellido_p,
                  edad: edad_p,
                  sexo: sexo_p
            };
            arrg_personas.push(persona);
        }
        else if (opcion == 2) {
            buscador = prompt("Ingrese el numero identificador de la persona que busca: ");
            for(let i = 0; i < arrg_personas.length; i++){
                if(arrg_personas[i].id_persona == buscador){
                    console.log("Se ha encontrado. Los datos de esta persona son:\n" + arrg_personas[i] );
                }
                else{
                    console.log("Persona no encontrada.");
                }
            }
        }
        else if (opcion == 3) {
            verificador = prompt("Ingrese el numero identificador de la persona que desea modificar: ");
            for(let i = 0; i < arrg_personas.length; i++){
                if(arrg_personas[i].id_persona == verificador){
                    actualizador= prompt("Propiedad que desea actualizar:(nombre | apellido | edad | sexo)");
                    if(actualizador == "nombre" || actualizador == "Nombre"){
                        nombre_n = prompt("Ingrese el nuevo nombre: ");
                        arrg_personas[i].nombre = nombre_n;
                    }
                    else if(actualizador == "apellido" || actualizador == "Apellido"){
                        apellido_n = prompt("Ingrese el nuevo apellido: ");
                        arrg_personas[i].apellido = apellido_n;
                    }
                    else if(actualizador == "Edad" || actualizador == "edad"){
                        edad_n = prompt("Ingrese la nueva edad: ");
                        arrg_personas[i].edad = edad_n;
                    }
                    else if(actualizador == "nombre" || actualizador == "Nombre"){
                        sexo_n = prompt("Ingrese el nuevo nombre: ");
                        arrg_personas[i].sexo = sexo_n;
                    }
                    else{
                        console.log("No existe esa propiedad en la persona o usted la escribio mal.")
                    }
                }
                else{
                    console.log("Persona no encontrada.");
                }
            }
        }
        else if (opcion == 4) {
            eliminador = prompt("Ingrese el numero identificador de la persona quiere eliminar: ");
            for(let i = 0; i < arrg_personas.length; i++){
                if(arrg_personas[i].id_persona == eliminador){
                    arrg_personas = remove(arrg_personas, i);
                }
                else{
                    console.log("Persona no encontrada.");
                }
            }
            console.log("Eliminando");
        }
        else if (opcion == 5) {
            console.log(arrg_personas);
        }
        else if(typeof opcion != 'number') {
            console.log("Dato no valido.")
        }
    }
}

