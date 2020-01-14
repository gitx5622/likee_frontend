import React, { useEffect } from 'react'
import Moment from 'react-moment';
import { useSelector, useDispatch } from "react-redux";
import Default from '../../assets/default.png'
import { fetchPost } from '../../store/posts/actions/postsAction'
import Likes from '../likes/Likes'
import Comments from '../comments/Comments'
import Comment from '../comments/Comment'
import EditPost from './EditPost';
import DeletePost from './DeletePost'
import {Col, Row} from "antd";
import '../../css/Posts.css';


const PostDetails = (props) => {

    const postID  = props.match.params.id

    const dispatch = useDispatch()

    const singlePost = id => dispatch(fetchPost(id))

    const currentState = useSelector(state => state)

    const post = currentState.PostsState.post

    const postComments = currentState.CommentsState

    const authID = currentState.Auth.currentUser ? currentState.Auth.currentUser.id : ""

//Get the avatar of the author of the post
    let imagePreview = null;
    let avatarPathPost = post.author ? post.author.avatar_path : null
    if(avatarPathPost){
        imagePreview = (<img className="img_style_post" src={avatarPathPost} alt="profile"/>);
    } else {
        imagePreview = (<img className="img_style_post" src={Default} alt="profile"/>);
    }


    useEffect(() => {
        singlePost(postID)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let singlePostComments = []

    if(postComments){
        // eslint-disable-next-line array-callback-return
        postComments.commentItems.map(eachItem => {
            if(eachItem.postID === postID){
                singlePostComments = eachItem.comments
            }
        })
    }

    return (
        <div>
            <Row>
                <Col span={4}>
                    <div className="imagepreview mr-2" style={{marginLeft:"10px"}}>
                        {imagePreview}
                    </div>
                </Col>
                <Col span={20} >
                    <div className="contentx">
                        <span href="" style={{fontWeight: 'bold'}}>{post.author ? post.author.username : ""}
                            <Moment fromNow style={{float:"right", marginRight:"10px"}}>{post.created_at}</Moment></span>
                        <h6>{post.title}</h6>
                        <p>{post.content}</p>
                    </div>
                </Col>
            </Row>
            <div className="style-fav p-2">
                <Likes postID={Number(postID)} />
                <Comments postID={postID} />
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
                <div className="mt-3 style-card-comment" style={{fontSize:"12px"}}>
                    {singlePostComments ? singlePostComments.map(comment => {
                            return (
                                <Comment  comment={comment} key={comment.id} />
                            )
                        })
                        : ""
                    }
                </div>
            <hr className="post_detail-hr"/>
        </div>
    )
}

export default PostDetails
