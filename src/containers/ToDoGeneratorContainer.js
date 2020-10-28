import ToDoGenerator from "../components/ToDoGenerator"
import {addToDo} from "../actions"
import {connect} from "react-redux"

const mapDispatchToProps = (dispatch) => ({
    addToDo: (todo) => {dispatch(addToDo(todo))}
})

//first parameter = parent to child (receiving data); second parameter = child to parent (sending data)
const ToDoGeneratorContainer = connect(null , mapDispatchToProps)(ToDoGenerator)

export default ToDoGeneratorContainer;