import React, { useState } from 'react';
import EditCompanyProfile from './EditCompanyProfile/EditCompanyProfile';
import useBuyer from '../../../../hooks/useBuyer';
import EditEmployeeProfile from './EditEmployeeProfile/EditEmployeeProfile';

const EditProfile = () => {

    const [isBuyer] = useBuyer();

    return (
        <>
            {
                isBuyer ? <EditCompanyProfile /> : <EditEmployeeProfile />
            }
        </>
    );
};

export default EditProfile;