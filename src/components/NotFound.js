import React, { Component } from "react";
import { Result, Button } from "antd";
import { NavLink } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <NavLink to="/">
            <Button type="primary">Back Home</Button>
          </NavLink>
        }
      />
    );
  }
}

export default NotFound;
