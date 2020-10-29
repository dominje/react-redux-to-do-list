import React, { Component } from 'react';
import {updateTodo, deleteTodo} from '../apis/todos'
import { Button } from 'antd';


class ToDoItem extends Component {

    updateItem = () => {
        updateTodo(this.props.todo.id,this.props.todo.done).then(response => {
            this.props.updateToDo(response.data.id);
        });
        
    };

    removeItem = () => {
        deleteTodo(this.props.todo.id).then(response =>{
            this.props.deleteToDo(response.data.id);
        })
    };

    render() {
        const text = this.props.todo.text;
        let todoClass = this.props.todo.done ? "crossed-line" : "";
        
        return (
                <fieldset>
                    <Button type="primary" size={'small'} onClick={this.removeItem} ghost>x</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label className={`${todoClass}`} onClick={this.updateItem}> {text} </label>
                </fieldset>
        );
    }
}

export default ToDoItem;