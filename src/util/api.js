import axios from 'axios';

/************************CRUD PARA USUARIOS *********************************////

export const obtenerUsuarios = async (successCallback, errorCallback)=>{

  const options = {method: 'GET', url: 'http://localhost:5000/usuarios/', headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`}};
  await axios.request(options).then(successCallback).catch(errorCallback);
  
};


/************************CRUD PARA PRODUCTOS *********************************////
  
export const obtenerProductos = async (successCallback, errorCallback)=>{

  const options = {method: 'GET', url: 'http://localhost:5000/productos/', headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`}};
  await axios.request(options).then(successCallback).catch(errorCallback);
  
};



/************************CRUD PARA VENTAS *********************************////

export const crearVenta = async (data, successCallback, errorCallback)=>{

  const options = {method: 'POST', url: 'http://localhost:5000/ventas/nuevo', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem("token")}` }, data,};
  await axios.request(options).then(successCallback).catch(errorCallback);
  
};

export const ObtenerVentaPorId = async (id, successCallback, errorCallback)=>{

  const options = {method: 'GET', url: `http://localhost:5000/ventas/${id}`, headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`}};
  await axios.request(options).then(successCallback).catch(errorCallback);
  
};