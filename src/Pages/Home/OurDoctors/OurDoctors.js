import React from 'react';
import { NavLink } from 'react-router-dom';
import useDoctors from '../../../Hooks/useDoctor';
import Doctor from '../../Doctors/Doctor/Doctor';
import SectionTitle from '../../Shared/SectionTitle';
import './OurDoctors.css';

// doctor section for home page 

const OurDoctors = () => {

    const [doctors] = useDoctors();
    let numStart = Math.floor(Math.random() * 9) + 1

    return (
        <div className="py-24 our-doctors-container">
            <div className="container m-auto full-width-all ">
                <SectionTitle color="text-white" title="Our Doctors" content="You will get the best and experienced specialist here."></SectionTitle>
                <div>
                    <div className="grid grid-col-12 md:grid-cols-2 gap-8 px-2 xl:px-0">
                        {
                            doctors.slice(numStart, numStart + 6).map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                        }
                    </div>
                </div>
                <div className="mt-16 text-center ">
                    <NavLink className="rounded-full py-3 px-6 border text-black text-lg font-semibold border-black hover:bg-black hover:text-white transition duration-500 ease-in-out " to="/doctors"> Find more Doctors</NavLink>
                </div>
            </div>
        </div >
    );
};

export default OurDoctors;