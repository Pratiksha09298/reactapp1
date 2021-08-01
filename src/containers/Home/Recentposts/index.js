import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';



const Recentposts = (props) => {
  return(
    <div style={props.style}>
            <Card style={{margin:"20px 0"}}>
                <div className='postimagewrapper'>
              <img src={'https://cdn.mindful.org/how-to-meditate-1024x640.jpg' }alt= 'post'/>
                </div>
                <div style={{textAlign:'center'}}>
                   <span>Create A Life You Love</span>
                   <h2>Always Stay Positive</h2>
                   <span>posted on 9 February 1998 by Pratiksha Patil</span>
                
           <p>Gratitude is a powerful positive force. Far from a fluffy concept,it has real impact on physical health, emotional wellbeing, motivation, engagement and belonging.It is something that tends to focus you on what you have and replace a sense of what you might be lacking.You can’t feel both grateful and unhappy, so when your mind focuses on all you are thankful for, you’re more likely to feel joy.In addition when your more grateful for what you have,you tend to focus on the present and appreciating yourself and everything around and this can reduce a sense of yearning or anxiety about the future.Throughout each day, find small things about which you can be thankful. Make sure you are focusing on being grateful not just for things, but for people and conditions as well.Write it down as note because it causes you to pause, focus, reflect and reinforce your positive experiences.Make everything count and bring attention to things which make you glad.</p>
           
                </div>
                
            </Card>
           
                </div>
   )

 }

export default Recentposts