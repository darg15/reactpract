import './TodoSearch.css'

function TodoSearch(){
    return(
        <input className='TodoSearch' placeholder="Agregar nuevo dato" onChange={(event) => {
            console.log('Escribiste en el todoSearch')
            console.log(event)
            console.log(event.target)
            console.log(event.target.value)
        }}></input>

    );
}

export {TodoSearch}