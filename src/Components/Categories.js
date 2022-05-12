import React, { Component } from "react";
import { categories } from "../lib/DefaultCategories";
// import Chip from './Chip'
export default class Categories extends Component {
  render() {
    const { categoryFilter } = this.props;
    const categoriesList = categories.map((category) => (
      <span
        className="rounded-pill px-4 py-2 my-2 mx-2 shadow-md fw-bold text-light"
        style={{ backgroundColor: category.color, cursor: "pointer" }}
        key={category.name}
        onClick={() => categoryFilter(category.name)}
      >
        {category.name}
      </span>
    ));
    return (
      <div
        className="p-2 rounded-pill"
        style={{ backgroundColor: "#403D3D" }}
      >
        <div className="d-flex justify-content-center alig-items-center overflow-auto">
          {categoriesList}
        </div>
      </div>
    );
  }
}
