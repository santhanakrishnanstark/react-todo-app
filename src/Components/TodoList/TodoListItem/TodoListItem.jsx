import React from 'react';
import './TodoListItem.css';

const TodoListItem = (props) => {
    return ( 
        <li className="todo-list-item">
            <input type="checkbox" name="todo-check" id="todo-check" />
            <div className="todo-item">Todo List item</div>
            <button><i class="fa fa-trash" aria-hidden="true"></i></button>
        </li>
     );
}
 
export default TodoListItem;