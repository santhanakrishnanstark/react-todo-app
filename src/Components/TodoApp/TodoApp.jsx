import React from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        }
    }

    formSubmit = (event) => {
        event.preventDefault();
        const todo = event.target.todo.value;

        if(todo) {
           let todoItem = {
            id: this.state.todoList.length + 1,
            todo,
            isCompleted: false
           }

        // push the created todo item into todoList array.
           this.setState({
               todoList: [ ...this.state.todoList, todoItem ]
           })

        }
    }

    changeItemState = (id) => {
        console.log('to change', id)
        let changedObj = this.state.todoList.filter(item => item.id === id)[0];
        changedObj.isCompleted = !changedObj.isCompleted
        
        // update the current changed object item into real todo list.
        this.setState({
            todoList: [ ...this.state.todoList, changedObj ]
        })
    }

    render() {
        console.log(this.state.todoList)
        return ( 
            <>
                <h1>TodoApp</h1>
                <TodoForm onFormSubmit={this.formSubmit} />
                <TodoList list={this.state.todoList} changeState={(id) => this.changeItemState(id)} />
            </>
         );
    }
}
 
export default TodoApp;