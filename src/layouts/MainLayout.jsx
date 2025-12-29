import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
const MainLayout = () => {
    return (
        <div className='bg-white'>
            <Header></Header>
            <div className='bg-cover bg-center bg-no-repeat mt-6'
                style={{
                    backgroundImage: `url('/images/more/4.png'), url('/images/more/5.png')`,
                    backgroundSize: 'cover, cover',
                    backgroundRepeat: 'no-repeat no-repeat',
                    backgroundSize: '20% 20%, 20% 50%',
                    backgroundPosition: 'left top, right bottom',
                }}>
                <div className='max-w-5xl mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;