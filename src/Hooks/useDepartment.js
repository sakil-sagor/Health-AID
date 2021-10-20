import React, { useEffect, useState } from 'react';
// hooks for department area 

const useDepartment = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch('./departmentDb.json')
            .then(response => response.json())
            .then(data => setDepartments(data))
    }, []);
    return [departments]

}

export default useDepartment;







