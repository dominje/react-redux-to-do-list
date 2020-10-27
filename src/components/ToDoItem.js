import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : ""
        }
    }

    setDone = () => {
        console.log(uuidv4());
    }

    render() {
        const text = this.props.todoText;
        return (
            <div>
                <fieldset>
                    <label onClick={this.setDone}> hello there {text} </label>
                    <input type="button" value="x" onClick={this.setDone} />
                </fieldset>
            </div>
        );
    }
}

export default ToDoItem;