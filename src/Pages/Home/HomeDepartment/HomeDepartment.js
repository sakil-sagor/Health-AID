import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle';
import SingleDepartmentAll from '../../Shared/SingleDepartmentAll';

// department section for home page 

const HomeDepartment = () => {
    return (
        <div className=" m-auto full-width-all py-24">
            <SectionTitle
                title="Our Departments"
                content="For your best facility, We try to fine out all your necessity and make full facility for your best fitness"
            ></SectionTitle>
            <div>
                <SingleDepartmentAll></SingleDepartmentAll>
            </div>
            <div className="mt-16 text-center ">
                <NavLink className="rounded-full py-3 px-5 border text-blue-600 text-lg font-semibold border-blue-500 hover:bg-blue-500 hover:text-white transition duration-500 ease-in-out " to="/departments"> Find all Departments</NavLink>
            </div>
        </div >
    );
};

export default HomeDepartment;
