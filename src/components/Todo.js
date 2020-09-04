import React, { Component } from "react";
import ViewTodo from "./ViewTodo";
import EditTodo from "./EditTodo";

export class Todo extends Component {

  render() {
    console.log(this.props)
    let presentView;
    const {onEditTodoItem, activeTodoId, id, text, updateTodoList, deleteTodoText,updateTodoCompleted, completed} = this.props;
    if (activeTodoId === id) {
      presentView = (
          <EditTodo text={text}
                    id={id}
                    updateTodoList={updateTodoList}/>
      );
    } else {
      presentView = (
          <ViewTodo text={text}
                    id={id}
                    deleteTodoText={deleteTodoText}
                    onEditTodoItem={onEditTodoItem}
                    updateTodoCompleted={updateTodoCompleted}
                    completed={completed}/>
      );
    }
    return <>{presentView}</>;
  }
}

export default Todo;
