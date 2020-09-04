import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

export class ViewTodo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {onEditTodoItem, id, text, deleteTodoText, updateTodoCompleted, completed} = this.props;
    // let textClass = ['margin', 'completed'];
    // textClass = textClass.join(' ')
    return (
        <>
          <div className="itemView">
            <div className={`margin ${!completed ? "" : "completed"}`} onClick={() => updateTodoCompleted(id)}>{text}</div>
            <FontAwesomeIcon className="marginIcon" icon={faEdit} onClick={() => onEditTodoItem(id)}/>
            <FontAwesomeIcon className="marginIcon" icon={faTimes} onClick={() => deleteTodoText(id)}
            />
          </div>
        </>
    );
  }
}

export default ViewTodo;
