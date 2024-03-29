import axios from 'axios';

/************************CRUD PARA USUARIOS *********************************////

export const obtenerUsuarios = async (successCallback, errorCallback)=>{

  const options = {method: 'GET', url: 'https://limitless-wildwood-65072.herokuapp.com/usuarios/', headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`}}; //envio información a express con el token de Auth0
  await axios.request(options).then(successCallback).catch(errorCallback);
  
};


export const obtenerVendedores = async (successCallback, errorCallback)=>{

  const options = {method: 'GET', url: 'https://limitless-wildwood-65072.herokuapp.com/usuarios/vendedores/', headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`}}; //envio información a express con el token de Auth0
  await axios.request(options).then(successCallback).catch(errorCallback);
  
};



export const editarUsuario = async (id, data, successCallback, errorCallback)=>{
  
  const options = {
    method: 'PATCH',
    url: `https://limitless-wildwood-65072.herokuapp.com/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem("token")}` },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);

};






//OBTENER DATOS USUARIOS SESION INICADA CON RUTA DOOMIE


export const obtenerDatosUsuarios = async (successCallback, errorCallback)=>{

  const options = {method: 'GET', url: 'https://limitless-wildwood-65072.herokuapp.com/usuarios/self', headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`}};
  await axios.request(options).then(successCallback).catch(errorCallback);
  
};



/************************CRUD PARA PRODUCTOS *********************************////
  
export const obtenerProductos = async (successCallback, errorCallback)=>{

  const options = {method: 'GET', url: 'https://limitless-wildwood-65072.herokuapp.com/productos/', headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`}};
  await axios.request(options).then(successCallback).catch(errorCallback);
  
};



/************************CRUD PARA VENTAS *********************************////

export const crearVenta = async (data, successCallback, errorCallback)=>{

  const options = {method: 'POST', url: 'https://limitless-wildwood-65072.herokuapp.com/ventas/nuevo', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem("token")}` }, data,};
  await axios.request(options).then(successCallback).catch(errorCallback);
  
};

export const ObtenerVentaPorId = async (id, successCallback, errorCallback)=>{

  const options = {method: 'GET', url: `https://limitless-wildwood-65072.herokuapp.com/ventas/${id}`, headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`}};
  await axios.request(options).then(successCallback).catch(errorCallback);
  
};