import CajaInicio from "components/CajaInicio";
import icon_grafventas from 'media/icons/icon_grafventas.svg';
import icon_pedido from 'media/icons/icon_pedido.svg';

function Inicio() {
  return (
      <div class="inicio">
        <CajaInicio nombre="Ventas totales" icono={icon_grafventas} dato="XXX"/>
        <CajaInicio nombre="Ordenes totales" icono={icon_pedido} dato="XXX"/>
        <CajaInicio nombre="Ordenes creadas" icono={icon_pedido} dato="XXX"/>
        <CajaInicio nombre="Ordenes embaladas" icono={icon_pedido} dato="XXX"/>
        <CajaInicio nombre="Ordenes embaladas" icono={icon_pedido} dato="XXX"/>
        <CajaInicio nombre="Ordenes despachadas" icono={icon_pedido} dato="XXX"/>
        <CajaInicio nombre="Ordenes en ubicación" icono={icon_pedido} dato="XXX"/>
        <CajaInicio nombre="Ordenes en recepción" icono={icon_pedido} dato="XXX"/>
      </div>
  );
}

export default Inicio;