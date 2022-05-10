import React, { Component } from "react";

//Components

import Categories from "../Components/Categories";
import Posts from "../Components/Posts";

export default class Feed extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "85px" }}>
        <Categories />
        <div className="d-flex flex-column gap-4 mt-4">
          <Posts />
        </div>
      </div>
    );
  }
}
