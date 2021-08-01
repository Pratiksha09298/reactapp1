import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import './style.css';
import Card from '../../components/UI/Card'
import blog from '../../data/blog.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Form,Modal} from 'react-bootstrap';

const Sideimage=props=>{
    return(
        <div style={{height:`${props.height}px`}}>
        <img  src={props.src} alt=""/> 
        </div>
    );
}
const ImageGallary=props=>{
    return(
    <div className='gallerypost'style={props.gallaryStyle} >
           
        <section style= {{width:'70%'}}>
           <div className='mainImageWrapper'>
            <img  src={props.imagesArray[0]} alt='' />
            </div>
        </section>
        <section  className={"sideimagewrapper"} style={{width:'30%'}}>
            <Sideimage
             height={props.sideImageHeight}
             src={props.imagesArray[1]} 
             alt=''/>
            <Sideimage
             height={props.sideImageHeight}
             src={props.imagesArray[2]} 
             alt=''/>
             <Sideimage
             height={props.sideImageHeight}
             src={props.imagesArray[3]} 
             alt=''/>
        </section>
        </div>
    );
}
const Home=(props)=>{
    const gallaryHeight = 450;
    const gallaryStyle = {
        height: gallaryHeight+'px',
        overflow: 'hidden'
    }
    const sideImageHeight = gallaryHeight / 3;
   const imgAr = blog.data.map(post => post.blogImage)
    
    return(
        <div>
            <Card >
                {/* <ImageGallary
                largewidth='70%'
                smallwidth='30%'
                sideImageHeight={sideImageHeight}
                gallaryStyle={gallaryStyle}
                imagesArray={imgAr}
                /> */}
        
        
            </Card>
            <section className='Homecontainer'>
                <div style={{width:'70%'}}>
            <Card style={{margin:"40px 15"}}>
            <div style={{textAlign:'center'}}>
            <br/>
            <h1 className='postTitle'>Be the Energy You Want To Attract</h1>

            <span className='postedBy'>posted on September 01, 2020 by Pratiksha Patil</span>
            </div>
                <div className='postimagewrapper'>
              <img style={{ width:'100%',height:'35%'}}src={'https://dailyalchemy.com/wp-content/uploads/2015/01/bigstock-Child-opening-a-magic-gift-box-23600768-min.jpg' }alt= 'post'/>
                </div>
                <div style={{textAlign:'center'}}>
                  
                <br/>
            <p>
             Life is full of magic and miracles you just have to feel it. 
           All that we are is result of what we thought. Your vibrations create your world make sure to vibrate it more positively. Always do what you love and love what you do. Tell yourself It is easy , It is often. Make it an affirmation. Eat, sleep, breath it and your life shall be transformed. Observe your focus and stop focusing on how stressed you are and remember how blessed you are. Always remember you can't change what you did before but you can change what to do next. You have no comparison because you are AWESOME.   
           </p>
                </div>
                
            </Card>
           
                </div>
                <Sidebar/>
            </section>
           
            
        </div>
    )
    
}

export default Home;