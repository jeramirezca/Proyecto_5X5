import CajaInicio from "components/CajaInicio";
import icon_grafventas from 'media/icons/icon_grafventas.svg';
import icon_pedido from 'media/icons/icon_pedido.svg';

function Inicio() {
  return (
    <div className="inicio" >
      <h1 className="tituloInicio">Dashboard</h1>
      <div className="cuadro">
      <div class="inicio">
        <CajaInicio nombre="Ventas totales" icono={icon_grafventas} dato="$ XXX" />
        <CajaInicio nombre="Órdenes de Venta Creadas" icono={icon_pedido} dato="XXX" />
        <CajaInicio nombre="Órdenes de Venta en Proceso" icono={icon_pedido} dato="XXX" />
      </div>
      <div class="inicio">
        <CajaInicio nombre="Órdenes de Venta Totales" icono={icon_pedido} dato="XXX" />
        <CajaInicio nombre="Órdenes de Venta Entregadas" icono={icon_pedido} dato="XXX" />
        <CajaInicio nombre="Órdenes de Venta Canceladas" icono={icon_pedido} dato="XXX" />
      </div>
      </div>
    </div>
  );
}

export default Inicio;