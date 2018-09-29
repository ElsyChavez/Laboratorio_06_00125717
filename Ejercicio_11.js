let arrg_usuarios = [];

function guardarDatos(nombre_us, apellido_us, fecha_nac, tel, email) {
    var usuario = {
        nombre: nombre_us,
        apellido: apellido_us,
        fecha: fecha_nac,
        telefono: tel,
        correo: email
    };

    arrg_usuarios.push(usuario);
    //solo para porbar si funciona T-T
    console.log(arrg_usuarios);
}