import "./MiOrg.css"


const MiOrg = (props) => {

    //Estado -- Hooks
    //useState
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)

    return <section className="orgSection">
        <h3 className="tittle">Mi Organización</h3>
        <img src="/img/boton-add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;