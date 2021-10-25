import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { obtenerVendedores } from 'util/api';
import { obtenerProductos } from 'util/api';
import axios from 'axios';
import { crearVenta } from 'util/api';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateComponent from "./PrivateComponent";
import { useUser } from 'context/userContext';


function FormVenta() {

  const form = useRef(null);
  const {userData} = useUser();
  const [vendedores, setVendedores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosTabla, setProductosTabla] = useState([]);
  const [estado, setEstado] = useState();
  const [granTotal, setGranTotal] = useState(0);

  useEffect(() => {
    
    const fetchVendedores = async () => {
      await obtenerVendedores(
        (response) => {
          setVendedores(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    const fetchProductos = async () => {
      await obtenerProductos(
        (response) => {
          setProductos(response.data);
        },
        (error) => {
          console.error(error);
        }
      );

    };
    fetchProductos();
    fetchVendedores();

  
  }, []);

  const submitFormulario = async (e) => {
    
    e.preventDefault();
    const formularioVenta = new FormData(form.current);

    

    const formularioData = {};

    formularioVenta.forEach((value, key) => {

      console.log("Value, key", value, key);
      formularioData[key] = value;

    });

    console.log("Este es el vendedor del formulario", formularioData.vendedor);
    console.log('form data', formularioData);

    // Lista los productos de la orden

    const listaProductos = Object.keys(formularioData).map((k) => {

      if (k.includes('producto')) {
        return productosTabla.filter((v) => v._id === formularioData[k])[0];
      }
      return null;

    }).filter((v) => v);

    //console.log("el valor de la venta, es", formularioData.vendedor.value);


        
    if(userData.rol==="Vendedor"){
      setEstado(userData);
    }else{
      setEstado(vendedores.filter((v) => v._id === formularioData.vendedor)[0]);
    }
    //OBJETO QUE VA A LA BASE DE DATOS

console.log("el valor de la venta, es", estado);

    const datosVenta = {
      codigoVenta: formularioData.codigoVenta,
      cliente: formularioData.cliente,
      idCliente: formularioData.idCliente,
      totalVenta: granTotal,
      fechaVenta: formularioData.fechaVenta,
      vendedor: estado,
      estado: formularioData.estado,
      productos: listaProductos
    }
    
    console.log("Esta es la informacion a ingresar", datosVenta);


    await crearVenta(datosVenta,
      (response)=>{
        console.log(response.data);
        toast.success('Venta agregada con éxito');
        setTimeout(function () {
          window.location.href = "/ventas";
        }, 1500);
      },
      (error)=>{
        console.error(error);
        toast.error('El código de la venta que está intentando ingresar ya se encuentra almacenado, por favor modifiquelo');
      }        
      );

  };


  return (    

    <div className="content-general margen-out">
      <div className="max-width">
        <h1 className="color-label">Orden de Venta</h1>
        <form ref={form} onSubmit={submitFormulario} className="table-top">
          <div>
            <label htmlFor="codigoVenta" className="semi-bold label-form color-label">Código</label>
            <input name="codigoVenta" type="text" placeholder="Ingrese el código" className="form-control" required/>
          </div>
          <div className="mt-20 prueba2">
            <label htmlFor="cliente" className="semi-bold label-form color-label">Nombre del Cliente</label>
            <input name="cliente" type="text" placeholder="Ingrese el nombre del cliente" className="form-control" required/>
          </div>
          <div className="mt-20 prueba2">
            <label htmlFor="idCliente" className="semi-bold label-form color-label">Documento de Identificación del Cliente</label>
            <input name="idCliente" type="text" placeholder="Ingrese el documento de identificación del cliente" className="form-control" required/>
          </div>
          <PrivateComponent roleList ={"Administrador"}>
          <div className="mt-20 prueba2">
            <label htmlFor="vendedor" className="semi-bold label-form color-label">Vendedor
            <select name="vendedor" className="form-control" defaultValue='' >
              <option disabled value=''>Seleccione una opción</option>

              {vendedores.map((vend) => {                                                
                return <option key={vend._id} value={vend._id}> {`${vend.name}`}</option>;
              })}

            </select>
            </label>
          </div>
          </PrivateComponent>
          <div className="mt-20 prueba2">
            <label htmlFor="fechaVenta" className="table-top semi-bold label-form color-label">Fecha de Venta</label>
            <input required name="fechaVenta" type="date" className="form-control" />
          </div>

          <div className="mt-20">
            <label htmlFor="estado" className="table-top semi-bold label-form color-label">Estado</label>
            <select
              id="estado"
              name="estado"
              className="form-control"
              required
              defaultValue={0}>
              <option disabled value={0}>Seleccione una opción</option>
              <option value="En proceso">En proceso</option>
              <option value="Cancelada">Cancelada</option>
              <option value="Entregada">Entregada</option>
            </select>
          </div>

          <TablaProductos productos={productos} setProductos={setProductos} setProductosTabla={setProductosTabla} setGranTotal = {setGranTotal} granTotal={granTotal}/>

          <div className="boton-side totalVenta">
            <label htmlFor="totalVenta" className="semi-bold label-form color-label"> TOTAL VENTA:</label>
            <input disabled name="totalVenta" className="form-control width-m" value={granTotal} type="number" />
          </div>

          <div className="separate-button">
            <button
              type="submit"
              className="mr-60 button">
              Guardar
            </button>
            <Link to="/ventas">
              <button className="button">Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer position='bottom-center' autoClose={1500} />
    </div>
  );
}

const TablaProductos = ({ productos, setProductos, setProductosTabla, setGranTotal, granTotal }) => {

  const [productoAAgregar, setProductoAAgregar] = useState({});
  const [filasTabla, setFilasTabla] = useState([]);
  //const [agregarActivo, setAgregarActivo] = useState('hidden');
  
/*
  useEffect(() => {

    console.log(productoAAgregar)

  }, [productoAAgregar]);

  useEffect(() => {

    console.log(productoAAgregar)
    console.log(productos);

  }, [productoAAgregar]);*/

  useEffect(() => {

    console.log('FilasTabla', filasTabla);
    setProductosTabla(filasTabla);

  }, [filasTabla, setProductosTabla]);


  const agregarNuevoProducto = () => {

    setFilasTabla([...filasTabla, productoAAgregar]);
    setProductos(productos.filter((prod) => prod._id !== productoAAgregar._id));
    setProductoAAgregar({});
    //setAgregarActivo('hidden');
  };

  const eliminarProducto = (productoAEliminar) => {
    
    
    console.log(productoAEliminar);

    let b = 0;
    console.log("Variable Gran Total", granTotal);
    b = granTotal;

    console.log("variable b", b);
    setFilasTabla(filasTabla.filter((prod) => prod._id !== productoAEliminar._id));
    

    filasTabla.map((elimino) => {
      
      if(elimino._id == productoAEliminar._id){

      console.log("esto es lo que tendria que restar", productoAEliminar.total); 
      b = b - productoAEliminar.total
      console.log("Valor que queda despues eliminar", b);
    }
    
    })

    setGranTotal(b);
    productoAEliminar.cantidad=null;
    productoAEliminar.total= 0;
    setProductos([...productos, productoAEliminar]);
    
    

  };


  
  
  const modificarProducto = (producto, cantidad) => {

    let a = 0;

    console.log("aqui imprime producto", producto);
    console.log("aqui imprime cantidad", cantidad);
    console.log("aqui Filastabla", filasTabla);

    setFilasTabla(
      filasTabla.map((filtabla) => {

        console.log("fulasTabla id ", filtabla._id);
        console.log("producto id", producto._id);

        if (filtabla._id === producto._id) {
          filtabla.cantidad = cantidad;

          filtabla.total = producto.valorUnitario * cantidad;
        }
        return filtabla;
      })

    );

    filasTabla.map((filtabla) => {      

      a = a +filtabla.total;
      console.log("estado 1", a);

    })   
    
    setGranTotal(a);
   

  };


  return (

    <>
      <div className="table-top">
        <label htmlFor="producto" className="semi-bold label-form color-label"> Productos vendidos </label>
        <div className="boton-side">
          <select
            className="form-control"
            value={productoAAgregar._id ?? ''}
            onChange={(e) => setProductoAAgregar(productos.filter((prod) => prod._id === e.target.value)[0])
            }>
            <option disabled value=''>Seleccione una opción</option>

            {productos.map((product) => {

              return (
                <option
                  key={nanoid()}
                  value={product._id}>
                  {`${product.codigoProducto} - ${product.descripcionProducto}`}
                </option>);

            })}

          </select>
          <a onClick={()=>agregarNuevoProducto()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 512 512" xmlSpace="preserve">
              <g>
                <g>
                  <path className="icon-color" d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.853,256-256S397.167,0,256,0z M256,472.341
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
        </div>
      </div>

      <div className="table-top">
        <table className="stickytable table">
          <thead>
            <tr>
              <th className="h-r">COD PRODUCTO</th>
              <th>DESCRIPCIÓN</th>
              <th>CANTIDAD</th>
              <th>PRECIO UNITARIO</th>
              <th>TOTAL</th>
              <th className="h-l">
                <span></span>
              </th>
              <th className="ocultar">Input</th>
            </tr>
          </thead>
          <tbody>

            {filasTabla.map((fila, index) => {

                
              return (               

                <FilaProducto
                key={fila._id}
                prod={fila}
                index={index}
                eliminarProducto={eliminarProducto}
                modificarProducto={modificarProducto}
              />                
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}


const FilaProducto = ({prod, index, eliminarProducto, modificarProducto})=>{

  console.log("entra prod", prod);

  const [producto, setProducto] = useState(prod);

  useEffect(()=>{

    console.log("producto es:", producto);


  }, [producto]);

  return(

    <tr>

      <td>{producto.codigoProducto}</td>
      <td>{producto.descripcionProducto}</td>
      <td>
        <label htmlFor={`valor_${index}`}>
          <input
            type="number"
            name={`cantidad_${index}`}
            value = {producto.cantidad}
            min={0}
            required
            onChange={(e) => {
              modificarProducto(producto, e.target.value === '' ? '0' : e.target.value);
              setProducto({
                ...producto,
                cantidad: e.target.value === '' ? '0' : e.target.value,
                total:
                  parseFloat(producto.valorUnitario) *
                  parseFloat(e.target.value === '' ? '0' : e.target.value),
              });
            }} 
          />
        </label>
      </td>
      <td>$ {producto.valorUnitario}</td>
      <td>$ {parseFloat(producto.total ?? 0)}</td>
      <td>
        <a onClick={() => eliminarProducto(producto)}>
                      <svg
                        className="icon-s"
                        height="427pt"
                        viewBox="-40 0 427 427.00131"
                        width="427pt"
                        xmlns="http://www.w3.org/2000/svg">
                        <path className="icon-color2" d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                        <path className="icon-color2" d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                        <path className="icon-color2" d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0" />
                        <path className="icon-color2" d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                      </svg>
          </a>
      </td>
      <td  className="ocultar">  
          <input hidden defaultValue={producto._id} name={`producto_${index}`} />   
     </td>     
    </tr>
    
  );
};








export default FormVenta;



/*
<tr key={nanoid()}>
                  <td>{fila.codigoProducto}</td>
                  <td>{fila.descripcionProducto}</td>
                  <td>
                    <label htmlFor={`cantidad_${index}`}>
                      <input min="1" className="campoEdicion width-s" type="number" name={`cantidad_${index}`} />
                    </label>
                  </td>
                  <td>${fila.valorUnitario}</td>
                  <td>
                    <label htmlFor={`totalProducto_${index}`}>
                      $<input
                        className="campoEdicion width-s"
                        type="number"
                        name={`totalProducto_${index}`}
                         />
                    </label>
                  </td>
                  <td>
                    
                  </td>
                  <input hidden defaultValue={fila._id} name={`producto_${index}`} />
                </tr>

                */