import React from 'react';

//crear interfaz de la lista de objetos
interface ListProps<T> {
    items:T[],
    renderComponent:(component:T,i:number)=>React.ReactNode
}
//lista de objetos 
function List<T>(props:ListProps<T>){
    return <div >
        {props.items.map(props.renderComponent)}
    </div>
}

export default List;