import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';
import { List, Divider } from 'antd';


const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
};

class ToDoGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {id: ""}
    }
    
    render() {
        const todos = this.props.todoItems.map((todo) => // 
        <ToDoItemContainer key={todo.id} todo={todo} />);
        return (
            <div>

            <Divider orientation="left">To do List</Divider>
            <List
            size="small"
            bordered
            dataSource={todos}
            pagination={paginationProps}
            
            renderItem={item => <List.Item >{item}</List.Item>}
            />

            </div>
        );
    }
}

export default ToDoGroup;