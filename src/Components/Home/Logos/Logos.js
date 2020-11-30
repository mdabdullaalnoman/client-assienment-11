import React from 'react';
import slack from '../../../image/logos/slack.png';
import google from '../../../image/logos/google.png';
import uber from '../../../image/logos/uber.png';
import netflix from '../../../image/logos/netflix.png';
import air from'../../../image/logos/airbnb.png';

const Logos = () => {
    return (
        <section className="container text-center">
        <div style={{ marginTop: '120px' }} className="row d-flex justify-content-center align-items-center">
            <div className="col-md-2 col-sm-4 mb-4">
                <div>
                    <img style={{ height: '40px' }} className="img-fluid" src={slack} alt="" />
                </div>
            </div>
            <div className="col-md-2 col-sm-4 mb-4">
                <div>
                    <img style={{ height: '42px' }} className="img-fluid" src={google} alt="" />
                </div>
            </div>
            <div className="col-md-2 col-sm-4 mb-4">
                <div>
                    <img style={{ height: '35px' }} className="img-fluid" src={uber} alt="" />
                </div>
            </div>
            <div className="col-md-2 col-sm-4 mb-4">
                <div>
                    <img style={{ height: '60px' }} className="img-fluid" src={netflix} alt="" />
                </div>
            </div>
            <div className="col-md-2 col-sm-4 mb-4">
                <div>
                    <img style={{ height: '40px' }} className="img-fluid" src={air} alt="" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Logos;