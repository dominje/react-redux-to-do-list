import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';

class ToDoGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {id: ""}
    }
    
    render() {
        const text = this.props.todoItems.map((todo) => <label key={todo.id}>{todo.text}</label>);
        return (
            <div>
                <ToDoItemContainer /><br />
                {text}<br />
            </div>
        );
    }
}

export default ToDoGroup;