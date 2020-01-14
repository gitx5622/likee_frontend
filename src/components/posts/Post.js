import React from 'react'
import Moment from 'react-moment';
import { useSelector } from 'react-redux'
import check from '../../assets/check.png'
import {Row, Col} from "antd";
import '../../css/Posts.css';
import Default from '../../assets/default.png'
import Likes from '../likes/Likes'
import Comments from '../comments/Comments'
import EditPost from './EditPost';
import DeletePost from './DeletePost'



const Post = ({ post }) => {

    const currentState = useSelector(state => state);
    const authID = currentState.Auth.currentUser ? currentState.Auth.currentUser.id : "";

    let $imagePreview = null;
    if(post.author.avatar_path){
        $imagePreview = (<img className="img_style_post" src={post.author.avatar_path} alt="no one"/>);
    } else {
        $imagePreview = (<img className="img_style_post" src={Default} alt="no one 2"/>);
    }

    return (
    <div>
        <Row>
            <Col span={4}>
                <div className="imagepreview mr-2">
                    {$imagePreview}
                </div>
            </Col>
            <Col span={20}>
                <div className="contentx">
                    <span href="" style={{fontWeight: 'bold'}}>{post.author.username}&nbsp;
                        <img src={check} alt="check" width="15px" height="15px"/>
                        <Moment fromNow style={{float:"right"}}>{post.created_at}</Moment></span>
                    <h6>{post.title}</h6>
                    <p>{post.content}</p>
                </div>
            </Col>
        </Row>
                <div className="style-fav">
                    <>
                        <Likes postID={post.id} />
                        <Comments postID={post.id} />
                    </>
                    { authID === post.author_id ? (
                        <div className="ml-auto">
              <span style={{marginRight: "20px"}}>
                <EditPost post={post} />
              </span>
                            <span>
                <DeletePost postID={post.id} />
              </span>
                        </div>
                    ) : ""}
                </div>
        <hr className="posts-hr"/>
        </div>
    )
}

export default Post
