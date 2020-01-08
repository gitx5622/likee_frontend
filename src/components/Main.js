import React, {useEffect, useState} from 'react';
import {Layout, Row, Col, Icon, Input, Badge} from 'antd';
import '../css/Main.css'
import Navigation from "./Navigation";
// import _ from 'lodash'
import Suggestions from "./Suggestions";


const { Footer } = Layout;


const Main  = (props) => {
    // const [posts, setPosts] = useState([]);
    // const [searchfield, setSearchfield] = useState('');
    //
    // const authSelector = useSelector((state) => state.PostsState);
    //
    // let auth = authSelector.authPosts.length;
    //
    // const postsSelector = useSelector((state) => state.PostsState);
    //
    // let postcount = postsSelector.posts.length;
    //
    // const onSearchChange = (event) => {
    //     setSearchfield(event.target.value);
    //     console.log(event.target.value)
    // };
    //
    //
    // useEffect(() => {
    //     fetch("http://localhost:9000/posts")
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log(json);
    //             setPosts(json.response)
    //         });
    // }, []);
    //
    //      const filteredCharacters = posts.filter(post => {
    //         return post.content.toLowerCase().includes(searchfield.toLowerCase());
    //     });
    //
    //     // Searching the filter post using indefOf
    //     const filtered = _.filter(posts, (post) => {
    //         return post.title.indexOf(searchfield) > -1
    //      });
    //      console.log(filtered, filteredCharacters);
    return (
        <div>
            <Navigation/>
            <div className="layout">
                <Row>
                    <Col span={6} className="left-sidebar animated flash">
                        <ul>
                            <li> <Icon type="home"  style={{color:"#40a9ff"}} />&nbsp; <a href="/">Home</a>  &nbsp;</li>
                            <li><Badge style={{ backgroundColor: '#52c41a' }}  count={10}><Icon type="eye"  style={{color:"#40a9ff"}}/></Badge>&nbsp; <a href="/">&nbsp; Total Posts</a></li>
                            <li><Badge style={{ backgroundColor: '#52c41a' }}  count={8}><Icon type="user" style={{color:"#40a9ff"}} /></Badge>&nbsp; <a href="/authposts">&nbsp;My Posts</a></li>
                            <li><Icon type="message"  style={{color:"#40a9ff"}}/>&nbsp; <a href="/">Messages</a>  &nbsp;   </li>
                            <li><Icon type="ordered-list"  style={{color:"#40a9ff"}}/>&nbsp; <a href="/">Lists</a>  &nbsp;   </li>
                            <li><Icon type="user"  style={{color:"#40a9ff"}}/>&nbsp; <a href="/">Profile</a>  &nbsp;   </li>
                            <li><Icon type="fire"  style={{color:"#40a9ff"}}/>&nbsp; <a href="/">Trending</a>  </li>
                            <button className="button btn btn-primary animated flip"><a href="/">See posts</a></button>
                        </ul>

                    </Col>
                    <Col span={12} className="mainbar">
                        {props.children}
                    </Col>
                    <Col span={6} className="right-sidebar p-3 animated bounceInRight d-none d-sm-block">
                        {/*<div className="searchbar">*/}
                        {/*    <SearchBox searchChange= {onSearchChange}  />*/}
                        {/*</div><br/>*/}
                        {/*<Suggestions posts={filteredCharacters} />*/}
                        <br/>
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
            <Footer style={{ textAlign: 'center'}}>Likee ©2020 Created by Hooks</Footer>
        </div>
    )

};


const SearchBox = ({searchChange})=> {
    return (
        <div className= 'searchbar'>
            <Input className = 'search-input'
                   type = 'text'
                   placeholder = 'Search from all posts'
                   onChange = {searchChange}
            />
        </div>
    )
};

export default Main;


