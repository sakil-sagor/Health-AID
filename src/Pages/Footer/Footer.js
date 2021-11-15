import React from 'react';
import { NavLink } from 'react-router-dom';

// footer page 

const Footer = () => {
    return (
        <div className="bg-pink-700 pt-10  ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container full-width-all m-auto pb-8 px-2">
                {/* left section  */}
                <div className="col-sapn- ">
                    <NavLink to="/home">
                        <h1 className="text-4xl font-bold text-white ">Health- <span className="text-blue-500">AID</span> </h1>
                    </NavLink>
                    <p className="py-8 text-white font-semibold">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare.</p>
                    <NavLink className="text-blue-500 font-semibold text-lg uppercase hover:text-white" to="/appointment">Make Appoinment <i class="fas fa-arrow-right ml-1"></i></NavLink>
                </div>
                {/* middle section */}
                <div className="col-sapn-1 ">
                    <div className=" mt-2 text-center">
                        <h3 className="text-center py-2 font-semibold text-xl text-white">Categories</h3>
                        <NavLink to='/doctors'>
                            <ul className="tab-list text-gray-300">
                                <li className="cursor-pointer hover:underline">Anesthesiology</li>
                                <li className="cursor-pointer hover:underline">Cardiology</li>
                                <li className="cursor-pointer hover:underline">Paediatrician </li>
                                <li className="cursor-pointer hover:underline">Dental</li>
                                <li className="cursor-pointer hover:underline">Ent-Head-Neck </li>
                                <li className="cursor-pointer hover:underline">Endocrinology</li>
                                <li className="cursor-pointer hover:underline">Surgery</li>
                                <li className="cursor-pointer hover:underline">Neurosurgery</li>
                            </ul >
                        </NavLink>
                    </div >
                </div>
                {/* middle section  */}
                <div className="col-sapn-6 ">
                    <div className=" mt-2 text-center">
                        <h3 className="text-center py-2 font-semibold text-xl text-white"> Links</h3>
                        <ul className="tab-list text-gray-300">
                            <li className="cursor-pointer hover:underline"><NavLink to="/doctors">Find Doctors</NavLink></li>
                            <li className="cursor-pointer hover:underline"><NavLink to="/departments">All Departments</NavLink></li>
                            <li className="cursor-pointer hover:underline"><NavLink to="/login">Login</NavLink></li>
                            <li className="cursor-pointer hover:underline"><NavLink to="/register">Register</NavLink></li>
                            <li className="cursor-pointer hover:underline"><NavLink to="/aboutUs"> About Us</NavLink></li>
                            <li className="cursor-pointer hover:underline"><NavLink to="/contactUs"> Contact Us</NavLink></li>
                        </ul >
                    </div >
                </div>
                {/* right section  */}
                <div className="col-sapn-12 ">
                    <div className="bg-white border-l-4 border-blue-500 rounded-lg p-4">
                        <i class="fas fa-headset text-pink-700 text-6xl"></i>
                        <h1 className="text-2xl font-bold text-blue-500 py-8">Emergency Cases</h1>
                        <p className="text-gray-500">Please feel welcome to contact our friendly reception staff with any general or medical enquiry call us.</p>
                        <div className="flex items-center justify-start   text-gray-600 py-8 ">
                            <p><i class="fas fa-phone text-3xl text-pink-700  mr-4"></i></p>
                            <h3 className="text-lg font-bold">+8801712 365764</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer bottom  */}
            <div className="bg-gray-900">
                <p className="py-4 text-center text-gray-500">© 2020 DataSoft, All Rights Reserved. With Love by health-aid.com</p>
            </div>
        </div>
    );
};

export default Footer;