import ClientProfile from "./ClientProfile/ClientProfile";
import Verification from "./Verification/Verification";
import Portfolio from "./UserProfile/components/Portfolio";
import Certification from "./Certification/Certification";

import useBuyer from "../../hooks/useBuyer";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import UserProfile from "./UserProfile/UserProfile";

const ViewProfile = () => {
    const [isBuyer] = useBuyer();
    return (
        <div className="">
            {
                isBuyer ? <CompanyProfile></CompanyProfile> : <UserProfile></UserProfile>
            }
        </div>
    );
};

export default ViewProfile;