import "styles/estiloTable.css";
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const obtenerVentas = async (setVentas, setEjecutarConsulta) => {
  const options = { method: 'GET', url: 'http://localhost:5000/ventas/', headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`}};
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

const Ventas = () => {

  const [ventas, setVentas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerVentas(setVentas, setEjecutarConsulta);
    }
  }, [ejecutarConsulta]);

  return (
    <div className='content-general  margen-out'>
      <div className='max-width'>
        <h2 className='color-label margen-abajo'>
          Información de la venta:
        </h2>
      </div>
      <TablaVentas listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta} />
    </div>
  );
};

const TablaVentas = ({ listaVentas, setEjecutarConsulta }) => {
  
  const idVenta = window.id;

  const [ventasFiltrados, setVentasFiltrados] = useState(listaVentas);
  useEffect(() => {
    setVentasFiltrados(
      listaVentas.filter((elemento) => {
        return JSON.stringify(elemento).includes(idVenta);
      })
    );
  }, [listaVentas]);

  return (
    <div>
      <div >
        <div>
          {ventasFiltrados.map((venta) => {
            return (
              <FilaVenta
                key={nanoid()}
                venta={venta}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const FilaVenta = ({ venta }) => {
  const [productosTabla, setProductosTabla] = useState([]);

  return (
    <form>
      <div>
        <label htmlFor="codigoVenta" className="semi-bold label-form color-label">Codigo</label>
        <input name="codigoVenta" type="text" placeholder={venta.codigoVenta} disabled className="form-control verVenta" />
      </div>
      <div className="mt-20 prueba2">
        <label htmlFor="cliente" className="semi-bold label-form color-label">Nombre del Cliente</label>
        <input name="cliente" type="text" placeholder={venta.cliente} disabled className="form-control" />
      </div>
      <div className="mt-20 prueba2">
        <label htmlFor="idCliente" className="semi-bold label-form color-label">Documento de Identificación del Cliente</label>
        <input name="idCliente" type="text" placeholder={venta.idCliente} disabled className="form-control" />
      </div>
      <div className="mt-20 prueba2">
        <label htmlFor="vendedor" className="semi-bold label-form color-label">Vendedor</label>
        <input name="vendedor" type="text" placeholder={venta.vendedor.usuario} disabled className="form-control" />
      </div>
      <div className="mt-20 prueba2">
        <label htmlFor="fechaVenta" className="table-top semi-bold label-form color-label">Fecha de Venta</label>
        <input name="fechaVenta" placeholder={venta.fechaVenta} disabled name="fechaVenta" className="form-control" />
      </div>
      <div className="mt-20 prueba2">
        <label htmlFor="estado" className="table-top semi-bold label-form color-label">Estado</label>
        <input name="estado" placeholder={venta.estado} disabled name="estado" className="form-control" />
      </div>

      <TablaProductos
                key={nanoid()}
                productos={venta.productos}
              />

      <div className="boton-side totalVenta">
        <label className="semi-bold label-form color-label"> Valor total de la venta:</label>
        <input className="form-control width-m" type="text" placeholder= {"$ " + venta.totalVenta} disabled />
      </div>

      <div className="separate-button">

        <Link to="/ventas">
          <button className="button">Regresar</button>
        </Link>
      </div>
    </form>
  );
};

const TablaProductos = ({ productos }) => {

  const [filasTabla, setFilasTabla] = useState([]);


  return (

    <>
      <div className="table-top">
        <table className="stickytable table">
          <thead>
            <tr>
              <th className="h-r">COD PRODUCTO</th>
              <th>DESCRIPCIÓN</th>
              <th>CANTIDAD</th>
              <th>PRECIO UNITARIO</th>
              <th className="h-l">TOTAL</th>
            </tr>
          </thead>
          <tbody>

            {productos.map((fila, index) => {

              return (

                <tr >
                  <td>{fila.codigoProducto}</td>
                  <td>{fila.descripcionProducto}</td>
                  <td>{fila.cantidad}</td>
                  <td>{"$" +fila.valorUnitario}</td>
                  <td>{"$" +fila.totalProducto}</td>
                  <input hidden defaultValue={fila._id} name={`producto_${index}`} />
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Ventas;