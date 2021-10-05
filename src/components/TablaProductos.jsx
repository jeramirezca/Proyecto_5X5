import OpcionesTablas from "./OpcionesTablas";
import icon_buscar from "media/icons/icon_buscar.svg"
import icon_agregarProducto from "media/icons/icon_agregarProducto.svg"
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const productosBackend = [
    {
        numero: '1',
        codigo: '1001',
        descripcion: "Camisa hombre",
        valor: "$50.000",
        estado: "Entregado",
    },
    {
        numero: '2',
        codigo: '1002',
        descripcion: "Camisa mujer",
        valor: "$60.000",
        estado: "En proceso",
    },
    {
        numero: '1',
        codigo: '1001',
        descripcion: "Camisa hombre",
        valor: "$50.000",
        estado: "Entregado",
    },
    {
        numero: '2',
        codigo: '1002',
        descripcion: "Camisa mujer",
        valor: "$60.000",
        estado: "En proceso",
    },
    {
        numero: '1',
        codigo: '1001',
        descripcion: "Camisa hombre",
        valor: "$50.000",
        estado: "Entregado",
    },
    {
        numero: '2',
        codigo: '1002',
        descripcion: "Camisa mujer",
        valor: "$60.000",
        estado: "En proceso",
    },
    {
        numero: '1',
        codigo: '1001',
        descripcion: "Camisa hombre",
        valor: "$50.000",
        estado: "Entregado",
    },
    {
        numero: '2',
        codigo: '1002',
        descripcion: "Camisa mujer",
        valor: "$60.000",
        estado: "En proceso",
    },
];

const TablaProductos = () => {
    return (
        <>
            <div className="superior_tabla">
                <h1 className="tituloTabla">Listado de productos</h1>
                <div>
                    <img className="icono_buscar" src={icon_buscar} alt="Buscar" />
                    <Link to="/agregarProducto">
                        <img className="icono_agregar" src={icon_agregarProducto} alt="Agregar Producto" />
                    </Link>
                </div>
            </div>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>COD PRODUCTO</th>
                        <th>DESCRIPCIÓN</th>
                        <th>VALOR UNITARIO</th>
                        <th>ESTADO</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productosBackend.map((producto) => {
                        return (
                            <tr>
                                <td data-label="NÚMERO:">{producto.numero}</td>
                                <td data-label="COD PRODUCTO:">{producto.codigo}</td>
                                <td data-label="DESCRIPCIÓN:">{producto.descripcion}</td>
                                <td data-label="VALOR UNITARIO:">{producto.valor}</td>
                                <td data-label="ESTADO">{producto.estado}</td>
                                <td><OpcionesTablas /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default TablaProductos;