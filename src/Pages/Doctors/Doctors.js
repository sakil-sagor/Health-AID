import React, { useState } from 'react';
import PageTitle from '../Shared/PageTitle';
import SingleDepartmentAll from '../Shared/SingleDepartmentAll';
import AllDoctor from './DoctorCategory/AllDoctor';
import Anesthesiology from './DoctorCategory/Anesthesiology';
import Cardiology from './DoctorCategory/Cardiology';
import ChildDevelopment from './DoctorCategory/ChildDevelopment';
import Dental from './DoctorCategory/Dental';
import Endocrinology from './DoctorCategory/Endocrinology';
import EntHeadNeck from './DoctorCategory/EntHeadNeck';
import Neurosurgery from './DoctorCategory/Neurosurgery';
import Surgery from './DoctorCategory/Surgery';
import './Doctors.css'
import DoctorsBottom from './DoctorsBottom/DoctorsBottom';

const Doctors = () => {
    const [toggleState, setToggleState] = useState(1);
    const toogleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="bg-blue-100">
            {/* page title  */}
            <div className="doctors-page-banner">
                <div className="full-width-all container m-auto text-white">
                    <PageTitle
                        title="Our Doctors"
                        content="We have the Best and most experienced Doctors team for you."
                    ></PageTitle>
                </div>
            </div>
            {/* doctors area main body  */}
            <div className="full-width-all container m-auto py-16 min-h-screen	">
                <div className="doctors-area-all grid grid-cols-1  sm:grid-cols-12 lg:grid-cols-12 gap-4 ">
                    {/* category tab system area  */}
                    <div className="sm:col-span-4 lg:col-span-2  mt-2 px-2">
                        <div className="bg-white cate-box shadow-2xl rounded-lg">
                            <h3 className="text-center py-2 bg-blue-500 text-white font-semibold text-xl rounded-t-lg">Categories</h3>
                            <ul className="tab-list">
                                <li className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(1)} >All</li>
                                <li className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(2)}>Anesthesiology</li>
                                <li className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(3)}>Cardiology</li>
                                <li className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(4)}>Paediatrician </li>
                                <li className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(5)}>Dental</li>
                                <li className={toggleState === 6 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(6)}>Ent-Head-Neck </li>
                                <li className={toggleState === 7 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(7)}>Endocrinology</li>
                                <li className={toggleState === 8 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(8)}>Neurosurgery</li>
                                <li className={toggleState === 9 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(9)}>Surgery</li>
                            </ul >
                        </div>
                    </div >
                    {/* show doctor list area  */}
                    <div className="tab-content-container sm:col-span-8 lg:col-span-10 transition ease-in  duration-700">
                        <div className={toggleState === 1 ? 'tab-content tab-active-content' : "tab-content"}>
                            <AllDoctor></AllDoctor>
                        </div>
                        <div className={toggleState === 2 ? 'tab-content tab-active-content' : "tab-content"}>
                            <Anesthesiology></Anesthesiology>
                        </div>
                        <div className={toggleState === 3 ? 'tab-content tab-active-content' : "tab-content"}>
                            <Cardiology></Cardiology>
                        </div>
                        <div className={toggleState === 4 ? 'tab-content tab-active-content' : "tab-content"}>
                            <ChildDevelopment></ChildDevelopment>
                        </div>
                        <div className={toggleState === 5 ? 'tab-content tab-active-content' : "tab-content"}>
                            <Dental></Dental>
                        </div>
                        <div className={toggleState === 6 ? 'tab-content tab-active-content' : "tab-content"}>
                            <EntHeadNeck></EntHeadNeck>
                        </div>
                        <div className={toggleState === 7 ? 'tab-content tab-active-content' : "tab-content"}>
                            <Endocrinology></Endocrinology>
                        </div>
                        <div className={toggleState === 8 ? 'tab-content tab-active-content' : "tab-content"}>
                            <Neurosurgery></Neurosurgery>
                        </div>
                        <div className={toggleState === 9 ? 'tab-content tab-active-content' : "tab-content"}>
                            <Surgery></Surgery>
                        </div>
                    </div>
                </div >
            </div>
            {/* most visited department area  */}
            <div className="bg-white px-2">
                <div className="full-width-all container m-auto py-16 bg-white">
                    <h1 className="text-gray-600 font-semibold text-xl">People Who Viewed This Departments Also Viewed</h1>
                    <SingleDepartmentAll></SingleDepartmentAll>
                </div>
            </div>
            {/* Emergency Appoinment area  */}
            <div>
                <DoctorsBottom></DoctorsBottom>
            </div>
        </div>
    );
};

export default Doctors;