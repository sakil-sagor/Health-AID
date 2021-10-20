import React from 'react';
import useDoctors from '../../../Hooks/useDoctor';
import Doctor from '../Doctor/Doctor';

// doctor category

const AllDoctor = () => {
    const [doctors] = useDoctors();
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2  md:gap-x-8 gap-y-8 ">
            {
                doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
            }
        </div>
    );
};

export default AllDoctor;