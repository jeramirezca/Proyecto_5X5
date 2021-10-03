import React from 'react';

import { Link } from 'react-router-dom';


function FormEdVenta (){
    return(

        <div className="content-general margen-out">
        <div className="max-width">
          <h1 className="color-label">Orden de Venta</h1>        
          <div className="table-top">
                            <div>
                                <label for = "codigo" className ="semi-bold label-form color-label">Codigo</label>
                                <input id ="codigo" type="text" placeholder ="Ingrese el codigo" className="form-control"/>
                           </div>
                           <div className="mt-20 prueba2">
                                <label for="cliente" className ="semi-bold label-form color-label">Nombre del Cliente</label>
                                <input id="cliente" type="text" placeholder ="Ingrese el nombre del cliente" className="form-control"/>
                            </div>
                            <div className="mt-20 prueba2">
                                <label for ="identificacion" className ="semi-bold label-form color-label">Documento de Identificación del Cliente</label>
                                <input id ="identificacion" type="text" placeholder ="Ingrese el documento de identificación del cliente" className="form-control"/>
                            </div>
                            <div className="mt-20 prueba2">
                                <label for="vendedor" className ="semi-bold label-form color-label">Vendedor</label>
                                <select id="vendedor" name="vendedor" className="form-control">
                                    <option></option>
                                    <option value="Vendedor 1">Vendedor 1</option>
                                    <option value="Vendedor 2">Vendedor 2</option>
                                </select>  
                            </div>
                            <div className="mt-20 prueba2">
                                <label for="cdate"className ="semi-bold label-form color-label">Fecha de Venta</label>
                                <input id="cdate" type="date" name="cdate" className="form-control"/>
                            </div>
                            <div className="mt-20 prueba2">
                                <label for="estado"className ="semi-bold label-form color-label">Estado Venta</label>
                                <select id="estado" name="estado"  className="form-control">
                                    <option></option>
                                    <option value="En Proceso">En Proceso</option>
                                    <option value="Cancelada">Cancelada</option>
                                    <option value="Entregada">Entregada</option>
                                </select>
                            </div>
            <div className="table-top">
            <table className="stickytable table">
              <thead>
                <tr>
                  <th className="h-r">No.</th>
                  <th>COD PRODUCTO</th>
                  <th>CANTIDAD</th>
                  <th>PRECIO UNITARIO</th>
                  <th>TOTAL</th>
                  <th>
                    <span>Agregar</span>
                  </th>
                  <th className="h-l">
                    <span>Eliminar</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>cod1</td>
                  <td>1</td>
                  <td>5000</td>
                  <td>5000</td>
                  <td>
                    <a>
                        <svg
                            className ="icon-s" 
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	                        viewBox="0 0 512 512"  xmlSpace="preserve">
                            <g>
                                <g>
                                    <path className="icon-color"d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.853,256-256S397.167,0,256,0z M256,472.341
                                        c-119.275,0-216.341-97.046-216.341-216.341S136.725,39.659,256,39.659S472.341,136.705,472.341,256S375.295,472.341,256,472.341z
                                        "/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path className="icon-color" d="M355.148,234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83,8.884-19.83,19.83v79.318h-79.318
                                        c-10.966,0-19.83,8.884-19.83,19.83s8.864,19.83,19.83,19.83h79.318v79.318c0,10.946,8.864,19.83,19.83,19.83
                                        s19.83-8.884,19.83-19.83v-79.318h79.318c10.966,0,19.83-8.884,19.83-19.83S366.114,234.386,355.148,234.386z"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                  </td>
                  <td>
                    <a>
                        <svg
                            className ="icon-s" 
                            height="427pt" 
                            viewBox="-40 0 427 427.00131" 
                            width="427pt" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path className="icon-color2" d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
                            <path className="icon-color2" d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
                            <path className="icon-color2" d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/>
                            <path className="icon-color2" d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
                        </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            <div className="separate-button">
             <Link to="/ventas">   
            <button className="mr-60 button"> Guardar</button>
            </Link>
            <Link to="/ventas">
            <button className="button">Cancelar</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    );
}


export default FormEdVenta;