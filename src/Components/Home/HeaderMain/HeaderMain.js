import React from 'react';
import mainRight from '../../../image/logos/Frame.png';
import './HeaderMain.css';


const HeaderMain = () => {
    return (
        <main>
            <div className="container">
                <div className="row mt-5 mb-5 mr-0 ml-0 align-items-center">
                    <div className="col-md-5 m-0 p-0 offset-md-2">
                        <h1 className="mb-3 font-weight-bolder">Lets grow your <br/> Brand to the <br/> next level</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet vitae placeat ab maiores explicabo ex fugiat dolorum labore maxime officia.</p>
                        <button style={{backgroundColor:'black',color:'white'}} type="button" className="btn-brand px-3 py-1"> Hire Us </button>
                    </div>
                    <div className="col-md-6 offset-md-1 main-right">
                        <img src={mainRight} alt=""/>
                    </div>
                </div>
              
            </div>
        </main>
    );
};

export default HeaderMain;