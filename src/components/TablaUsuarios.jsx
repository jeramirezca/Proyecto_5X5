import OpcionesTablas from "./OpcionesTablas";
import icon_buscar from "media/icons/icon_buscar.svg"
import icon_agregarUsuario from "media/icons/icon_agregarUsuario.svg"
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const usuariosBackend = [
    {
        numero: '1',
        nombre: 'Antonio Camargo',
        rol: "Administrador",
        permisos: "Todos",
        estado: "Activo",
    },
    {
        numero: '2',
        nombre: 'Juana Castaño',
        rol: "Supervisor",
        permisos: "Visualización",
        estado: "Activo",
    },
    {
        numero: '3',
        nombre: 'Catalina Atlas',
        rol: "Administrador",
        permisos: "Todos",
        estado: "Inactivo",
    },
    {
        numero: '1',
        nombre: 'Antonio Camargo',
        rol: "Administrador",
        permisos: "Todos",
        estado: "Activo",
    },
    {
        numero: '2',
        nombre: 'Juana Castaño',
        rol: "Supervisor",
        permisos: "Visualización",
        estado: "Activo",
    },
    {
        numero: '3',
        nombre: 'Catalina Atlas',
        rol: "Administrador",
        permisos: "Todos",
        estado: "Inactivo",
    },
    {
        numero: '1',
        nombre: 'Antonio Camargo',
        rol: "Administrador",
        permisos: "Todos",
        estado: "Activo",
    },
    {
        numero: '2',
        nombre: 'Juana Castaño',
        rol: "Supervisor",
        permisos: "Visualización",
        estado: "Activo",
    },
    {
        numero: '3',
        nombre: 'Catalina Atlas',
        rol: "Administrador",
        permisos: "Todos",
        estado: "Inactivo",
    },
    {
        numero: '1',
        nombre: 'Antonio Camargo',
        rol: "Administrador",
        permisos: "Todos",
        estado: "Activo",
    },
    {
        numero: '2',
        nombre: 'Juana Castaño',
        rol: "Supervisor",
        permisos: "Visualización",
        estado: "Activo",
    },
    {
        numero: '3',
        nombre: 'Catalina Atlas',
        rol: "Administrador",
        permisos: "Todos",
        estado: "Inactivo",
    },

];

const TablaUsuarios = () => {
    return (
        <>
            <div className="superior_tabla">
                <h1 className="tituloTabla">Listado de usuarios</h1>
                <div>
                    <img className="icono_buscar" src={icon_buscar} alt="Buscar" />
                    <Link to="/agregarUsuario">
                        <img className="icono_agregar" src={icon_agregarUsuario} alt="Agregar Usuario" />
                    </Link>
                </div>
            </div>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>NOMBRE</th>
                        <th>ROL</th>
                        <th>PERMISOS</th>
                        <th>ESTADO</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {usuariosBackend.map((usuario) => {
                        return (
                            <tr>
                                <td data-label="NÚMERO:">{usuario.numero}</td>
                                <td data-label="NOMBRE:">{usuario.nombre}</td>
                                <td data-label="ROL:">{usuario.rol}</td>
                                <td data-label="PERMISOS:">{usuario.permisos}</td>
                                <td data-label="ESTADO:">{usuario.estado}</td>
                                <td><OpcionesTablas /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default TablaUsuarios;