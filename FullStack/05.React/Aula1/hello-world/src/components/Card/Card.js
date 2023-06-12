import Botao from "../Botao/Botao"
import './Card.scss'

function Card(props) {
    return (
        <div className="card">
            <p>{props.text}</p>
            <Botao>{props.btnText}</Botao>
        </div>
    )
}

export default Card