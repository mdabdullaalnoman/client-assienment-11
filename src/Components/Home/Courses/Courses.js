import React, { useContext } from 'react';
import { userContext } from '../../../App';
import CourseDetail from '../CourseDetail/CourseDetail';



const Courses = () => {
    const { serviceInfo } = useContext(userContext);
    const serviceData = serviceInfo;

    const handleCouse =(id) =>{
        serviceData.find(e => e.id == id)
    }

    return (
      
            <div className="container">
                <div style={{ marginTop: '150px' }} className="service-section">
                    <h3 style={{ fontWeight: '500' }} className="header-text text-center pb-2">Provide awesome <span style={{color:'#7AB259'}} className="text-brand">Services</span></h3>
                    <div className="row d-flex justify-content-center align-items-center">
                        {
                            serviceData.map(service => <CourseDetail handleCouse={handleCouse} key={service.title} Courses={service} />)
                        }

                    </div>
                </div>
            </div>
       
    );
};

export default Courses;