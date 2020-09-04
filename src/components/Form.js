import React, { Component } from "react";
import ReactDOM from "react-dom";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleEvent = (event) => {
    const { value } = event.target;
    this.setState({
      value,
    });
  };

  render() {
    console.log("hello");
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
// console.log('hello world')
