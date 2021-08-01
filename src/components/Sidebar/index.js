
import Card from '../UI/Card'
import './style.css';
import React, { useState, useEffect } from 'react';
import blog from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import img from '../../assets/icons/pratiksha.JPG';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGoogle,
    faWhatsapp
  } from "@fortawesome/free-brands-svg-icons";
 
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar=(props)=>{
    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blog.data;
        setPosts(posts);
    }, [posts]);

   
    return(
      <div className='sidebar' >
          <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
             <div className='cardhead'>
                 <span>About Me</span>
             </div>
             <div className="profileImageContainer">
             
             <img src={img}></img>
                 </div>
                 <div className='cardtext'>
                 <p> I am Pratiksha Patil. I have completed my Engineering in Computer Science and 
                     currently working as a Software Engineer. I am also expert in Sub-Conscious Mind Programming, 
                     Law of Universe, Life Coaching, Self-Transformation Psychology, Personal Growth, Positivity and Meditation,
                     
                 </p>
                 </div>
        </Card>
        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}} >
             <div className='cardhead'>
             <div className='cardhead'>
                 <span>Social Media</span>
             </div>
                 <div className='social-container'>
             <a href="https://www.youtube.com/channel/UC6IRVnOeA9tt8hTtRYPHvxQ"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      
      <a href="https://www.twitter.com/Pratiks19247817" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/accounts/onetap/?next=%2Faccounts%2F%40pratiikshapatil"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
       
      </a>
      
      </div>
             </div>
        </Card>
        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
             <div className='cardhead'>
                <span>Recent Post</span> 
             </div>
             <div className='recentposts'>
             {
                        posts.map(post => {
                            return (
                                <NavLink to={`/post/${post.id}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
             </div>
        </Card>

          
      </div>




        
       
    );
}

export default Sidebar;