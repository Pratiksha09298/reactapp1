import React, { useState, useEffect } from 'react';
import Card from '../UI/Card'
import Img from '../../blogPostimages/memories-from.jpg'
import './style.css';
import blog from '../../data/blog.json';
const Blog=(props)=>{
   

    const[post,setPost]=useState({ id: "" ,
    blogCategory: "" ,
    blogTitle : "" ,
    postedOn: "" ,
    author: "" ,
    blogImage: "" ,
    blogText: ""});
   useEffect(() => {
    const postid=props.match.params.postid;
    const post=blog.data.find(post=>post.id==postid)
    setPost(post);
});
if(post.blogImage == "") return null;
    return(
        <div className="blog">
         <Card >
             <div className='bloghead'>
             <span className='blogCategory'>{post.blogCategory}</span>
             <h1 className='postTitle'>{post.blogTitle}</h1>
             <span className='postedBy'>posted on {post.postedOn} by {post.author}</span>
             </div>
             <div className='postImageContainer'> 
             <img className='postImageContainer' src={post.blogImage} />
             {/* <img src= {Img} alt="pic" /> */}
             {/* <img src={require('../../blogPostimages/' + post.blogImage)} alt="Post Image" /> */}
                    
             </div>
             <div className='postContent'>
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
             </div>
         </Card>
        </div>
    );
}

export default Blog;