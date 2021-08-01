import React from 'react';
import Blog from '../../components/Blog';
import Sidebar from '../../components/Sidebar';
import './style.css';

const Post=(props)=>{

    console.log(props);
    return(
      
      <div className='post'>
      <Blog  {...props}/>
      <Sidebar />
      </div>
    
    );
}

export default Post;