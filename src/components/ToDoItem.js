import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : "",
            text: "",
            done: false
        }
    }

    setDone = event => {
        const element = event.target;
        element.classList.toggle("crossed-line");
        this.props.updateToDo(this.props.id);
    };

    removeItem = () => {
        this.props.deleteToDo(this.props.id);
    };

    render() {
        const text = this.props.text;
        
        return (
            <div>
                <fieldset>
                    <label onClick={this.setDone}> {text} </label>
                    <input type="button" value="x" onClick={this.removeItem}></input>
                </fieldset>
            </div>
        );
    }
}

export default ToDoItem;