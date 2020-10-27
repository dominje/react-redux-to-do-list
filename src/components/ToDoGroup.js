import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';
import ToDoItem from './ToDoItem';

class ToDoGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {id: ""}
    }
    
    render() {
        const todos = this.props.todoItems.map((todo) => 
        <ToDoItemContainer key={todo.id} id={todo.id} text={todo.text} done={todo.done} />);
        return (
            <div>
                {todos}
            </div>
        );
    }
}

export default ToDoGroup;