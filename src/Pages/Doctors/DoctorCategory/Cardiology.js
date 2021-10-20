import React from 'react';
import useDoctors from '../../../Hooks/useDoctor';
import Doctor from '../Doctor/Doctor';

// doctors category 

const Cardiology = () => {
    const [doctors] = useDoctors();
    let result = doctors.filter(doctor => doctor.category === "Cardiology")
    return (
        <div className="grid  md:grid-cols-2  md:gap-x-8 gap-y-8 ">
            {
                result.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
            }
        </div>
    );
};

export default Cardiology;