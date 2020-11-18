import React from 'react';
import { useSelector } from "react-redux";
import {
    HomeOutlined,
    EyeOutlined,
    UserOutlined,
    MessageOutlined,
    OrderedListOutlined,
    FireOutlined
  } from "@ant-design/icons";
  import { Badge } from 'antd';

const SideBar = () => {
    const authSelector = useSelector((state) => state.PostsState);

    let auth = authSelector.authPosts.length;

    const postsSelector = useSelector((state) => state.PostsState);

    let postcount = postsSelector.posts.length;

    return ( 
        <div className="left-sidebar">
            <ul className="animated flash mt-20">
              <li>
                <a href="/">
                  <HomeOutlined style={{ color: "#40a9ff" }} />
                  &nbsp; Home
                </a>
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
              <li>
                <a href="/">
                  <FireOutlined style={{ color: "#40a9ff" }} />
                  &nbsp; Trending
                </a>{" "}
              </li>
            </ul>
        </div>
     );
}
 
export default SideBar;