import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css'

// home page banner 

const Banner = () => {
    return (
        <div className=" banner-container">
            <div className="container m-auto px-2 py-12 md:py-20 lg:py-40 full-width-all">
                <div className="slider h-4/5   grid grid grid-cols-12">
                    <div className="col-span-12 md:col-span-8" >
                        <h1 className="text-4xl font-extrabold">Your Doctor,</h1>
                        <br />
                        <h1 className="text-6xl">Your Treatment</h1>
                        <br />
                        <h4 className="text-xl my-10">Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.</h4>
                        <NavLink className="rounded-full py-3 px-5 border text-black text-lg font-semibold border-black hover:bg-black hover:text-white transition duration-500 ease-in-out " to="/doctors"> Find Doctors</NavLink>
                    </div >
                    <div className="col-span-6">
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;