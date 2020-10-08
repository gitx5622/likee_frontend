import React, { useState } from "react";
import {
  Label,
  Input,
  FormGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./Auth.css";
import { SignIn } from "../store/auth/actions/authActions";
import background from "../assets/background.jpg";
import Navigation from "../components/Navigation";

const Login = () => {
  const currentState = useSelector((state) => state.Auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const userLogin = (credentials) => dispatch(SignIn(credentials));

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const submitUser = (e) => {
    e.preventDefault();
    userLogin({
      email: user.email,
      password: user.password,
    });
  };

  if (currentState.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navigation />
      <div className="container Auth animated flash">
        <Card className="card-style">
          <CardHeader>Login</CardHeader>
          <CardBody>
            <form onSubmit={submitUser}>
              <div className="mb-2">
                {currentState.loginError &&
                currentState.loginError.Incorrect_details ? (
                  <p className="text-danger">
                    {currentState.loginError.Incorrect_details}
                  </p>
                ) : (
                  ""
                )}
                {currentState.loginError &&
                currentState.loginError.No_record ? (
                  <small className="text-danger">
                    {currentState.loginError.No_record}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
                {currentState.loginError &&
                currentState.loginError.Required_email ? (
                  <p className="text-danger">
                    {currentState.loginError.Required_email}
                  </p>
                ) : (
                  ""
                )}
                {currentState.loginError &&
                currentState.loginError.Invalid_email ? (
                  <p className="text-danger">
                    {currentState.loginError.Invalid_email}
                  </p>
                ) : (
                  ""
                )}
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                />
                {currentState.loginError &&
                currentState.loginError.Required_password ? (
                  <small className="color-red">
                    {currentState.loginError.Required_password}
                  </small>
                ) : (
                  ""
                )}
                {currentState.loginError &&
                currentState.loginError.Invalid_password ? (
                  <small className="color-red">
                    {currentState.loginError.Invalid_password}
                  </small>
                ) : (
                  ""
                )}
                {currentState.loginError &&
                currentState.loginError.Incorrect_password ? (
                  <small className="color-red">
                    {currentState.loginError.Incorrect_password}
                  </small>
                ) : (
                  ""
                )}
              </FormGroup>

              {currentState.isLoading ? (
                <Button color="primary" type="submit" block disabled>
                  Login...
                </Button>
              ) : (
                <Button
                  color="primary"
                  type="submit"
                  block
                  disabled={user.email === "" || user.password === ""}
                >
                  Login
                </Button>
              )}
            </form>
            <div
              className="mt-2"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <small>
                  <Link to="/signup">Sign Up</Link>
                </small>
              </div>
              <div>
                <small>
                  <Link to="/forgotpassword">Forgot Password?</Link>
                </small>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
