import ClientProfile from "./ClientProfile/ClientProfile";
import Verification from "./Verification/Verification";
import TopSkills from "./TopSkills/TopSkills";
import Portfolio from "./Portfolio/Portfolio";
import Reviews from "./Reviews/Reviews";
import Certification from "./Certification/Certification";

const ViewProfile = () => {
    return (
        <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto my-4">
            <div className="col-span-2 space-y-8">
                <ClientProfile></ClientProfile>
                <Portfolio></Portfolio>
                <Reviews></Reviews>
            </div>
            <div className="col-span-1 space-y-4">
                <Verification></Verification>
                <Certification></Certification>
                <TopSkills></TopSkills>
            </div>
        </div>
    );
};

export default ViewProfile;