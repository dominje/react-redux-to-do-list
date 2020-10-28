import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

class ToDoItem extends Component {
    setDone = event => {
        const element = event.target;
        element.classList.toggle("crossed-line");
        this.props.updateToDo(this.props.todo.id);
    };

    removeItem = () => {
        this.props.deleteToDo(this.props.todo.id);
    };

    render() {
        const text = this.props.todo.text;
        let todoClass = this.props.todo.done ? "crossed-line" : "";
        
        return (
            <div>
                <fieldset>
                    <label className={`${todoClass}`} onClick={this.setDone}> {text} </label>
                    <input type="button" value="x" onClick={this.removeItem}></input>
                </fieldset>
            </div>
        );
    }
}

export default ToDoItem;