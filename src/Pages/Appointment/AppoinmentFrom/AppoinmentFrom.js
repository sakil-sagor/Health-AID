import React from 'react';
import { NavLink } from 'react-router-dom';
import imgd2 from '../../../images/d2.jpg'

const AppoinmentFrom = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-8 px-2">
                {/* appointment left bar */}
                <div className='col-span-12 md:col-span-4'>
                    <div>
                        <img className="w-full" src={imgd2} alt="" />
                    </div>
                    <div className="border-b-2 py-6 flex justify-start  items-center" >
                        <i class="fas fa-phone-alt text-blue-500 text-4xl mr-4"></i>
                        <div className="text-gray-500">
                            <h3>CALL US ANYTIME</h3>
                            <h3>+8801712365764</h3>
                        </div>
                    </div>
                    <div className="border-b-2 py-6 flex justify-start  items-center" >
                        <i class="fas fa-map-marker-alt text-blue-500 text-4xl mr-4"></i>
                        <div className="text-gray-500">
                            <h3> VISIT US ANYTIME</h3>
                            <h3>27/4 NewTola,KishoreGanj,Dhaka</h3>
                        </div>
                    </div>
                    <div className="border-b-2 py-6 flex justify-start  items-center" >
                        <i class="far fa-calendar-check text-blue-500 text-4xl mr-4"></i>
                        <div className="text-gray-500">
                            <NavLink to='/appointment'>
                                <h3 className="cursor-pointer">EMERGENCY APPOINTMENT</h3>
                            </NavLink>
                        </div>

                    </div>
                </div>
                {/* appointment rightbar from  */}
                <div className='col-span-12 md:col-span-8 bg-blue-100 rounded-xl shadow-2xl'>
                    <div className=" p-8 m-auto">
                        <form >
                            <div className="grid sm:grid-cols-2 gap-x-8">
                                <div className="mb-4">
                                    <label htmlFor="name" className="text-gray-500 "> Your Name</label>
                                    <br />
                                    <input type="text" id="name" required className="bg-white py-2 px-2 w-full rounded-2xl mt-2" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="text-gray-500 "> Your Email</label>
                                    <br />
                                    <input type="email" id="email" required className="bg-white py-2 px-2 w-full rounded-2xl mt-2" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="doctor" className="text-gray-500 "> Select Your Doctor</label>
                                <br />
                                <input type="text" id="doctor" required className="bg-white py-2 px-2 w-full rounded-2xl mt-2" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="date" className="text-gray-500 "> Select Appointment Date</label>
                                <br />
                                <input type="date" id="date" required className="bg-white py-2 px-2 w-full rounded-2xl mt-2" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" required className="text-gray-500 "> Your Message</label>
                                <br />
                                <textarea className="bg-white py-2 px-2 w-full rounded-2xl mt-2" name="" id="message" cols="30" rows="4"></textarea>
                            </div>
                            <div className="text-center pt-4">
                                <button className="rounded-full py-2 px-4 border text-blue-600 text-lg font-semibold border-blue-500 hover:bg-blue-500 hover:text-white transition duration-500 ease-in-out " >Book Appointment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentFrom;