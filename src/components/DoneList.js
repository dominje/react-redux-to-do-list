import React, { Component } from 'react';
import { List, Divider } from 'antd';

const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 10,
};
class DoneList extends Component {

    render() {
        const todos = this.props.todoItems.map((todo) => 
        <li key={todo.id}> {todo.text} </li>);
        return (
            <div>
            <Divider orientation="left">Done List</Divider>
         
            <List
            size="small"
            bordered
            dataSource={todos}
            pagination={paginationProps}
            renderItem={item => <List.Item>{item}</List.Item>}
            />

            </div>

        );
    }
}

export default DoneList;