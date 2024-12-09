import './TodoItem.css'

function TodoItem(props) {
    return (
      <li className="TodoItem">
        {/*Las comillas invertidas para hacer que el estilo sea dinamico*/}
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>V</span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className="Icon Icon-delete">X</span>
      </li>
    );
  }
  
  export {TodoItem}