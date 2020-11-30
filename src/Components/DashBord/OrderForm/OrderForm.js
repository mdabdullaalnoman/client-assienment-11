import React from 'react';
import './OrderForm.css';
import {Form} from 'react-bootstrap';
import { Button } from '@material-ui/core';

const OrderForm = () => {
    return (
       <div className="col-md-9 ">

           <div className="order py-3 ">
               <h2 className="text-center">Order</h2>
           </div>

           
        <div className="p-5 bg">
        <Form className="w-50 " >
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="name" /><br></br>
                    <Form.Control type="email" placeholder="email" /><br></br>
                    <Form.Control type="email" placeholder="graphics design" /><br></br>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="project details" rows={3} />
                </Form.Group>

                <Form.Group controlId="exampleForm.Control">
                    <Form.Control className="w-50 " type="email" placeholder="price" /><br></br>
                    <div><button className="btn ">Image Upload</button></div><br></br>
                    <button className="btn btn-dark">Send</button>
                </Form.Group>
          </Form>
        </div>
               
           


        
       </div>
    );
};

export default OrderForm;