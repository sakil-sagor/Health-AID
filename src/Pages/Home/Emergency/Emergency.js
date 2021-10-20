import React from 'react';
import { NavLink } from 'react-router-dom';

// Emergency page for home  

const Emergency = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 text-white ">
                <NavLink className="bg-green-600 py-16  text-center flex justify-center	items-center " to='/departments'>
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="fas fa-ambulance  mr-2 text-4xl "></i>
                        <p className="text-xl font-semibold	"> 24 Hours Services</p>
                    </div>
                </NavLink>
                <NavLink className="bg-pink-600 py-16 text-center flex justify-center	items-center" to='/appointment'>
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="far fa-calendar-check mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	hover:text-gray-800">Online Appointment</p>
                    </div>
                </NavLink>
                <NavLink className="bg-blue-600 py-16 text-center flex justify-center	items-center" to='/doctors'>
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="fas fa-user-md  mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	hover:text-gray-800">Your Physicians</p>
                    </div>
                </NavLink>
                <NavLink className="bg-red-600 py-16 text-center flex justify-center	items-center" to='appointment'>
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="fab fa-amazon-pay  mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	hover:text-gray-800"> Online Payment</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Emergency;