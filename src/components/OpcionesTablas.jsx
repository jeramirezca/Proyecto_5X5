import icon_ver from "media/icons/icon_ver.svg";
import icon_editar from "media/icons/icon_editar.svg";
import icon_eliminar from "media/icons/icon_eliminar.svg";

function OpcionesTablas(props) {
    return (
        <div className="opciones_tabla">
            <img className="icono_ver" src={icon_ver} alt="Observar" />
            <img className="icono_editar" src={icon_editar} alt="Editar" />
            <img className="icono_eliminar" src={icon_eliminar} alt="Eliminar" />
        </div>
    );
}

export default OpcionesTablas;