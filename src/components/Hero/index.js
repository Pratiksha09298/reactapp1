import React from 'react';
import Header from '../../components/Header';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Card from '../UI/Card';
import './style.css';

const Hero=(props)=>{
    return(
        <div>
            <Card>
                <div style={{padding:'80px 0'}}>
                <Logo/>
                </div>
               <Navbar/>
                </Card>
            
            
        </div>
    );
}

export default Hero;