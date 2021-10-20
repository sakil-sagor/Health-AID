import React from 'react';
import { NavLink } from 'react-router-dom';
import all1 from '../../../images/all.png'

// home page section 

const AllArea = () => {
    return (
        <div className="container m-auto full-width-all  py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center px-2">
                <div className="">
                    <img className="w-3/4 block m-auto" src={all1} alt="" />
                </div>
                <div className="py-4">
                    <h1 className="text-blue-500 text-4xl font-semibold">Welcome To MediLink.
                        Central Hospital</h1>
                    <p className="text-gray-500 text-lg font-semibold mt-8">
                        Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                    </p>
                </div>
                <div className="py-4">
                    <div className="w-full">
                        <NavLink className="text-white  w-full block bg-blue-500 py-4 px-5 rounded-lg  text-xl font-semibold hover:bg-blue-700" to='/appointment'> Requested Appointment <i class="fas fa-arrow-right ml-2"></i></NavLink>
                    </div>
                    <br />
                    <div className="w-full">
                        <NavLink className="text-white w-full block bg-blue-500 py-4 px-5 rounded-lg  text-xl font-semibold hover:bg-blue-700" to='/doctors'> Find  Doctors <i class="fas fa-arrow-right ml-2"></i></NavLink>
                    </div>
                    <br />
                    <div>
                        <NavLink className="text-white bg-blue-500 w-full block py-4 px-5 rounded-lg  text-xl font-semibold hover:bg-blue-700" to='/departments'> Find Departments <i class="fas fa-arrow-right ml-2"></i></NavLink>
                    </div>
                    <br />
                    <div>
                        <NavLink className="text-white bg-blue-500 py-4 px-5 w-full block rounded-lg  text-xl font-semibold hover:bg-blue-700" to='/contactUs'>Emergency Contact <i class="fas fa-arrow-right ml-2"></i></NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllArea;