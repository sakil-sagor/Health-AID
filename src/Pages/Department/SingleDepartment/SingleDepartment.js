import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleDepartment = (props) => {
    const { id, name, img } = props.department;
    return (
        <div className="shadow-2xl rounded-lg px-2">
            <div className=" px-2 py-2">
                <img className="rounded-t-lg" src={img} alt="" />
            </div>
            <div className="flex justify-between items-center px-2 py-6">
                <h1 className="text-blue-500 font-bold text-lg">{name}</h1>
                <NavLink className="rounded-full py-2 px-4 border text-blue-600 text-lg font-semibold border-blue-500 hover:bg-blue-500 hover:text-white transition duration-500 ease-in-out " to={`/departments/${id}`}>
                    Read More
                </NavLink>
            </div>

        </div>
    );
};

export default SingleDepartment;