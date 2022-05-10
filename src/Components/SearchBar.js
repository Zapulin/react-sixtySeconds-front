import React from "react";
import { findCategorybyText } from "../lib/DefaultCategories";

export default function SearchBar() {
  return (
    <div
      className="py-1 rounded-pill"
      style={{
        backgroundColor: "#fff",
        paddingLeft: "20px",
        paddingRight: "10px",
      }}
    >
      <div className="d-flex">
        <input
          className="mr-sm-2 border-0 outline-none"
          type="text"
          placeholder="Buscar por categorías.."
          onChange={(evt) => findCategorybyText(evt.target.value)}
        />
        <i className="fa fa-search mt-1 fa-lg"></i>
      </div>
    </div>
  );
}
