import React from 'react';
import DoctorsBottom from '../Doctors/DoctorsBottom/DoctorsBottom';
import Banner from '../Home/Banner/Banner';
import PageTitle from '../Shared/PageTitle';
import SingleDoctorsAll from '../Shared/SingleDoctorsAll';
import AllDepartment from './AllDepartment/AllDepartment';
import './Department.css'

const Department = () => {
    return (
        <div className="">
            {/* page title  */}
            <div className="department-page-banner text-blue-500 py-12 lg:py-24">
                <PageTitle title="Providing Care For The Sickest In Community."
                    content="Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure."
                ></PageTitle>
            </div>
            {/* department area main body  */}
            <div className="py-24 container full-width-all m-auto px-2">
                <div className='text-center'>
                    <h2 className="w-full md:w-2/4 m-auto text--500 font-semibold text-base mb-4">The Best Medical And General Practice Care!</h2>
                    <h1 className="  md:w-2/4 m-auto text-blue-500 font-bold text-3xl">Providing Medical Care For The Sickest In Our Community.</h1>
                </div>
                {/* deparment area data load  */}
                <div className="py-8 ">
                    <AllDepartment></AllDepartment>
                </div>
            </div>
            {/* viewd doctor load  */}
            <div className="bg-white">
                <div className="full-width-all container m-auto py-16 bg-white px-2">
                    <h1 className="text-gray-600 font-semibold text-xl mb-8">People Who Viewed This Doctors Also Viewed</h1>
                    <SingleDoctorsAll></SingleDoctorsAll>
                </div>
            </div>
            {/* emergency appoinment  */}
            <div>
                <DoctorsBottom></DoctorsBottom>
            </div>

        </div>
    );
};

export default Department;