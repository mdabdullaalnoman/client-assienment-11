import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <section className="form-container py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-5">
                            <h1 style={{ fontWeight: '600', color: '#2D2D2D' }}>Let us handle your<br />  project, professionally.</h1>
                            <p style={{ color: '#63583C', marginTop: '30px' }}>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                    <div className="col-md-6 pb-5">
                        <form style={{ marginTop: '50px' }}>
                            <div className="form-group">
                                <input type="text" className="form-control p-4" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control p-4" placeholder="Your name / company's name" />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control p-4" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                            </div>
                            <div className="form-group">
                                <button style={{backgroundColor:'black',color:'white'}} type="button" className="btn-brand px-3 py-1"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-p text-center py-4">copyright Orange lab {new Date().getFullYear()}</div>
            </div>
        </section>
    );
};

export default Form;