function TodoCounter({total, completed}) {
    {/* Los props se pueden declarar mediante su declaracion explicita (como aqui) o solo 
        dejando la palabra props y accediendo a sus propiedades dentro del componente*/}

        //Tambien se pueden asignar las props antes de llamarlas, o haciendolo desde el componente, donde se este usando
        // total = 15
        // completed = 20
    return(
        <h1>Has completado {completed} de {total} TODOs</h1>
    )
}


  export {TodoCounter}