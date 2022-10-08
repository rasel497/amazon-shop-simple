import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../componants/Header/Header';

const Main = () => {
    return (
        <div className='main-container'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;