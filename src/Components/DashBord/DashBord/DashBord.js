import React from 'react';
import OrderForm from '../OrderForm/OrderForm';
import SideBar from '../Sidebar/SideBar';

const DashBord = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <SideBar></SideBar>
                <OrderForm></OrderForm>
            </div>
        </div>
    );
};

export default DashBord;