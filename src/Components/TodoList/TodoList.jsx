import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = (props) => {
    return ( 
        <ul className="todo-list">
            <TodoListItem />
        </ul>
     );
}
 
export default TodoList;