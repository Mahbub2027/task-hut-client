function Statistics() {
  return (
    <div className="stats shadow">
      <div className="stat place-items-center">
        <div className="stat-title">Jobs</div>
        <div className="stat-value">3,100</div>
        <div className="stat-desc">From January 1st to February 1st</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Users</div>
        <div className="stat-value text-secondary">4,200</div>
        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Revenue</div>
        <div className="stat-value">$0.5M</div>
        <div className="stat-desc">↗︎ 90 (14%)</div>
      </div>
    </div>
  );
}

export default Statistics;
