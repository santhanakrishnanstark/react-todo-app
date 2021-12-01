import React from 'react';
import './TodoListItem.css';

const TodoListItem = (props) => {

    const classes = 'todo-list-item ' + ( props.data.isCompleted ? 'completed' : '' );

    return ( 
        <li className={classes}>
            <input type="checkbox" name="todo-check" id="todo-check" onChange={() => props.changeItemState(props.data.id)} />
            <div className="todo-item">{props.data.todo}</div>
            <button><i class="fa fa-trash" aria-hidden="true"></i></button>
        </li>
     );
}
 
export default TodoListItem;