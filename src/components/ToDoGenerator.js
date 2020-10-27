import React, { Component } from 'react';

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
        console.log(this.state.input);
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