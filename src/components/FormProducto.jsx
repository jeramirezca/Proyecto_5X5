import React from 'react';

import { Link } from 'react-router-dom';


function FormProducto (){
    return(

        <div className="content-general margen-out">
            <div className="max-width">
                <h1 className="color-label">Detalle de Producto</h1>        
                <div className="prueba">
                       <form>
                            <div className="mt-20">
                                <label for="codigoproducto" className ="semi-bold label-form color-label">Codigo Producto</label>
                                <input id="codigoproducto" name="codigoproducto" required type="text" placeholder ="CA123" className="form-control"/>
                           </div>
                           <div className="mt-20">
                                <label for="descripcion" className ="semi-bold label-form color-label">Descripción</label>
                                <textarea id="descripcion"name="descripcion"  required cols="30" rows="10" className="form-control"></textarea>                               
                            </div>
                            <div className="mt-20">
                                <label for="valorunit" className ="semi-bold label-form color-label">Valor Unitario</label>
                                <input id="valorunit" type="number"  required name="valor unit" step="any" placeholder ="$" className="form-control"/>                            
                            </div>
                            <div className="mt-20">
                                <label for="estado"className ="semi-bold label-form color-label">Estado</label>
                                <select id="descripcion" required name="estado" id="estado" className="form-control">
                                    <option></option>
                                    <option value="Disponible">Disponible</option>
                                    <option value="No Disponible">No Dispobible</option>
                                </select>                            
                            </div>
                        </form>
                        <div className="separate-button">
                                <Link to="/productos">   
                                    <button className="mr-60 button"> Guardar</button>
                                </Link>
                                <Link to="/productos">
                                    <button className="button"> Cancelar</button>
                                </Link>
                        </div>
                  </div>
            </div>
        </div>
    );
}


export default FormProducto;