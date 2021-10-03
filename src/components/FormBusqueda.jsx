import React from 'react';

import { Link } from 'react-router-dom';


function FormBusqueda (){
    return(

        <div className="content-general margen-out">
            <div className="max-width">
                <h1 className="color-label">Detalle de Busqueda</h1>        
                <div className="prueba">
                    <form>
                           <div className="mt-20">
                                <label for="tipoBusqueda"className ="semi-bold label-form color-label">Seleccione el tipo de búsqueda</label>
                                <select id="tipoBusqueda" name="tipoBusqueda"  className="form-control">
                                    <option></option>
                                    <option value="Campo1">Campo1</option>
                                    <option value="Campo2">Campo2</option>
                                </select>                                
                            </div>
                            <div className="mt-20">
                                <label for="campo"className ="semi-bold label-form color-label">Campo a buscar</label>
                                <input id="campo" type="text" placeholder ="Digite campo a buscar" className="form-control"/>
                           </div>
                        </form>
                        <div className="separate-button">
                            <Link to="/inicio"> 
                                <button className="mr-60 button"> Buscar</button>
                            </Link>
                            <Link to="/inicio">
                                <button className="button">Cancelar</button>
                            </Link>
                        </div>
                  </div>
            </div>
        </div>
    );
}


export default FormBusqueda;