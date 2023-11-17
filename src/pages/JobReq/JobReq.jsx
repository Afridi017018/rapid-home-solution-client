import React from 'react';
import ApplyJob from '../../components/ApplyJob/ApplyJob';
import JobStatus from '../../components/JobStatus/JobStatus';

const JobReq = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 my-10 px-5 lg:px-20'>
            <ApplyJob />
            <JobStatus />
        </div>
    );
};

export default JobReq;