import React from 'react';
import EditCompanyProfile from '../../Company/EditCompanyProfile/EditCompanyProfile';
import useBuyer from '../../../../hooks/useBuyer';
import EditEmployeeProfile from '../../Users/EditEmployeeProfile/EditEmployeeProfile';

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