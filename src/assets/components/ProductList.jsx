export default function ProductList({ productos }) {
  if (productos.length === 0) {
    return <p>No hay productos agregados todavía.</p>;
  }

  return (
    <div>
      <h2>Listado de productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <strong>ID:</strong> {producto.id} {' '}
            <strong>Descripción:</strong> {producto.descripcion} {' '}
            <strong>Precio:</strong> ${producto.precioUnitario} {' '}
            <strong>Descuento:</strong> {producto.descuento}% {' '}
            <strong>Precio con Descuento:</strong> ${producto.precioConDescuento.toFixed(2)} {' '}
            <strong>Stock:</strong> {producto.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}
