function Statistics() {

  return (
    <div className="w-full text-center">
      <div className="shadow-xl bg-indigo-900 flex flex-col md:flex-row w-full">
        <div className="hover:bg-indigo-500 w-full p-4 md:p-8">
          <div className="text-xs md:text-sm text-indigo-200">Job Posted</div>
          <div className="text-3xl md:text-5xl font-bold pb-1 text-white">3,100</div>
          <div className="text-xs md:text-sm text-indigo-200">From January 1st to February 1st</div>
        </div>

        <div className="bg-indigo-500 w-full p-4 md:p-8">
          <div className="text-xs md:text-sm text-indigo-200">Employees</div>
          <div className="text-3xl md:text-5xl font-bold pb-1 text-white">4,200</div>
          <div className="text-xs md:text-sm text-indigo-200">Verified Employees</div>
        </div>

        <div className="hover:bg-indigo-500 w-full p-4 md:p-8">
          <div className="text-xs md:text-sm text-indigo-200">Company</div>
          <div className="text-3xl md:text-5xl font-bold pb-1 text-white"> 90 %</div>
          <div className="text-xs md:text-sm text-indigo-200">Satisfaction Rate </div>
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
