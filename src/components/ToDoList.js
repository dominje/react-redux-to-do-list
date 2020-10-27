import React, { Component } from 'react';
import ToDoGroupContainer from '../containers/ToDoGroupContainer';
import ToDoGeneratorContainer from '../containers/ToDoGeneratorContainer';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input : ""
        }
    }

    render() {
        return (
            <div>
            <h1 /> ToDoList
               <ToDoGroupContainer />
               <ToDoGeneratorContainer /> 
            </div>
        );
    }
}

export default ToDoList;