import Swal from "sweetalert2";

const handleAddJobs = event =>{
  event.preventDefault();
  const form = event.target;

  const title = form.title.value;
  const years_of_experience = form.years_of_experience.value;
  const location = form.location.value;
  const salary = form.salary.value;
  const deadline = form.deadline.value;
  const skills = form.skills.value;
  const responsibility = form.responsibility.value;

  const newJob = {
      title,
      years_of_experience,
      location,
      salary,
      deadline,
      skills,
      responsibility
  }


  fetch('https://tusk-hut-server.vercel.app/careerjobs',{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(newJob)
  })
  .then(res=>res.json())
  .then(data=>{
      if(data.insertedId){
          Swal.fire({
              title: 'Success!',
              text: 'Job Added Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
      }
  })
}



const CareerPost = () => {
  return (
    <div className="bg-purple-50 p-24">
      <h1 className="text-5xl font-serif text-center font-bold text-purple-600">
        Add a New Job
      </h1>
      <form onSubmit={handleAddJobs}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <label className="input-group">
              <span>Title</span>
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Years of Experience</span>
            </label>
            <label className="input-group">
              <span>Years of Experience</span>
              <input
                type="text"
                name="years_of_experience"
                placeholder="Years Of Experience"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex">
          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <label className="input-group">
              <span>Location</span>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Salary</span>
            </label>
            <label className="input-group">
              <span>Salary</span>
              <input
                type="text"
                name="salary"
                placeholder="Salary"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex">
          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <label className="input-group">
              <span>Deadline</span>
              <input
                type="text"
                name="deadline"
                placeholder="Deadline"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Skills</span>
            </label>
            <label className="input-group">
              <span>Skills</span>
              <input
                type="text"
                name="skills"
                placeholder="Skills"
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>

        <div className="md:flex">
          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Responsibilities</span>
            </label>
            <label className="input-group">
              <span>Responsibilities</span>
              <input
                type="text"
                name="responsibility"
                placeholder="Responsibilities"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          

        </div>
        
        <input type="submit" value="Post" className="btn btn-block bg-purple-600 text-white" />

      </form>
    </div>
  )
}

export default CareerPost;


