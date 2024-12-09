function TodoList(props){
    return(
        <ul>
           {props.children} {/* Se pone asi ya que dentro tendra otro/s componentes*/}
        </ul>
    );
}
export {TodoList};