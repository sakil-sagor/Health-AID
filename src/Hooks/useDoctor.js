import React, { useEffect, useState } from 'react';
// hooks for doctor details area 

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctorDb.json')
            .then(response => response.json())
            .then(data => setDoctors(data))
    }, []);
    return [doctors]

}

export default useDoctors;






