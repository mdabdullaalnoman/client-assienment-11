import React from 'react';
import { Link } from 'react-router-dom';
import './CourseDetail.css';


const CourseDetail = ({ Courses }) => {
    const { title, photo, details } = Courses;
    // const singleCourseData ={handleCouse};
    // console.log(singleCourseData);

    const handleService = () =>{
        const newService = {title , details}
        fetch('http://localhost:5000/addservice', {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then( success => {
            if(success){
                alert('your data submitt successfully added')
            }
        })
    }

    return (
        <Link to="/order" className="col-md-4 col-sm-6 nav-link">
            <div className="service-card text-center my-5 p-5">
                <div className="icon-image">
                    <img style={{ height: '75px' }} className="img-fluid" src={photo} alt="" />
                </div>
                <h5 style={{ fontWeight: '900', color:'black' }} className="header-text m-3 ">{title}</h5>
                <p className="text-p px-3" style={{color:'grey'}}>{details}</p>
            </div>
        </Link>
    );
};

export default CourseDetail;