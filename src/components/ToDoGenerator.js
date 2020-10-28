import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import {addTodo} from '../apis/todos'
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Search } = Input;

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ''}
    }

    addToList = (event) => {
        addTodo(event).then(response => {
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
                <Search type="text"
                        name="size"
                        id="size"
                        placeholder="Insert a Todo item, b0ss"
                        enterButton="ADD"
                        size="large"
                        onSearch={this.addToList}
                        />
            </div>
        );
    }
}

export default ToDoGenerator;