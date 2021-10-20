import React from 'react';
import useDepartment from '../../Hooks/useDepartment';
import SingleDepartment from '../Department/SingleDepartment/SingleDepartment';

// shared department for all 

const SingleDepartmentAll = () => {
    const [departments] = useDepartment();
    let numStart = Math.floor(Math.random() * 3) + 1

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 pt-12 px-2">
            {
                departments.slice(numStart, numStart + 3).map(department => <SingleDepartment key={department.id} department={department}></SingleDepartment>)
            }
        </div>
    );
};

export default SingleDepartmentAll;