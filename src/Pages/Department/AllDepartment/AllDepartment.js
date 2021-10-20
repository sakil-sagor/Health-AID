import React from 'react';
import useDepartment from '../../../Hooks/useDepartment';
import SingleDepartment from '../SingleDepartment/SingleDepartment';

const AllDepartment = () => {
    const [departments] = useDepartment();
    return (
        <div>
            {/* depart meant area db call  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {
                    departments.map(department => <SingleDepartment key={department.id} department={department}></SingleDepartment>)
                }

            </div>
        </div>
    );
};

export default AllDepartment;