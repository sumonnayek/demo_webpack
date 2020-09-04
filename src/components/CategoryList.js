import React, { Component } from "react";

export class CategoryList extends Component {
    constructor(props) {
        super(props)
    }
    
  render() {
      console.log(this.props);
      const { category } = this.props
    return (
      <>
        <option value={category}>{category}</option>
      </>
    );
  }
}

export default CategoryList;
