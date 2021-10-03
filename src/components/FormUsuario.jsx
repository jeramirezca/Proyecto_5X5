import React from 'react';

import { Link } from 'react-router-dom';


function FormUsuario (){
    return(

        <div className="content-general margen-out">
            <div className="max-width">
                <h1>Detalle de Usuario</h1>        
                <div className="prueba">
                       <form>
                            <div className="mt-20">
                                <label for ="usuario" className ="semi-bold label-form color-label">Usuario</label>
                                <input id="usuario" type="text" placeholder ="Usuario" className="form-control"/>
                           </div>
                           <div className="mt-20">
                                <label for ="rol" className ="semi-bold label-form">Rol</label>
                                <select id="rol" name="rol"  className="form-control">
                                    <option></option>
                                    <option value="Vendedor">Vendedor</option>
                                    <option value="Administrador">Administrador</option>
                                </select>                                
                            </div>
                            <div className="mt-20">
                                <label for ="estado" className ="semi-bold label-form">Estado</label>
                                <select id="estado" name="estado"  className="form-control">
                                    <option></option>
                                    <option value="Pendiente">Pendiente</option>
                                    <option value="No Autorizado">No Autorizado</option>
                                    <option value="Autorizado">Autorizado</option>
                                </select>                                
                            </div>
                        </form>
                        <div className="separate-button">
                            <Link to="/usuarios"> 
                                <button className="mr-60 button"> Guardar</button>
                            </Link>
                            <Link to="/usuarios">
                                <button className="button">Cancelar</button>
                            </Link>
                        </div>
                  </div>
            </div>
        </div>
    );
}


export default FormUsuario;