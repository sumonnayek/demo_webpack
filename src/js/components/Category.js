import React, { Component } from "react";
import CategoryList from "./CategoryList";

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
            <option value={category}>{category}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default Category;
