import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormProducto = () => {

    const formularioProducto = useRef(null);
    const submitFormProducto = async (e) => {

        e.preventDefault();
        const formDataProducto = new FormData(formularioProducto.current);

        const nuevoProducto = {};

        formDataProducto.forEach((value, key) => {
            nuevoProducto[key] = value;
        });

        console.log("datos del form enviados", nuevoProducto);

        /*CONEXION CON BACKEND*/

        const options = {

            method: 'POST',
            url: 'https://limitless-wildwood-65072.herokuapp.com/productos/nuevo', ///aquí va la url del proyecto
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem("token")}` },
            data: { codigoProducto: nuevoProducto.codigoProducto, 
                descripcionProducto: nuevoProducto.descripcionProducto, 
                valorUnitario: nuevoProducto.valorUnitario, 
                estado: nuevoProducto.estado               
             },
        };

        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success('Producto agregado con éxito');
                setTimeout(function () {
                    window.location.href = "/productos";
                }, 1500);
            })
            .catch(function (error) {
                console.error(error);
                toast.error('El código del producto que está intentando ingresar ya se encuentra almacenado, por favor modifiquelo');
            });

        //identificar el caso de exito y mostrar un mensaje de exito

        //identificar el caso de error y mostrar un mensaje de error
        //alert("Producto no creado exitosamente");



    }


    return (
        <div className="content-general margen-out">
            <div className="max-width">
                <h1 className="color-label">Detalle de Producto</h1>
                <div className="prueba">
                    <form
                        ref={formularioProducto}
                        onSubmit={submitFormProducto}
                    >
                        <div className="mt-20">
                            <label htmlFor="codigoproducto" className="fontSize-s semi-bold label-form color-label">Código Producto</label>
                            <input
                                id="codigoproducto"
                                name="codigoProducto"
                                type="text"
                                placeholder="Ingrese código del producto"
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mt-20">
                            <label htmlFor="descripcion" className="fontSize-s semi-bold label-form color-label">Descripción</label>
                            <input
                                id="descripcion"
                                name="descripcionProducto"
                                cols="30"
                                rows="10"
                                className="form-control"
                                required
                            ></input>
                        </div>
                        <div className="mt-20">
                            <label htmlFor="valorunit" className="fontSize-s semi-bold label-form color-label">Valor Unitario</label>
                            <input
                                id="valorunit"
                                type="number"
                                name="valorUnitario"
                                step="any"
                                min={0}
                                placeholder="$"
                                className="form-control"
                                required />
                        </div>
                        <div className="mt-20">
                            <label htmlFor="estado" className="fontSize-s semi-bold label-form color-label">Estado</label>
                            <select
                                id="estado"
                                name="estado"
                                className="form-control"
                                required
                                defaultValue={0}>
                                <option disabled value={0}>Seleccione una opción</option>
                                <option value="Disponible">Disponible</option>
                                <option value="No Disponible">No Dispobible</option>
                            </select>
                        </div>
                        <div className="separate-button">

                            <button
                                type="submit"
                                className="mr-60 button"
                            > Guardar
                            </button>

                            <Link to="/productos">
                                <button type="button" className="button"> Cancelar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer position='bottom-center' autoClose={1500} />
        </div>
    );
}


export default FormProducto;