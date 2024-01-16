function JobCard({ gig }) {
 
  return (
    <div className="py-10 rounded">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={gig.gigImg}
            alt={gig.gigTitle}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{gig.gigTitle}</h2>
          <p>{gig.gigDesc}</p>
          <p className="font-bold text-orange-300">{gig.gigUsername}</p>
          <div className="card-actions justify-between">
            <button className="btn btn-primary">Order Now</button>
            <button className="btn btn-primary">Contact: {gig.gigOwnerContact}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
