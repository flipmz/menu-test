import React, { Component } from "react";

class NamesList extends Component {
  render() {
    const { data, filterText } = this.props;

    const nameList = data
      .filter((name) => {
        return name.name.indexof(filterText) >= 0;
      })
      .map((name) => {
        return (
          <li key={name.id} className={name.sex}>
            {name.name}
          </li>
        );
      });
    return (
      <div>
        <ul>{nameList}</ul>
      </div>
    );
  }
}
