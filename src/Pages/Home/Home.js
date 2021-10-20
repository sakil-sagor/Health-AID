import React from 'react';
import DoctorsBottom from '../Doctors/DoctorsBottom/DoctorsBottom';
import AllArea from './AllArea/AllArea';
import Banner from './Banner/Banner';
import Emergency from './Emergency/Emergency';
import HomeDepartment from './HomeDepartment/HomeDepartment'
import OurDoctors from './OurDoctors/OurDoctors';

const Home = () => {
    return (
        // Home page full desgn 
        <div>
            <Banner></Banner>
            <Emergency></Emergency>
            <AllArea></AllArea>
            <OurDoctors></OurDoctors>
            <HomeDepartment></HomeDepartment>
            <DoctorsBottom></DoctorsBottom>
        </div>
    );
};

export default Home;