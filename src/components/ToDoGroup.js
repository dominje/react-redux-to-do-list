import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';

class ToDoGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {id: ""}
    }
    
    render() {
        const todos = this.props.todoItems.map((todo) => // 
        <ToDoItemContainer key={todo.id} todo={todo} />);
        return (
            <div>
                {todos}
            </div>
        );
    }
}

export default ToDoGroup;