import OpcionesTablas from "./OpcionesTablas";
import icon_buscar from "media/icons/icon_buscar.svg"
import icon_agregarVenta from "media/icons/icon_agregarVenta.svg"
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const ventasBackend = [
    {
      numero: '1',
      codigo: '1001',
      cliente: "Alberto Lopez",
      valor: "$50.000",
      fechaVenta: "25/06/2021",
      vendedor: "Pablo Casas",
      estado: "Entregado",
    },
    {
        numero: '2',
        codigo: '1002',
        cliente: "Alberto Lopez",
        valor: "$10.000",
        fechaVenta: "27/06/2021",
        vendedor: "Ana Herrera",
        estado: "Entregado",
      },
      {
        numero: '3',
        codigo: '1003',
        cliente: "Clara Garcia",
        valor: "$100.000",
        fechaVenta: "29/06/2021",
        vendedor: "Pablo Casas",
        estado: "Entregado",
      },
      {
        numero: '4',
        codigo: '1004',
        cliente: "Alberto Lopez",
        valor: "$70.000",
        fechaVenta: "11/07/2021",
        vendedor: "Ana Herrera",
        estado: "En proceso",
      },
      {
        numero: '4',
        codigo: '1004',
        cliente: "Alberto Lopez",
        valor: "$70.000",
        fechaVenta: "11/07/2021",
        vendedor: "Ana Herrera",
        estado: "En proceso",
      },
      {
        numero: '4',
        codigo: '1004',
        cliente: "Alberto Lopez",
        valor: "$70.000",
        fechaVenta: "11/07/2021",
        vendedor: "Ana Herrera",
        estado: "En proceso",
      },
      {
        numero: '4',
        codigo: '1004',
        cliente: "Alberto Lopez",
        valor: "$70.000",
        fechaVenta: "11/07/2021",
        vendedor: "Ana Herrera",
        estado: "En proceso",
      },
      {
        numero: '4',
        codigo: '1004',
        cliente: "Alberto Lopez",
        valor: "$70.000",
        fechaVenta: "11/07/2021",
        vendedor: "Ana Herrera",
        estado: "En proceso",
      },
      {
        numero: '4',
        codigo: '1004',
        cliente: "Alberto Lopez",
        valor: "$70.000",
        fechaVenta: "11/07/2021",
        vendedor: "Ana Herrera",
        estado: "En proceso",
      },
      {
        numero: '4',
        codigo: '1004',
        cliente: "Alberto Lopez",
        valor: "$70.000",
        fechaVenta: "11/07/2021",
        vendedor: "Ana Herrera",
        estado: "En proceso",
      },
      {
        numero: '4',
        codigo: '1004',
        cliente: "Alberto Lopez",
        valor: "$70.000",
        fechaVenta: "11/07/2021",
        vendedor: "Ana Herrera",
        estado: "En proceso",
      },
      {
        numero: '4',
        codigo: '1004',
        cliente: "Alberto Lopez",
        valor: "$70.000",
        fechaVenta: "11/07/2021",
        vendedor: "Ana Herrera",
        estado: "En proceso",
      },
];

const TablaVentas = () => {
    return (
        <>
            <div className="superior_tabla">
                <h1 className="tituloTabla">Listado de ventas</h1>
                <div>
                    <img className="icono_buscar" src={icon_buscar} alt="Buscar" />
                    <Link to="/agregarVenta">
                        <img className="icono_agregar" src={icon_agregarVenta} alt="Agregar venta" />
                    </Link>
                </div>
            </div>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>COD VENTA</th>
                        <th>CLIENTE</th>
                        <th>VALOR</th>
                        <th>FECHA VENTA</th>
                        <th>VENDEDOR</th>
                        <th>ESTADO</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ventasBackend.map((venta) => {
                        return(
                            <tr>
                                <td data-label="NÚMERO:">{venta.numero}</td>
                                <td data-label="COD VENTA:">{venta.codigo}</td>
                                <td data-label="CLIENTE:">{venta.cliente}</td>
                                <td data-label="VALOR:">{venta.valor}</td>
                                <td data-label="FECHA VENTA:">{venta.fechaVenta}</td>
                                <td data-label="VENDEDOR:">{venta.vendedor}</td>
                                <td data-label="ESTADO">{venta.estado}</td>
                                <td><OpcionesTablas /></td>
                            </tr>
                        );     
                    })}
                </tbody>
            </table>
        </>
    );
};

export default TablaVentas;