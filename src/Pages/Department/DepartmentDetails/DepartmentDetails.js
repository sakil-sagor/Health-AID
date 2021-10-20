import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AppoinmentFrom from '../../Appointment/AppoinmentFrom/AppoinmentFrom';
import PageTitle from '../../Shared/PageTitle';

const DepartmentDetails = () => {
    const [departDetails, setDepartDetails] = useState([]);
    // DB call 
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sakil-sagor/teacher-data/main/assignment-10/departmentDb.json')
            .then(response => response.json())
            .then(data => setDepartDetails(data))
    }, []);
    // state manege 
    const { departmentrId } = useParams();
    const idNumber = parseInt(departmentrId);
    // mathich data 
    const docResult = departDetails.find(result => result.id === idNumber)
    return (
        <div>
            {/* page title  */}
            <div className="doc-detail-page-banner text-white py-12">
                <PageTitle title={docResult?.name}
                ></PageTitle>
            </div>
            {/* deparment detail main body  */}
            <div className="container full-width-all m-auto">
                <div className="bg-blue-100 py-12 px-8 rounded-3xl mt-16">
                    <div className="grid grid-cols-12 gap-x-8 ">
                        <div className="col-span-5">
                            <img className="rounded-xl" src={docResult?.img} alt="" />
                        </div>
                        <div className="col-span-7">
                            <h1 className="text-2xl font-semibold">{docResult?.name}</h1>
                            <p className="text-gray-500 pt-6">{docResult?.content}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-500"><i class="fas fa-check text-green-600 text-xl mr-2"></i> We conduct a range of tests to help us work out why you're not feeling well and determine the right treatment for you.</p>
                        <p className="text-gray-500"><i class="fas fa-check text-green-600 text-xl mr-2"></i> Our expert doctors, nurses and allied health professionals manage patients with a broad range of medical issues.</p>
                    </div>
                </div>
                <div>
                    <div className="container m-auto full-width-all grid  gap-x-12	 grid-cols-12  justify-between py-8">
                        <div className="col-span-8">
                            <h1 className="text-4xl font-bold text-gray-700 py-8">Overview</h1>
                            <p className="text-gray-900 font-semibold  text-md tracking-wide">{docResult?.content}A {docResult?.name} is specialized with training in diagnosing, treating, and managing disorders of the brain and nervous system including, but not limited to, Alzheimer’s disease, amyotrophic lateral sclerosis (ALS), concussion, epilepsy, migraine, multiple sclerosis, Parkinson’s disease, and stroke.</p>
                            <br />
                            <br />
                            <div>
                                <p className="text-gray-400  text-md tracking-wide">
                                    A child or pediatric, neurologist specializes in the diagnosis and treatment of neurologic disorders in children from the neonatal period through adolescence. Some of the conditions overlap with those seen by adult neurologists, and others are unique to this younger population. Child neurologists treat many of the same common conditions found in adults such as migraine, epilepsy, stroke, and Tourette’s and are also trained in conditions related to neurogenetics and developmental problems.
                                </p>
                            </div>
                            <br />
                            <br />
                            <div>
                                <h1 className="text-4xl font-bold text-gray-700 py-8">Symptoms & Diagnosis</h1>
                                <p className="text-gray-500  text-md tracking-wide">
                                    Neurologists are highly trained clinicians capable of diagnosing complex conditions through detailed history and physical examination, including testing of mental status, vision, speech, strength, sensation, coordination, reflexes, and gait. Even as medicine becomes more dependent on technology, the neurological exam will remain a critical component of the patient evaluation.
                                    <br />
                                    We are different from neurosurgeons as we do not perform brain or spinal cord surgery. However, neurologists and neurosurgeons work closely together for several conditions, sometimes even in the operating room.
                                </p>
                            </div>
                            <br />
                            <br />
                            <div>
                                <h1 className="text-4xl font-bold text-gray-700 py-8">Our Services</h1>
                                <p className="text-gray-500  text-md tracking-wide">
                                    We help create a care plan that addresses your specific condition and we are here to answer all of your questions & acknowledge your concerns. Today the hospital is recognised as a world renowned institution, not only providing outstanding care and treatment, but improving the outcomes.
                                </p>
                            </div>
                            <br />
                            <br />
                            <div>
                                <h1 className="text-4xl font-bold text-gray-700 py-8">Health Tips & Info</h1>
                                <p className="text-gray-500  text-md tracking-wide">
                                    He actively participates in clinical research trials and has been published in peer reviewed journals such as the Journal of the State Medical Society and Baylor University Medical Center’s Proceedings. At Hahnemann Hospital in conjunction with Drexel University, where he received extensive training in coronary as well as peripheral interventions and limb salvage procedures.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-4 ">
                            <div className="bg-blue-200 rounded-lg mt-12 p-6">
                                <i class="fas fa-headset text-pink-700 text-6xl"></i>
                                <h1 className="text-2xl font-bold text-blue-500 py-8">Emergency Cases</h1>
                                <p className="text-gray-500">Please feel welcome to contact our friendly reception staff with any general or medical enquiry call us.</p>
                                <div className="flex items-center justify-start   text-gray-600 py-8 ">
                                    <p><i class="fas fa-phone text-3xl text-pink-700  mr-4"></i></p>
                                    <h3 className="text-lg font-semibold">+8801712365764</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* appoinment from  */}
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

export default DepartmentDetails;