import React, { Component } from 'react';

class DoneList extends Component {

    render() {
        const todos = this.props.todoItems.map((todo) => 
        <li key={todo.id}> {todo.text} </li>);
        return (
            <div>
                <h1>Done List</h1>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default DoneList;