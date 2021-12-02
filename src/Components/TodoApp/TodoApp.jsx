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

    formSubmit = (todo) => {

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
        const newList = this.state.todoList.map((listItem) => {

            if(listItem.id === id) {
                listItem.isCompleted = !listItem.isCompleted
            }

            return listItem;
        })

        // assign the newList to the global state todoList
        this.setState({
            todoList: newList
        })
    }

    deleteTodoItem = (id) => {
        const newList = this.state.todoList.filter((listItem)=> {
            return listItem.id !== id;
        })

        // assign the newList to the global state todoList
        this.setState({
            todoList: newList
        })
    }

    render() {
        console.log(this.state.todoList)
        return ( 
            <>
                <h1>TodoApp</h1>
                <TodoForm onFormSubmit={this.formSubmit} />
                <TodoList list={this.state.todoList} 
                    changeState={(id) => this.changeItemState(id)}
                    deleteListItem={(id) => this.deleteTodoItem(id)} />
            </>
         );
    }
}
 
export default TodoApp;