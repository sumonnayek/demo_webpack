import React, { Component } from "react";

export class EditTodo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: this.props.text
    };
  }
  
  inputChange = (e) => {
    this.setState({
      text:e.target.value
    })
  }

  updateTodoList = () => {
    const {text} = this.state;
    const {id, updateTodoList} = this.props;
    updateTodoList(id, text);
  }

  render() {
    // console.log(this.props)
    return (
        <div>
          <input
              value={this.state.text}
              onChange={this.inputChange}
              type="text"
          />
          <button onClick={this.updateTodoList} > Save </button>
        </div>
    );
  }
}

export default EditTodo;
