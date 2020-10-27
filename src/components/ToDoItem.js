import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

class ToDoItem extends Component {
    setDone = () => {
        //console.log(uuidv4());
    }

    render() {
        const text = this.props.todoText;
        return (
            <div>
                <label onClick={this.setDone}> hello there {text} </label>
            </div>
        );
    }
}

export default ToDoItem;