import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = (props) => {

    return ( 
        <ul className="todo-list">
            {
                props.list.map((item, index) => <TodoListItem key={index} data={item} changeItemState={(id) => props.changeState(id)} />)
            }
        </ul>
     );
}
 
export default TodoList;