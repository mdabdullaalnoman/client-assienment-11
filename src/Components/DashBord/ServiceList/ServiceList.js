import React from 'react';
import SideBar from '../Sidebar/SideBar';
import './ServiceList.css';
import logo from '../../../image/logos/logo.png'

const ServiceList = () => {
    return (
       <div className="container-fluid">
           <div className="row">

           <SideBar></SideBar>

           <div className="col-md-9  ">
             <h2 className="py-5 text-center">Service Details</h2>

             <div className="bg">
                 <div className="row">
                   <div style={{border: '1px solid gray'}} className="col-md-4">
                    <div className="img">
                      <img src="" alt=""/>
                     <div className="text-left">
                     <h3>Graphics Design</h3>
                      <p>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                     </div>
                    </div>
                   </div>
                 </div>
             </div>
           </div>    
                   
               

               
           </div>
       </div>
    );
};

export default ServiceList;