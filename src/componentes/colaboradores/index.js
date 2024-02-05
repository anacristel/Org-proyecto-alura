import "./colaborador.css"
import { TiDelete } from "react-icons/ti"

const Colaboradores = (props) => {
    const { nombre, puesto, foto, equipo, id } = props.datos
    const { colorPrimario, eliminarColaborador } = props

    return <div className="colaborador">
        <TiDelete className="eliminar" onClick={eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt="avatar" />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}
export default Colaboradores;