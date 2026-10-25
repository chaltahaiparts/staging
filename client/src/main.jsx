import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import Course from './pages/Course';
import Motorcycles from './pages/Motorcycles';
import MotorcycleDetails from './pages/MotorcycleDetails';
import LoginForm from './pages/LoginForm';
import Enquiry from './pages/Enquiry';


const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about-us" element={<About />} />
    <Route path="course" element={<Course />} />
    <Route path="motorcycles" element={<Motorcycles />} />
    <Route path="motorcycles/:id" element={<MotorcycleDetails />} />
    <Route path="login" element={<LoginForm />} />
    <Route path="enquiry" element={<Enquiry />} />
    

    </Route>
));

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);
