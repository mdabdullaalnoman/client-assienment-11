import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/logos/logo.png';
import './navbar.css';


const Navbar = () => {
    return (
       
       <div className="container">
              <nav class="navbar navbar-expand-lg pt-5">
  <img class="mx-0" style={{ height:'55px'}} src={logo} alt=""/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      
   
      
   <Link to="/home"> <li class="nav-item active">   <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li></Link>
     <Link to="/portfolio"> <li class="nav-item"><a class="nav-link" href="#">portfolio</a></li></Link>
      <Link to="/team"><li class="nav-item"><a class="nav-link" href="#">Our item</a></li></Link>
      <Link to="/contract"><li class="nav-item"><a class="nav-link" href="#">Contract us</a></li></Link>
   <Link to="/adminlog"><button style={{backgroundColor:'black',color:'white'}} type="button" className="btn-brand px-3 py-1"> Login </button></Link>    
      
     
     
       
    </ul>
   
  </div>
</nav>
       </div>
        
    );
};

export default Navbar;