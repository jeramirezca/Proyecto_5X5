import "styles/estiloTable.css";
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const obtenerUsuarios = async (setUsuarios, setEjecutarConsulta) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/',   headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`} };
  await axios
    .request(options)
    .then(function (response) {
      setUsuarios(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};

const Usuarios = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerUsuarios(setUsuarios, setEjecutarConsulta);
    }
  }, [ejecutarConsulta]);

  return (
    <div className='content-general  margen-out'>
      <div className='max-width'>
        <h2 className='color-label'>
          Listado de Usuarios
        </h2>
      </div>
      <TablaUsuarios listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta} />
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
  );
};

const TablaUsuarios = ({ listaUsuarios, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);

  useEffect(() => {
    setUsuariosFiltrados(
      listaUsuarios.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaUsuarios]);

  return (
    <div>
      <div className="top-button">
        <input
          className="buscador"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder='Buscar'
        />
        <button className="mr-10 apuntador button-icon" onClick={() => {
          let buscador = document.querySelector(".buscador");
          buscador.classList.toggle("activo");
        }}>
          <svg
            className="icon-s"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px"
            viewBox="0 0 512 512"
            xmlSpace="preserve">
            <g>
              <g>
                <path className="icon-color3" d="M310,190c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S315.52,190,310,190z" />
              </g>
            </g>
            <g>
              <g>
                <path className="icon-color3" d="M500.281,443.719l-133.48-133.48C388.546,277.485,400,239.555,400,200C400,89.72,310.28,0,200,0S0,89.72,0,200
                        s89.72,200,200,200c39.556,0,77.486-11.455,110.239-33.198l36.895,36.895c0.005,0.005,0.01,0.01,0.016,0.016l96.568,96.568
                        C451.276,507.838,461.319,512,472,512c10.681,0,20.724-4.162,28.278-11.716C507.837,492.731,512,482.687,512,472
                        S507.837,451.269,500.281,443.719z M305.536,345.727c0,0.001-0.001,0.001-0.002,0.002C274.667,368.149,238.175,380,200,380
                        c-99.252,0-180-80.748-180-180S100.748,20,200,20s180,80.748,180,180c0,38.175-11.851,74.667-34.272,105.535
                        C334.511,320.988,320.989,334.511,305.536,345.727z M326.516,354.793c10.35-8.467,19.811-17.928,28.277-28.277l28.371,28.371
                        c-8.628,10.183-18.094,19.65-28.277,28.277L326.516,354.793z M486.139,486.139c-3.78,3.78-8.801,5.861-14.139,5.861
                        s-10.359-2.081-14.139-5.861l-88.795-88.795c10.127-8.691,19.587-18.15,28.277-28.277l88.798,88.798
                        C489.919,461.639,492,466.658,492,472C492,477.342,489.919,482.361,486.139,486.139z"/>
              </g>
            </g>
            <g>
              <g>
                <path className="icon-color3" d="M200,40c-88.225,0-160,71.775-160,160s71.775,160,160,160s160-71.775,160-160S288.225,40,200,40z M200,340
                        c-77.196,0-140-62.804-140-140S122.804,60,200,60s140,62.804,140,140S277.196,340,200,340z"/>
              </g>
            </g>
            <g>
              <g>
                <path className="icon-color3" d="M312.065,157.073c-8.611-22.412-23.604-41.574-43.36-55.413C248.479,87.49,224.721,80,200,80c-5.522,0-10,4.478-10,10
                        c0,5.522,4.478,10,10,10c41.099,0,78.631,25.818,93.396,64.247c1.528,3.976,5.317,6.416,9.337,6.416
                        c1.192,0,2.405-0.215,3.584-0.668C311.472,168.014,314.046,162.229,312.065,157.073z"/>
              </g>
            </g>
          </svg>
        </button>
        <Link to="/agregarUsuario">
          <button className="mr-10 apuntador button-icon">
            <svg
              className="icon-s"
              height="618pt"
              viewBox="-19 -23 618.68191 618"
              width="618pt"
              xmlns="http://www.w3.org/2000/svg">
              <path className="icon-color3" d="m442.589844 296.5c-37.789063-.132812-73.9375 15.429688-99.808594 42.976562-37.210938-29.6875-83.441406-45.777343-131.042969-45.597656h-.375c-57.210937.121094-110.300781 22.359375-149.648437 62.832032-39.976563 40.851562-61.835938 96.6875-61.714844 157.273437.0234375 3.316406 1.324219 6.488281 3.625 8.867187 2.347656 2.351563 5.542969 3.660157 8.867188 3.625l327.914062-.625c.75.875 1.496094 1.625 2.25 2.5 43.050781 45.5625 111.484375 56.21875 166.355469 25.910157 54.871093-30.3125 82.285156-93.90625 66.640625-154.609375-15.644532-60.703125-70.375-103.132813-133.0625-103.152344zm-417.230469 204.867188c2.625-49.09375 21.613281-93.9375 54.214844-127.289063 34.605469-35.601563 81.449219-55.214844 131.789062-55.214844h.375c42.015625-.164062 82.828125 14.023438 115.675781 40.222657-27.675781 42.746093-29.5 97.28125-4.746093 141.785156zm417.230469 44.972656c-62.09375 0-112.425782-50.335938-112.425782-112.429688 0-62.085937 50.332032-112.425781 112.425782-112.425781s112.425781 50.339844 112.425781 112.425781c0 62.09375-50.332031 112.429688-112.425781 112.429688zm0 0" />
              <path className="icon-color3" d="m211.488281 264.148438c72.921875 0 132.039063-59.117188 132.039063-132.039063 0-72.925781-59.117188-132.0429688-132.039063-132.0429688s-132.039062 59.1171878-132.039062 132.0429688c.070312 72.890625 59.144531 131.96875 132.039062 132.039063zm0-239.097657c59.128907 0 107.054688 47.933594 107.054688 107.058594 0 59.121094-47.925781 107.054687-107.054688 107.054687-59.125 0-107.054687-47.933593-107.054687-107.054687.070312-59.097656 47.957031-106.984375 107.054687-107.058594zm0 0" />
              <path className="icon-color3" d="m493.183594 421.417969h-38.101563v-38.097657c0-6.902343-5.59375-12.492187-12.492187-12.492187-6.898438 0-12.492188 5.589844-12.492188 12.492187v38.097657h-38.101562c-6.898438 0-12.492188 5.59375-12.492188 12.492187 0 6.902344 5.59375 12.492188 12.492188 12.492188h38.101562v38.101562c0 6.898438 5.59375 12.492188 12.492188 12.492188 6.898437 0 12.492187-5.59375 12.492187-12.492188v-38.101562h38.101563c6.898437 0 12.488281-5.589844 12.488281-12.492188 0-6.898437-5.589844-12.492187-12.488281-12.492187zm0 0" />
            </svg>
          </button>
        </Link>
      </div>
      <div >
        <table className="stickytable table">
          <thead>
            <tr>
              <th className="h-r">USUARIO</th>
              <th>ROL</th>
              <th>ESTADO</th>
              <th>
                <span></span>
              </th>
              <th className="h-l">
                <span></span>
              </th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.map((usuario) => {
              return (
                <FilaUsuario
                  key={nanoid()}
                  usuario={usuario}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FilaUsuario = ({ usuario, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
    usuario: usuario.usuario,
    rol: usuario.rol,
    estado: usuario.estado,
  });

  const actualizarUsuario = async () => {
    //enviar la info al backend
    const options = {
      method: 'PATCH',
      url: `http://localhost:5000/usuarios/${usuario._id}/`,
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem("token")}`},
      data: { ...infoNuevoUsuario},
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Usuario modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error('Error modificando el usuario');
        console.error(error);
      });
  };

  const eliminarUsuario = async () => {
    const options = {
      method: 'DELETE',
      url: `http://localhost:5000/usuarios/${usuario._id}/`,
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('usuario eliminado con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error eliminando el usuario');
      });
    setOpenDialog(false);
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              className='campoEdicion'
              type='text'
              disabled
              value={infoNuevoUsuario.usuario}
              onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, usuario: e.target.value })}
            />
          </td>
          <td>
            <input
              className='campoEdicion'
              type='text'
              value={infoNuevoUsuario.rol}
              onChange={(e) =>
                setInfoNuevoUsuario({ ...infoNuevoUsuario, rol: e.target.value })
              }
            />
          </td>
          <td>
            <select className='campoEdicion'
              type='text'
              value={infoNuevoUsuario.estado}
              onChange={(e) =>
                setInfoNuevoUsuario({ ...infoNuevoUsuario, estado: e.target.value })
              } id="estado" required name="estado" id="estado" className="form-control">
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td>{usuario.usuario}</td>
          <td>{usuario.rol}</td>
          <td>{usuario.estado}</td>
        </>
      )}
      <td>
        <div className=''>
          {edit ? (
            <Tooltip title='Confirmar Edición' arrow>
              <i
                onClick={() => actualizarUsuario()}
                className='fas fa-check confirmarEdicion'
              />
            </Tooltip>
          ) : (
            <Tooltip title='Editar usuario' arrow>
              <a className="apuntador" onClick={() => setEdit(!edit)}>
                <svg
                  className="icon-s"
                  height="401pt"
                  viewBox="0 -1 401.52289 401"
                  width="401pt"
                  xmlns="http://www.w3.org/2000/svg">
                  <path className="icon-color2" d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" />
                  <path className="icon-color2" d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" />
                </svg>
              </a>
            </Tooltip>
          )}
        </div>
      </td>
      <td>
        <div className=''>
          {edit ? (
            <Tooltip title='Cancelar edición' arrow>
              <i
                onClick={() => setEdit(!edit)}
                className='fas fa-ban cancelarEdicion'
              />
            </Tooltip>
          ) : (
            <Tooltip title='Eliminar usuario' arrow>
              <a className="apuntador" onClick={() => setOpenDialog(true)}>
                <svg
                  className="icon-s"
                  height="427pt"
                  viewBox="-40 0 427 427.00131"
                  width="427pt"
                  xmlns="http://www.w3.org/2000/svg">
                  <path className="icon-color" d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                  <path className="icon-color" d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                  <path className="icon-color" d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0" />
                  <path className="icon-color" d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                </svg>
              </a>
            </Tooltip>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className='p-8 flex flex-col'>
            <h1 className='textoEliminar'>
              ¿Está seguro de querer eliminar este usuario?
            </h1>
            <div className='opcionesEliminar flex w-full items-center justify-center my-4'>
              <button
                onClick={() => eliminarUsuario()}
                className='botonEliminar si'
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className='botonEliminar no'
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>

    </tr>
  );
};


export default Usuarios;