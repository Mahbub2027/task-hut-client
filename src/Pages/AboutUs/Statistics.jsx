function Statistics() {

  return (
    <div className="w-full mx-auto text-center">
      <div className="stats shadow-xl bg-indigo-900 w-1/2">
        <div className="stat place-items-center hover:bg-indigo-500">
          <div className="stat-title text-indigo-200">Job Posted</div>
          <div className="stat-value pb-1 text-white">3,100</div>
          <div className="stat-desc text-indigo-200">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center bg-indigo-500">
          <div className="stat-title text-indigo-200">Employees</div>
          <div className="stat-value pb-1 text-white">4,200</div>
          <div className="stat-desc text-indigo-200">Verified Employees</div>
        </div>

        <div className="stat place-items-center hover:bg-indigo-500">
          <div className="stat-title text-indigo-200">Company</div>
          <div className="stat-value pb-1 text-white"> 90 %</div>
          <div className="stat-desc text-indigo-200">Satisfaction Rate </div>
        </div>

        <div className="stat place-items-center hover:bg-indigo-500">
          <div className="stat-title text-indigo-200">Employee</div>
          <div className="stat-value pb-1 text-white">94 %</div>
          <div className="stat-desc text-indigo-200">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
