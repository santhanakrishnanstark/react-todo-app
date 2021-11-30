import React from 'react';
import './TodoForm.css';

const TodoForm = (props) => {
    return ( 
        <form onSubmit={props.onFormSubmit}>
            <input type="text" name="todo" id="todo" className="todo-text" placeholder="Add an item" />
            <input type="submit" value="ADD" className="todo-submit-btn" />
        </form>
     );
}
 
export default TodoForm;