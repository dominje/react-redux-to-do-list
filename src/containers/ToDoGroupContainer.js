import ToDoGroup from "../components/ToDoGroup"
import {connect} from "react-redux"

const mapStateToProps = state => ({
    todoItems: state.todo,
})

const ToDoGroupContainer = connect(mapStateToProps)(ToDoGroup)

export default ToDoGroupContainer;