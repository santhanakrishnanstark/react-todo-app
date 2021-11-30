import React from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.todo.value)
    }

    render() {
        return ( 
            <>
                <h1>TodoApp</h1>
                <TodoForm onFormSubmit={this.formSubmit} />
                <TodoList />
            </>
         );
    }
}
 
export default TodoApp;