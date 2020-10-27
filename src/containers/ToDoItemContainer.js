import ToDoItem from "../components/ToDoItem"
import {connect} from "react-redux"

const mapStateToProps = state => ({
    todoText: state.text,
})

const ToDoItemContainer = connect(mapStateToProps)(ToDoItem)

export default ToDoItemContainer;