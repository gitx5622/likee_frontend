import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./containers/Login";
import Register from "./containers/Register";
import CreatePost from "./components/posts/CreatePost";
import Profile from "./users/Profile";
import ForgotPassword from "./users/ ForgotPassword";
import ResetPassword from "./users/ResetPassword";
import PostDetails from "./components/posts/PostDetails";
import AuthPosts from "./components/posts/AuthPosts";
import { history } from "./history";
import Posts from "./components/posts/Posts";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route
          exact
          path={[
            "/",
            "/createpost",
            "/profile/:id",
            "/posts/:id",
            "/authposts",
          ]}
        >
          <Main {...this.props}>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route path="/createpost" component={CreatePost} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="/resetpassword/:token" component={ResetPassword} />
              <Route path="/posts/:id" component={PostDetails} />
              <Route path="/authposts" component={AuthPosts} />
            </Switch>
          </Main>
        </Route>
        <Route
          path={[
            "/login",
            "/signup",
            "/forgotpassword",
            "/resetpassword/:token",
          ]}
        >
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetpassword/:token" component={ResetPassword} />
        </Route>
      </Router>
    );
  }
}

export default App;
