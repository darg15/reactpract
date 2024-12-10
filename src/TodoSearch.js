import React from 'react'
import './TodoSearch.css'

function TodoSearch(){

    const [searchValue, setSearchValue /*estos nombres pueden llamarse de cualquier manera*/] = React.useState('')
    console.log('los usuarios todos de ' + searchValue) //Aqui hace muchas impresiones porque lo hace cada vez que se cambia el state(cada vez que escriben)

    return(
        <input className='TodoSearch' placeholder="Agregar nuevo dato" value={searchValue} onChange={(event) => {
            setSearchValue(event.target.value);
        }} ></input>

    );
}

export {TodoSearch}