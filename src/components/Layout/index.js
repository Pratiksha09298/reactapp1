import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    
      </React.Fragment>
    
   )

 }

export default Layout