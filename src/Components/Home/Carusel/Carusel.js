

import carousel1 from '../../../image/customer && caruseel/carousel-1.png';
import carousel2 from '../../../image/customer && caruseel/carousel-2.png';
import carousel3 from '../../../image/customer && caruseel/carousel-3.png';


import React from 'react';
import './Carusel.css';
import {Carousel } from 'react-bootstrap';

const Carusel = () => {
  return (
    <div>
    <div className='container-fluid pending' >
      
        <div className="row align-items-center">
            <div className="col-md-6 offset-3 ">
                <Carousel className="p-5">

                    <Carousel.Item interval={1000}>
                        <img style={{height:'300px'}}
                            className="d-block w-100"
                            src={carousel2}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={1000}>
                        <img style={{height:'300px'}}
                            className="d-block w-100 "
                            src={carousel3}
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item interval={1000}>
                        <img style={{height:'300px'}}
                            className="d-block w-100 "
                            src={carousel1}
                            alt="Third slide"
                        />                 
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    </div>
</div>
  );
};

export default Carusel;