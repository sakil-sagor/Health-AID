import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppoinmentFrom from '../../Appointment/AppoinmentFrom/AppoinmentFrom';
import PageTitle from '../../Shared/PageTitle';
import './DoctorDetails.css'

const DoctorDetails = () => {
    const [doctorDetails, setDoctorDetails] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sakil-sagor/teacher-data/main/assignment-10/doctorDb.json')
            .then(response => response.json())
            .then(data => setDoctorDetails(data))
    }, []);

    const { doctorId } = useParams();
    const idNumber = parseInt(doctorId);

    const docResult = doctorDetails.find(result => result.id === idNumber)

    return (
        <div>
            {/* page title area  */}
            <div className="doc-detail-page-banner text-white py-12">
                <PageTitle title={docResult?.name}
                    content={docResult?.category}
                ></PageTitle>
            </div>
            {/* single doctor detail area main body  */}
            <div>
                <div className="container m-auto full-width-all grid  gap-x-12	 grid-cols-12  justify-between py-16 px-2">
                    <div className="col-span-12 md:col-span-5 lg:col-span-4">
                        <div className="text-left bg-blue-200 rounded-lg">
                            <div className="">
                                <img className=" w-full" src={docResult?.img} alt="" />
                            </div>
                            <div className="p-3 text-center ">
                                <div className="border-b-2">
                                    <h1 className="text-xl font-bold text-blue-500 ">{docResult?.name}</h1>
                                    <h2 className="my-3 text-gray-600"> <span className="text-md font-bold">Specialist -</span> {docResult?.Specialty} </h2>
                                    <h2 className="my-3 text-gray-600"> <span className="text-md font-bold ">Degree -</span> {docResult?.Degree} </h2>
                                </div>
                                <div className="flex items-start justify-between  text-gray-600 py-4 border-b-2 px-2">
                                    <p><i className="fas fa-envelope icon-teacher text-3xl pl-5"></i></p>
                                    <h3 className="text-lg"> {docResult?.email}</h3>
                                </div>
                                <div className="flex items-center justify-between   text-gray-600 py-4 border-b-2 px-2">
                                    <p><i class="fas fa-phone text-3xl pl-5"></i></p>
                                    <h3 className="text-lg">{docResult?.phone}</h3>
                                </div>
                                <div className="flex items-center justify-between  text-gray-600 py-4 border-b-2 px-2">
                                    <p><i class="fab fa-skype text-3xl pl-5"></i></p>
                                    <h3 className="text-lg"> {docResult?.skype}</h3>
                                </div>
                                <div className="flex items-center justify-between   text-gray-600 py-4 px-2">
                                    <p><i class="fas fa-link text-3xl pl-5"></i></p>
                                    <h3 className="text-lg"> www.health-aid.com</h3>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-200 rounded-lg mt-12 p-4">
                            <i class="fas fa-headset text-pink-700 text-6xl"></i>
                            <h1 className="text-2xl font-bold text-blue-500 py-8">Emergency Cases</h1>
                            <p className="text-gray-500">Please feel welcome to contact our friendly reception staff with any general or medical enquiry call us.</p>
                            <div className="flex items-center justify-start   text-gray-600 py-8 ">
                                <p><i class="fas fa-phone text-3xl text-pink-700  mr-4"></i></p>
                                <h3 className="text-lg">{docResult?.phone}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-7 lg:col-span-8">
                        <h1 className="text-4xl font-bold text-gray-700 py-8">Biography</h1>
                        <p className="text-gray-500 leading-8 text-md tracking-wide">{docResult?.description}</p>
                        <br />
                        <br />
                        <div>
                            <h1 className="text-4xl font-bold text-gray-700 py-8">Doctor’s Services</h1>
                            <p className="text-gray-500 leading-8 text-md tracking-wide">
                                He actively participates in clinical research trials and has been published in peer reviewed journals such as the Journal of the State Medical Society and Baylor University Medical Center’s Proceedings. At Hahnemann Hospital in conjunction with Drexel University, where he received extensive training in coronary as well as peripheral interventions and limb salvage procedures.
                            </p>
                        </div>
                        <br />
                        <br />
                        <div>
                            <h1 className="text-4xl font-bold text-gray-700 py-8">Awards And Honours</h1>
                            <p className="text-gray-500 leading-8 text-md tracking-wide">
                                Today the hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, but improving the outcomes for all through a comprehensive medical research. For over 20 years, our hospital has touched lives of millions of people, and provide care and treatment for the sickest in our community including rehabilitation and aged care.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-50 py-24">
                    <div className="container m-auto full-width-all ">
                        <div className="text-blue-500 font-bold text-4xl text-center pb-8 "> Make your Appoinment </div>
                        <hr className="w-16 border border-blue-500 mb-12 m-auto" />
                        <AppoinmentFrom></AppoinmentFrom>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;