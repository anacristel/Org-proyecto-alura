import "./CampoTexto.css"

const CampoTexto = (props) => {

    const placeHolferModificado = `${props.placeholder}...`

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input
            placeholder={placeHolferModificado}
            required={props.required}
            value={props.value}
            onChange={manejarCambio} />
    </div>
}

export default CampoTexto;