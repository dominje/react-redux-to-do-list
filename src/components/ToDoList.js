import React, { Component } from 'react';
import ToDoGroup from './ToDoGroup';
import ToDoGenerator from './ToDoGenerator';

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
               <ToDoGroup />
               <ToDoGenerator /> 
            </div>
        );
    }
}

export default ToDoList;