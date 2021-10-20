import React from 'react';

// section title 

const SectionTitle = (props) => {
    const { title, content, color } = props;
    return (
        <div>
            <div className="px-2 lg:px-0 pb-12" >
                <h1 className={`text-4xl md:text-5xl  ${color} `}>{title}</h1>
                <br />
                <hr className="w-12 border-pink-500 border-t-2" />
                <br />
                <h4 className={`text-xl w-full sm:w3/4  ${color} `}>{content}</h4>

            </div >
        </div >
    );
};

export default SectionTitle;



