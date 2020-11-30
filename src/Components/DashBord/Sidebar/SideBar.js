import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCommentAlt, faShoppingBag, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import logo from '../../../image/logos/logo.png';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
       <div className="col-md-3">
          <div className="pl-5 pt-5 ">

                    <div className="logo">
                        <img className="w-50" src={logo} alt="logo here"/>
                    </div>

                    <div className="list pt-5">
                            <Link to="order"><p className="customer-icon"> <FontAwesomeIcon className="mr-3" icon={faShoppingCart} />  Order</p></Link><br/>
                            <Link to="serviceList"><p className="customer-icon"> <FontAwesomeIcon className="mr-3" icon={faShoppingBag} />  Service List</p></Link><br/>
                            <Link to="review"> <p className="customer-icon"> <FontAwesomeIcon className="mr-3" icon={faCommentAlt} />  Review</p></Link><br/>
                    </div>
         
          </div>
       </div>
    );
};

export default SideBar;