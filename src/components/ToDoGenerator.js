import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ""}
    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState(() => {
            return {input: value}
        });
    }

    addToList = () => {
        const value = this.state.input;
        const id = uuidv4();
        const todo = {id: id, text: value, done: false}
        this.props.addToDo(todo);
    }

    render() {
        return (
            <div>
                <input  type="text"
                        name="size"
                        id="size"
                        placeholder="Insert a Todo item, b0ss"
                        onChange={this.onChange}/>
                <input type="button" value="add" onClick={this.addToList} />
            </div>
        );
    }
}

export default ToDoGenerator;