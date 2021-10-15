function CajaInicio(props) {
    return (
        <div className="cuadros">
            <img src={props.icono} className="iconos_inicio"  alt={props.nombre} />
            <div className="contenido">
                <span>
                    {props.dato}
                </span>
                <span>
                    {props.nombre}
                </span>
            </div>
        </div>
    );
}

export default CajaInicio;