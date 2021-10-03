import CajaInicio from "components/CajaInicio";
import icon_grafventas from 'media/icons/icon_grafventas.svg';
import icon_pedido from 'media/icons/icon_pedido.svg';

function Inicio() {
  return (

    
      <div className="cuadro" >
        <div class="inicio">
        <div className="ml-40">  
        <CajaInicio nombre="Ventas totales" icono={icon_grafventas} dato="$ XXX"/>        
        <CajaInicio nombre="Ordenes de Venta Creadas" icono={icon_pedido} dato="XXX"/>
        <CajaInicio nombre="Ordenes de Venta en Proceso" icono={icon_pedido} dato="XXX"/>
        </div>
        <div className="ml-40">
        <CajaInicio nombre="Ordenes de Venta Totales" icono={icon_pedido} dato="XXX"/>
        
        <CajaInicio nombre="Ordenes de Venta Entregadas" icono={icon_pedido} dato="XXX"/>
        <CajaInicio nombre="Ordenes de Venta Canceladas" icono={icon_pedido} dato="XXX"/>
        </div>
        </div>

    </div>  
  );
}

export default Inicio;