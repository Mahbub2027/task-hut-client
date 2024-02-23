
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
function Statistics() {

    const axiosPublic = useAxiosPublic();
    const [company, setCompany] = useState([]);
    const [employee,setEmployee]=useState([])
    const [jobs,setJobs]=useState([])

    useEffect(() => {
        axiosPublic.get('/companies')
            .then(res => {
                setCompany(res.data);
            })
            axiosPublic.get('/employees')
            .then(res => {
                setEmployee(res.data);
            })
            axiosPublic.get('/jobs')
            .then(res => {
                setJobs(res.data);
            })
    }, [axiosPublic])


  
  return (
    <div className="w-full text-center">
      <div className="shadow-xl bg-indigo-900 flex flex-col md:flex-row w-full">
        <div className="hover:bg-indigo-500 w-full p-4 md:p-8">
          <div className="text-xs md:text-sm text-indigo-200">Job Posted</div>
          <div className="text-3xl md:text-5xl font-bold pb-1 text-white">{jobs.length}</div>
          <div className="text-xs md:text-sm text-indigo-200">From January 1st to February 1st</div>
        </div>

        <div className="bg-indigo-500 w-full p-4 md:p-8">
          <div className="text-xs md:text-sm text-indigo-200">Employees</div>
          <div className="text-3xl md:text-5xl font-bold pb-1 text-white">{employee.length}</div>
          <div className="text-xs md:text-sm text-indigo-200">Verified Employees</div>
        </div>

        <div className="hover:bg-indigo-500 w-full p-4 md:p-8">
          <div className="text-xs md:text-sm text-indigo-200">Company Profiles</div>
          <div className="text-3xl md:text-5xl font-bold pb-1 text-white">{company.length}</div>
          <div className="text-xs md:text-sm text-indigo-200"> </div>
        </div>

        <div className="hover:bg-indigo-500 w-full p-4 md:p-8">
          <div className="text-xs md:text-sm text-indigo-200">Employee</div>
          <div className="text-3xl md:text-5xl font-bold pb-1 text-white">94 %</div>
          <div className="text-xs md:text-sm text-indigo-200">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
