import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';
// import { Outlet } from "react-router-dom";
// import NavBar from "../Components/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default MainLayout;