import React, { Component } from "react";

import css from "./style.module.css";
import Menu from "../components/Menu";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch("http://172.16.9.189:8000/api/menu/list")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }
  render() {
    console.log(this.state.robots);

    return (
      <div className={css.App}>
        <h1>Hello Class Component</h1>
        {this.state.robots.map((el) => (
          <div key={el.id}>{el.name}</div>
        ))}
      </div>
    );
  }
}

export default App;
