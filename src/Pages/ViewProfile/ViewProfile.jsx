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