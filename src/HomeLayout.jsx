import React from 'react';
import Navbar from './Componets/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Componets/Footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <div >

                <Navbar></Navbar>

                <main className="w-11/12 mx-auto max-w-7xl ">
                    <Outlet ></Outlet>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </div>
        </div>
    );
};

export default HomeLayout;