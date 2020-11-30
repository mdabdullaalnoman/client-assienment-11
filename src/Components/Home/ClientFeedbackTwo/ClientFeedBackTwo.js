import React from 'react';
import './clientFeedbackTwo.css';

const ClientFeedBackTwo = ({feedback}) => {
    const {photo , name, title,detail }=feedback;
    return (
        <div className="col-md-4 col-sm-6 mb-3">
            <div className=" border p-4 mb-2">
                <div className="row ">
                    <img style={{ width: '60px', borderRadius: '50%' }} className="img-fluid mr-4" src={photo} alt="" />
                    <div>
                        <h6 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '-1px' }}>{name}</h6>
                        <p>{title}</p>
                    </div>
                </div>
                <p className="text-p mt-3 mb-1">{detail}</p>
            </div>
        </div>
    );
};

export default ClientFeedBackTwo;