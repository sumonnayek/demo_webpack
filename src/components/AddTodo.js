import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      text: "",
      completed: false,
    };
    // const {resetActiveId} = this.props;
  }

  generateId = () => {
    let genaratedId = Math.random().toString().substr(2, 9);
    this.setState({
      id: genaratedId,
    });
  };

  sendTextToList = () => {
    this.generateId();
    this.props.addTodo(this.state);
    this.setState({
      text: "",
    });
  };

  componentDidMount() {
    this.inputRef.current.focus();
    this.generateId();
    // let genaratedId = Math.random().toString().substr(2, 9);
    // this.setState({
    //   id: genaratedId
    // })
  }

  inputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  resetActiveId = () => {
    const { resetActiveId } = this.props;
    // resetActiveId()
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <input
          value={text}
          onChange={this.inputChange}
          ref={this.inputRef}
          type="text"
          onFocus={this.resetActiveId()}
        />
        <button onClick={this.sendTextToList}> Add </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (state) => dispatch(addTodo(state)),
});



export default connect(null, mapDispatchToProps)(AddTodo);
