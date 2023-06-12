/*
+ props: nombre variable, son datos externos, datos que podemos mandarle a nuestros componentes y trabajarlos
    * props.titulo es un string, puedo usar "props.titulo.tuUpperCase"
+ required ={props.required}
    * le aplica required solo a los que tengan la propiedad (los elementos de formulario.js)
+ onChanche: 
    * siempre que el User ingrese un valor en el input, se va a activar esta función
* cuando se trabaja con inputs, se usa mucho "evento.target.value"


*/


import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion 
    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo