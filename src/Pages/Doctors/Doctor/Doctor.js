import React from 'react';
import { NavLink } from 'react-router-dom';
import img13 from '../../../images/13.jpg'
import './Doctor.css'

const Doctor = (props) => {

    const { id, name, img, category, Degree } = props.doctor;
    return (
        <div className="shadow-2xl grid grid-cols-1 sm:grid-cols-12 md:grid-cols-1 lg:grid-cols-12 gap-2 items-center justify-items-center bg-white pl-6 py-6 rounded">
            <div className="w-32 h-32 mr-6 col-span-4">
                <img className="w-32 h-32 rounded-full" src={img} alt="" />
            </div>
            <div className="col-span-8">
                <h1 className="text-blue-500  text-xl">{name}</h1>

                <h2 className="text-gray-400">{category}</h2>


                <h2 className="my-3">{Degree}</h2>

                <div className="flex pt-4">
                    <NavLink className="transition duration-500 text-blue-500 bg-white hover:bg-blue-500 hover:text-white px-4 py-2 rounded font-semibold  mr-4 d-button " to={`doctors/${id}`}> Profile</NavLink>

                    <NavLink className="transition duration-500 bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:text-blue-500 hover:bg-white mr-4  d-button-solid" to="appointment">Appoinment</NavLink>

                </div>
            </div>

        </div>
    );
};





export default Doctor;












