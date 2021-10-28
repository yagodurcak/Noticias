import React, {useState} from 'react';

import styled from '@emotion/styled'
import useNoticia from './hooks/useNoticia';

const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
`

function Formulario({setSeleccion, seleccion}) {

    const OPCIONES = [
        {value: " ", nombre: "Seleccione"},
        {value: "general", nombre: "General"},
        {value: "business", nombre: "Negocios"},
        {value: "health", nombre: "Salud"},

    ]

    const [state, Seleccionar] = useNoticia(" ", OPCIONES);
    const [error, setError] = useState(false);

    // validar formulario 

    const cargarSeleccion = (e) => {
        e.preventDefault();
        if (state === " ") {
            setError(true);
            return
        } else {
            setError(false);
            setSeleccion(state)        
        }        
    }

    return (
        <Container className="centrar" >

            { error ? <div className="bg-red-500 mt-5 py-7"><h1 className="text-center text-white font-bold text-2xl" >Debe seleccionar una opción</h1></div>: null}
            <form action="" className="grid" onSubmit= {cargarSeleccion}>                
                <Seleccionar/>
                <button className="bg-yellow-500 py-5 text-white font-bold text-2xl" type="submit">BUSCAR</button>
            </form>
        </Container>
    )
}

export default Formulario
