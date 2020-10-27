import ToDoGroup from "../components/ToDoGroup"
import {connect} from "react-redux"

const mapStateToProps = state => ({
    todoText: state.todo,
})

const ToDoGroupContainer = connect(mapStateToProps)(ToDoGroup)

export default ToDoGroupContainer;