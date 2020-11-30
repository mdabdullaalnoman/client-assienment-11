import React from 'react';
import Carusel from '../Carusel/Carusel';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Courses from '../Courses/Courses';
import Form from '../Form/Form';
import HeaderMain from '../HeaderMain/HeaderMain';
import Logos from '../Logos/Logos';
import Navbar from '../Navbar/Navbar';


const Header = () => {
    return (
        <div>
            <div style={{ background:'#FBD062'}}>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            </div>
            <Logos></Logos>
            <Courses></Courses>
            <Carusel></Carusel>
            <ClientFeedback></ClientFeedback>
            <Form></Form>
        </div>
    );
};

export default Header;