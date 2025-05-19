

export function buscarPorNombre (productos, nombre) {
    return (nombre !="" ? productos.filter(producto => producto.nombre.includes(nombre)) : [])
}

export function buscarPorId (productos, id) {
    return (id !== "" ? productos.filter(producto => producto.id == id) : []);
};

export function buscarPorMarca (productos, marca) {
    return (marca != "" ? productos.filter(producto => producto.marca.includes(marca)) : [])
}