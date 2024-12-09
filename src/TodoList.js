import './TodoList.css'

function TodoList(props){
    return(
        <ul className="TodoList">
           {props.children} {/* Se pone asi ya que dentro tendra otro/s componentes (children es reservado de react)*/}
        </ul>
    );
}
export {TodoList};