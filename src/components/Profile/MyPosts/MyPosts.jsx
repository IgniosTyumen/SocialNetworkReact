import React from 'react'
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {

    let onAddPost = () =>{
     props.addPost();
     };

    let onPostChange = () =>{
        let text= newPostElement.current.value;
        props.updateNewPostText(text);
    };

    let newPostElement = React.createRef();
     let posts = props.postsData.map( post =>  <Post message={post.message} likes={post.likesCount}/>);
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );

};

export default MyPosts;