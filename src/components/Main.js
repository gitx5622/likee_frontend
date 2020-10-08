import React from "react";
import { Layout, Row, Col, Badge } from "antd";
import { useSelector } from "react-redux";
import "../css/Main.css";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import { Card, CardHeader, CardLink } from "shards-react";
import check from "../assets/check.png";
import {
  HomeOutlined,
  EyeOutlined,
  UserOutlined,
  MessageOutlined,
  OrderedListOutlined,
  FireOutlined
} from "@ant-design/icons";

const { Footer } = Layout;
const Main = (props) => {
  const authSelector = useSelector((state) => state.PostsState);

  let auth = authSelector.authPosts.length;

  const postsSelector = useSelector((state) => state.PostsState);

  let postcount = postsSelector.posts.length;

  return (
    <div>
      <Navigation />
      <div className="layout">
        <Row>
          <Col span={6} className="left-sidebar">
            <ul className="d-none d-md-block animated flash">
              <li>
                {" "}
                <a href="/">
                  <HomeOutlined style={{ color: "#40a9ff" }} />
                  &nbsp; Home
                </a>{" "}
                &nbsp;
              </li>
              <li>
                <a href="/">
                  <Badge
                    style={{ backgroundColor: "#52c41a" }}
                    count={postcount}
                  >
                    <EyeOutlined style={{ color: "#40a9ff" }} />
                  </Badge>
                  &nbsp; &nbsp; Total Posts
                </a>
              </li>
              <li>
                <a href="/authposts">
                  <Badge style={{ backgroundColor: "#52c41a" }} count={auth}>
                    <UserOutlined style={{ color: "#40a9ff" }} />
                  </Badge>
                  &nbsp; &nbsp;My Posts
                </a>
              </li>
              <li>
                <a href="/">
                  <MessageOutlined style={{ color: "#40a9ff" }} />
                  &nbsp; Messages
                </a>{" "}
                &nbsp;{" "}
              </li>
              <li>
                <a href="/">
                  <OrderedListOutlined style={{ color: "#40a9ff" }} />
                  &nbsp; Lists
                </a>{" "}
                &nbsp;{" "}
              </li>
              <li>
                <a href="/">
                  <UserOutlined style={{ color: "#40a9ff" }} />
                  &nbsp; Profile
                </a>{" "}
                &nbsp;{" "}
              </li>
              <li>
                <a href="/">
                  <FireOutlined style={{ color: "#40a9ff" }} />
                  &nbsp; Trending
                </a>{" "}
              </li>
              <button className="button btn btn-primary animated flip">
                <a href="/">See posts</a>
              </button>
            </ul>
            <ul className="d-block d-md-none">
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <li>
                <a href="/">
                  <i className="fa fa-dashboard" aria-hidden="true" />
                </a>
              </li>
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <li>
                <a href="/authposts">
                  <i className="fa fa-eye" aria-hidden="true" />
                </a>
              </li>
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <li>
                <a href="/createpost">
                  <i className="fa fa-plus-circle" aria-hidden="true" />
                </a>
              </li>
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <li>
                <a href="/">
                  <i className="fa fa-comment-o" aria-hidden="true" />
                </a>
              </li>
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <li>
                <a href="/">
                  <i className="fa fa-check-circle" aria-hidden="true" />
                </a>
              </li>
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <li>
                <a href="/">
                  <i className="fa fa-fire" aria-hidden="true" />
                </a>
              </li>
              {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <li>
                <a href="/profile/:id'">
                  <i className="fa fa-cog" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </Col>
          <Col span={12} className="mainbar">
            {props.children}
          </Col>
          <Col
            span={6}
            className="right-sidebar p-3 animated bounceInRight d-none d-sm-block"
          >
            <SearchBar />
            <br />
            <Card
              className="trending"
              style={{
                maxWidth: "300px",
                position: "relative",
                zIndex: "-1",
                color: "#000",
              }}
            >
              <CardHeader>Trending Posts</CardHeader>
              <CardLink>
                <div className="container">
                  <p>
                    <a href="/posts/3">
                      Token-based authentication{" "}
                      <img src={check} alt="check" width="15px" height="15px" />
                    </a>
                  </p>
                  <hr />
                  <p>
                    <a href="/posts/6">
                      Authentication jwt{" "}
                      <img src={check} alt="check" width="15px" height="15px" />
                    </a>
                  </p>
                  <hr />
                  <p>
                    <a href="/posts/9">
                      How to learn programming{" "}
                      <img src={check} alt="check" width="15px" height="15px" />
                    </a>
                  </p>
                  <hr />
                  <p>
                    <a href="/posts/10">
                      How to become a Software Engineer | Full Stack Developer
                      Roadmap 2020{" "}
                      <img src={check} alt="check" width="15px" height="15px" />
                    </a>
                  </p>
                  <hr />
                  <p>
                    <a href="/posts/11">
                      Top 5 Programming Languages to Learn in 2020 to Get a Job
                      Without a College Degree{" "}
                      <img src={check} alt="check" width="15px" height="15px" />
                    </a>
                  </p>
                </div>
              </CardLink>
            </Card>
            <br />
            <div className="sidebar-footer">
              <ul>
                <li>Terms</li>
                <li>Privacy policy</li>
                <li>Contacts</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <Footer style={{ textAlign: "center" }}>
        Likee ©2020 Created by Hooks
      </Footer>
    </div>
  );
};

export default Main;
