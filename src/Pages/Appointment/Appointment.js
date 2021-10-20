import React from 'react';
import PageTitle from '../Shared/PageTitle';
import SectionTitle from '../Shared/SectionTitle';
import './Appoinment.css'
import AppoinmentFrom from './AppoinmentFrom/AppoinmentFrom';

const Appointment = () => {
    return (
        <div>
            {/* appointment page title  */}
            <div className="appointment-page-banner">
                <div className="full-width-all container m-auto text-white">
                    <PageTitle
                        title="Book An Appointment"
                        content="Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries. "
                    ></PageTitle>
                </div>
            </div>
            {/* appointment main body  */}
            <div className="full-width-all container m-auto py-24">
                <div>
                    <SectionTitle
                        title="Book An Appointment"
                        content="Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure."
                    ></SectionTitle>
                </div>
                {/* appointment form  */}
                <div>
                    <AppoinmentFrom></AppoinmentFrom>
                </div>

            </div>
        </div>
    );
};

export default Appointment;