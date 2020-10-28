import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import {addTodo} from '../apis/todos'

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ''}
    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState(() => {
            return {input: value}
        });
    }

    addToList = (event) => {
        addTodo(this.state.input).then(response => {
            console.log(response);
            this.props.addToDo(response.data);
            this.setState({
                input:''
            });
        });
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