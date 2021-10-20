import CajaInicio from "components/CajaInicio";
import icon_grafventas from 'media/icons/icon_grafventas.svg';
import icon_pedido from 'media/icons/icon_pedido.svg';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useUser } from 'context/userContext';



const obtenerVentas = async (setVentas, setEjecutarConsulta) => {
  const options = {
    method: 'GET', url: 'http://localhost:5000/ventas/', headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };
  await axios
    .request(options)
    .then(function (response) {
      setVentas(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};





function Inicio() {

  const [ventas, setVentas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  const {userData} = useUser();
  const [ventaTotal, setVentaTotal] = useState(0);
  const [enProceso, setEnProceso] = useState(0);
  const [entregada, setEntregada] = useState(0);
  const [cancelada, setCancelada] = useState(0); 
  const [totales, setTotales] = useState(0);

  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerVentas(setVentas, setEjecutarConsulta);
    }

    let a =  0;
    let b = 0;
    let c = 0;
    let d = 0;
    
    ventas.map((venta) => {      
      
  
      if(userData.email === venta.vendedor.email){
        console.log(venta);
  
        a = a + venta.totalVenta
  
        if(venta.estado === "En proceso"){

          b+=1;

        }else if (venta.estado === "Entregada"){

          c+=1;


        }
        else{

          d+=1;
        }

      }else if(userData.rol == "Administrador"){

        console.log("para probar", venta.totalVenta);

        a = a + venta.totalVenta
  
        if(venta.estado === "En proceso"){

          b+=1;

        }else if (venta.estado === "Entregada"){

          c+=1;


        }
        else{

          d+=1;
        }





      }
    
    })
  
    setVentaTotal(a);
    setEnProceso(b);
    setEntregada(c);
    setCancelada(d);
    setTotales(b+c+d);


    
  }, [ejecutarConsulta]);

  console.log(ventaTotal);
  console.log(enProceso);
  console.log(entregada);




  return (
    <div className="inicio" >
      <h1 className="tituloInicio">Dashboard</h1>
      <div className="cuadro">
      <div className="inicio">
        <CajaInicio nombre="Ventas totales" icono={icon_grafventas} dato={`$ ${ventaTotal}`} />
        <CajaInicio nombre="Órdenes de Venta Totales" icono={icon_pedido} dato={`${totales}`}  />        
      </div>
      <div className="inicio">    
        <CajaInicio nombre="Órdenes de Venta en Proceso" icono={icon_pedido} dato={`${enProceso}`} />    
        <CajaInicio nombre="Órdenes de Venta Entregadas" icono={icon_pedido} dato={`${entregada}`} />
        <CajaInicio nombre="Órdenes de Venta Canceladas" icono={icon_pedido} dato={`${cancelada}`} />
      </div>
      </div>
    </div>
  );
}

export default Inicio;