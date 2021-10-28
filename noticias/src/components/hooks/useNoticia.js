import React, {useState}from 'react'

const useNoticia = (parametro, OPCION) => {
    const [eligio, seteligio] = useState(parametro);
  

    const Seleccionar = () => (
        <select class="px-64 py-3 border-2 my-10" onChange= {e => seteligio(e.target.value)} value={eligio}>

            {OPCION.map(op =>(
                <option key={op.value} value={op.value}>{op.nombre}</option>
                
            ))}

        </select>
    )

    return [eligio, Seleccionar]
}

export default useNoticia
