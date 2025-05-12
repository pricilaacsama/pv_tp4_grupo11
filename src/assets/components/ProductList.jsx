export default function ProductList({ productos }) {
  if (productos.length === 0) {
    return <p>No hay productos agregados todavía.</p>;
  }

  return (
    <div>
      <h2>Listado de productos</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Precio Unitario</th>
            <th>Descuento (%)</th>
            <th>Precio con Descuento</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.descripcion}</td>
              <td>${producto.precioUnitario}</td>
              <td>{producto.descuento}%</td>
              <td>${producto.precioConDescuento.toFixed(2)}</td>
              <td>{producto.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
