import React, {useEffect, useState} from 'react';
import {Layout, Row, Col, Icon, Input, Badge} from 'antd';
import { useSelector} from "react-redux";
import '../css/Main.css'
import Navigation from "./Navigation";
import _ from 'lodash'
import Suggestions from "./Suggestions";
import API_ROUTE from "../constants";

const { Footer } = Layout;


const Main  = (props) => {
    const [posts, setPosts] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    const authSelector = useSelector((state) => state.PostsState);

    let auth = authSelector.authPosts.length;

    const postsSelector = useSelector((state) => state.PostsState);

    let postcount = postsSelector.posts.length;

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
        console.log(event.target.value)
    };


    useEffect(() => {
        fetch(`${API_ROUTE}/posts`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setPosts(json.response)
            });
    }, []);

         const filteredCharacters = posts.filter(post => {
            return post.content.toLowerCase().includes(searchfield.toLowerCase());
        });

        // Searching the filter post using indefOf
        const filtered = _.filter(posts, (post) => {
            return post.title.indexOf(searchfield) > -1
         });
         console.log(filtered, filteredCharacters);
    return (
        <div>
            <Navigation/>
            <div className="layout">
                <Row>
                    <Col span={6} className="left-sidebar">
                        <ul className="d-none d-md-block animated flash">
                            <li> <a href="/"><Icon type="home"  style={{color:"#40a9ff"}} />&nbsp; Home</a>  &nbsp;</li>
                            <li><a href="/"><Badge style={{ backgroundColor: '#52c41a' }}  count={postcount}><Icon type="eye"  style={{color:"#40a9ff"}}/></Badge>&nbsp; &nbsp; Total Posts</a></li>
                            <li><a href="/authposts"><Badge style={{ backgroundColor: '#52c41a' }}  count={auth}><Icon type="user" style={{color:"#40a9ff"}} /></Badge>&nbsp; &nbsp;My Posts</a></li>
                            <li><a href="/"><Icon type="message"  style={{color:"#40a9ff"}}/>&nbsp; Messages</a>  &nbsp;   </li>
                            <li><a href="/"><Icon type="ordered-list"  style={{color:"#40a9ff"}}/>&nbsp; Lists</a>  &nbsp;   </li>
                            <li><a href="/"><Icon type="user"  style={{color:"#40a9ff"}}/>&nbsp; Profile</a>  &nbsp;   </li>
                            <li><a href="/"><Icon type="fire"  style={{color:"#40a9ff"}}/>&nbsp; Trending</a>  </li>
                            <button className="button btn btn-primary animated flip"><a href="/">See posts</a></button>
                        </ul>
                        <ul className="d-block d-md-none">
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <li><a href="/"><i className="fa fa-dashboard" aria-hidden="true"/></a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <li><a href="/authposts"><i className="fa fa-eye" aria-hidden="true"/></a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <li><a href="/createpost"><i className="fa fa-plus-circle" aria-hidden="true"/></a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <li><a href="/"><i className="fa fa-comment-o" aria-hidden="true"/></a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <li><a href="/"><i className="fa fa-check-circle" aria-hidden="true"/></a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <li><a href="/"><i className="fa fa-fire" aria-hidden="true"/></a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                            <li><a href="/profile/:id'"><i className="fa fa-cog" aria-hidden="true"/></a></li>
                        </ul>

                    </Col>
                    <Col span={12} className="mainbar">
                        {props.children}
                    </Col>
                    <Col span={6} className="right-sidebar p-3 animated bounceInRight d-none d-sm-block">
                        <div className="searchbar">
                            <SearchBox searchChange= {onSearchChange}  />
                        </div><br/>
                        <Suggestions posts={filteredCharacters} />
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


