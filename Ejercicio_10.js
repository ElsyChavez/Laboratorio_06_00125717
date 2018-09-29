function crearObjeto(nombre_us, apellido_us, fecha_nac, tel, email){
    var usuario = { 
          nombre: nombre_us,
          apellido: apellido_us,
          fecha: fecha_nac,
          telefono: tel,
          correo: email 
        };

    console.log("Nombre: "+usuario.nombre);
    console.log("Apellido: "+usuario.apellido);
    console.log("Fecha de nacimiento: "+usuario.fecha);
    console.log("Numero de telefono: "+usuario.telefono);
    console.log("Correo electronico: "+usuario.correo);
}