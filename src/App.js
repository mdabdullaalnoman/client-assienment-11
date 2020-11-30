import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import one from '../src/image/icons/service1.png';
import two from '../src/image/icons/service2.png';
import three from '../src/image/icons/service3.png';
import Login from './Pages/Login/Login';
import DashBord from './Components/DashBord/DashBord/DashBord';
import ServiceList from './Components/DashBord/ServiceList/ServiceList';
import Review from './Components/DashBord/Review/Review';
import PrivateRoute from './Pages/Login/PrivateRoute';



export const userContext = createContext();

function App() {
  const services = [
    {
      id: 1,
      photo: one,
      title: 'Web & Mobile design',
      details: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
      id: 2,
      photo: two,
      title: 'Graphic design',
      details: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
      id: 3,
      photo: three,
      title: 'Web development',
      details: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
  ];
  const [loggedInUser, loggedOutUser] = useState([]);
  return (
    <userContext.Provider value={{ loggedInfo: [loggedInUser, loggedOutUser], serviceInfo: services }}>
   <Router>
     <Switch>

       <Route exact path="/">
          <Home></Home>
       </Route>

       

       <Route path="/login">
         <Login></Login>
       </Route>

       {/* <PrivateRoute path="/order">
         <DashBord></DashBord>
       </PrivateRoute> */}

       <PrivateRoute path="/order">
         <DashBord></DashBord>
       </PrivateRoute>

       <Route path="/serviceList">
         <ServiceList></ServiceList>
       </Route>

       <Route path="/review">
         <Review></Review>
       </Route>
       
     </Switch>
   </Router>
   </userContext.Provider>
  );
}

export default App;
