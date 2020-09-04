import React, { Component } from "react";

export class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <label>
          Categories
          <select name="Categories" id="">
            {categories.map((category) => (
            <option value={category} key={category}>{category}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default Category;
