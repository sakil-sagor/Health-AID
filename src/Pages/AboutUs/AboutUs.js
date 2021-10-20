import React from 'react';
import PageTitle from '../Shared/PageTitle';
import AboutSingleTab from './AboutSingleTab';
import './AboutUs.css'
import d2 from '../../images/d2.jpg'
import d3 from '../../images/d3.jpg'

const AboutUs = () => {
    return (
        <div className="bg-blue-100">

            {/* Page title  */}
            <div className="login-page-banner text-white">
                <PageTitle title="We Provide All Aspects Of Medical Practice For Your Whole Family!"
                    content="Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure."
                ></PageTitle>
            </div>

            {/* About page all section  */}

            <div className="container m-auto full-width-all py-24 px-2">
                <div className=" ">
                    {/* About page section  */}
                    <div className="py-16 shadow-xl  bg-white mb-24 p-4 rounded-lg">
                        <h1 className="text-4xl font-semibold text-blue-500 ">  Health-AID Health Care Center</h1>
                        <p className="text-gray-600 mt-8">Health-AID Health Care Center is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improve the lives of people through utmost service excellence since its inception on 16th December, 2006. Square Hospital is one of the ventures of Square Group which is the top business group of the country.
                            <br />
                            <br />
                            The reputation of Square Hospital is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Thus, Square Hospitals strives to meet patients’ standards through quality healthcare and making a difference in their lives.</p>
                    </div>
                    <div>
                        {/* About page section  */}
                        <div className="shadow-xl  bg-white grid grid-cols-12 gap-4  rounded-lg">
                            <div className="pb-24 pt-16 p-4 col-span-7 ">
                                <h1 className="text-4xl mb-8 font-semibold text-blue-500 ">A Power for Good Health</h1>
                                <p className="text-justify   text-gray-600 ">We believe that free Health Care, more than anything, has the power to break through boundaries and transform lives.
                                    <br />
                                    <br />
                                    Alison is one of the world’s largest free learning platforms for education and skills training. It is a for-profit social enterprise dedicated to making it possible for anyone, to study anything, anywhere, at any time, for free online, at any subject level. Through our mission we are a catalyst for positive social change, creating opportunity, prosperity, and equality for everyone.</p>
                            </div>
                            <div className="col-span-1"></div>
                            <div className="col-span-4 ">
                                <img className="w-full rounded-bl-3xl" src={d3} alt="" />
                            </div>
                        </div>

                        {/* about page props AboutSingle component here */}

                        <div className="my-24">
                            <h1 className="text-4xl mb-8 text-center font-semibold text-blue-500 ">Our Values</h1>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <AboutSingleTab
                                    title="Neurology Clinic"
                                    desc="Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs are called fellowships, and are one to two years."
                                ></AboutSingleTab>
                                <AboutSingleTab
                                    title="Laboratory Analysis"
                                    desc="Analyzing the radon or radon progeny concentrations with passive devices, or the act of calibrating radon or radon progeny measurement devices."
                                ></AboutSingleTab>
                                <AboutSingleTab
                                    title=" Cardiac Clinic"
                                    desc="For people requiring additional follow up, the Cardiac Clinic provides rapid access to professionals specialized in diagnosing and treating heart disease."
                                ></AboutSingleTab>
                                <AboutSingleTab
                                    title="Pathology Clinic"
                                    desc="Pathology is the study of disease, it is the bridge between science and medicine. Also it underpins every aspect of patient care, from diagnostic testing and treatment.  "
                                ></AboutSingleTab>
                            </div>
                        </div>
                        {/* About page bottom area  */}
                        <div className="shadow-xl  bg-white grid grid-cols-12  items-center about-bottom-banner border border-white">
                            <div className="sm:ml-8 pb-24 pt-16 col-span-12 sm:col-span-8 py-4 px-2">
                                <h1 className="text-3xl mb-8 font-semibold text-blue-500 ">
                                    The better we do, the more good we can do.
                                </h1>
                                <p className="text-justify   text-gray-900 ">
                                    Alison was founded in Galway, Ireland, in 2007 and has grown organically to become a major force in free online education and skills training. Today, with more than 20 million learners in 195 countries, Alison is changing how the world learns and up-skills.
                                    <br />
                                    <br />

                                    We are committed to equality and access to education and skills training irrespective of gender, geography, economic status or any other barriers that can so often stunt potential. So we offer a range of free courses that meet the many diverse needs of our learners. The UN declared in Article 26 of the 1946 Declaration of Human Rights that “Education shall be free…”. This statement will always inspire us.
                                    <br />
                                    <br />
                                    Alison was founded by Alison CEO, Mike Feerick. Mike is a businessman, but one with a difference. He believes in social impact, and that you can build a financially successful business focused on meeting a huge global social need, making education and skills training more accessible for everyone. He invites anyone who believes that too, to support the Alison mission.
                                    <br />
                                    <br />
                                    Alison is free of charge to you. But it’s still a business – albeit a socially-focused one. We are a social enterprise making our money through advertising, merchandise, and the sale of Certificates and Diplomas, should a graduate choose to buy one.
                                </p>
                            </div>
                            <div className="sm:col-span-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;