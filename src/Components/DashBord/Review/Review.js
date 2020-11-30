import { Button } from '@material-ui/core';
import React from 'react';
import { Form } from 'react-bootstrap';
import SideBar from '../Sidebar/SideBar';

const Review = () => {
    return (
       <div className="container-fluid">
           <div className="row">
           <SideBar></SideBar> 
                   
           <div className="col-md-9 ">
                  <div><h2 className="text-center">Review</h2></div>

                  <div className="bg">
                  <Form className=" w-50 p-5">
                        <Form.Group controlId="formBasicEmail">                        
                            <Form.Control type="name" placeholder="name" /><br></br>
                            <Form.Control type="company name" placeholder="company name" />                            
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">                            
                               <Form.Control placeholder="description" as="textarea" rows={3} />
                       </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                 </Form>
                  </div>

           </div>   

              
           </div>
       </div>
    );
};

export default Review;