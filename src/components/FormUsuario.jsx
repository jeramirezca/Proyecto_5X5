import React,{useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormUsuario = () =>{

    const formularioUsuario = useRef(null);

    const submitFormUsuario = async (e) =>{
        
        e.preventDefault();
        const formDataUsuario = new FormData(formularioUsuario.current);
        
        const nuevoUsuario ={};

        formDataUsuario.forEach((value, key) => {
            nuevoUsuario[key] = value;
        });

        console.log("datos del form enviados", nuevoUsuario);

        /*CONEXION CON BACKEND*/
        
        const options ={

            method:'POST',
            url:'http://localhost:5000/usuarios/nuevo', ///aquí va la url del proyecto
            headers:{'Content-Type':'application/json', Authorization: `Bearer ${localStorage.getItem("token")}`},
            data:{usuario:nuevoUsuario.usuario, rol:nuevoUsuario.rol, estado:nuevoUsuario.estado},
        };



        await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          toast.success('Usuario agregado con éxito');
          setTimeout(function(){
            window.location.href ="/usuarios";
        },1500);
        })
        .catch(function (error) {
          console.error(error);
          toast.error('El código del usuario que está intentando ingresar ya se encuentra almacenado, por favor modifiquelo');
        });

        
        //identificar el caso de exito y mostrar un mensaje de exito
        
        //identificar el caso de error y mostrar un mensaje de error
        //alert("Producto no creado exitosamente");


    }


    return(

        <div className="content-general margen-out">
            <div className="max-width">
                <h1 className="color-label">Detalle de Usuario</h1>        
                <div className="prueba">
                       <form 
                        ref={formularioUsuario}
                        onSubmit={submitFormUsuario}
                        >
                            <div className="mt-20">
                                <label htmlFor="usuario" className ="fontSize-s semi-bold label-form color-label">Usuario</label>
                                <input   
                                id="usuario" 
                                name="usuario" 
                                type="text" 
                                placeholder ="Ingrese nombre de usuario" 
                                className="form-control"
                              //  value={codProducto}
                              //  onChange= {cambioCodProducto}
                                required
                                />
                           </div>
                           <div className="mt-20">
                                <label htmlFor="rol" className ="fontSize-s semi-bold label-form color-label">Rol</label>
                                <input  
                                id="rol"
                                name="rol"
                                className="form-control"
                                placeholder ="Ingrese el rol asignado" 
                                required
                                ></input>                               
                            </div>
                            <div className="mt-20">
                                <label htmlFor="estado" className ="fontSize-s semi-bold label-form color-label">Estado</label>
                                <select  
                                id="estado" 
                                name="estado" 
                                className="form-control"
    
                                required
                                defaultValue = {0}>
                                    <option disabled value={0}>Seleccione una opción</option>
                                    <option value="Activo">Activo</option>
                                    <option value="Inactivo">Inactivo</option>
                                </select>                            
                            </div>
                            <div className="separate-button">
                                    
                                        <button  
                                        type="submit"
                                        className="mr-60 button"
                                        > Guardar</button>
                                
                                    <Link to="/usuarios">
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


export default FormUsuario;