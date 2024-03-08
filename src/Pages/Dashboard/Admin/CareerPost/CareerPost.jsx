import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";



const CareerPost = () => {
  const axiosPublic = useAxiosPublic();


  const handleAddJobs = async (event) => {
 
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
      responsibility,
    };

    const careerRes = await axiosPublic.post("/careerjobs",newJob)
    if (careerRes.data.insertedId) {
      
      Swal.fire({
          position: "center",
          icon: "success",
          title: "career posted Successfully",
          showConfirmButton: false,
          timer: 1500
      });
  }

  
    // fetch("https://tusk-hut-server.vercel.app/careerjobs", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newJob),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Job Posted Successfully",
    //         icon: "success",
    //         confirmButtonText: "Ok",
    //       });
    //     }
    //   });
  };

  return (
    <div className="bg-indigo-50 p-24">
      <h1 className="text-5xl font-serif text-center font-bold text-indigo-600">
        Post a New Job. <br />Hire Talents for TaskHut.
      </h1>
      <form onSubmit={handleAddJobs}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 m-4">

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

            <label className="input-group">
              <span>Years of Experience</span>
              <input
                type="number"
                name="years_of_experience"
                placeholder="Years Of Experience"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex">
          <div className="form-control md:w-1/2 m-4">

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

            <label className="input-group">
              <span>Salary</span>
              <input
                type="number"
                name="salary"
                placeholder="Salary"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="md:flex">
          <div className="form-control md:w-1/2 m-4">

            <label className="input-group">
              <span>Deadline</span>
              <input
                type="date"
                name="deadline"
                placeholder="Deadline"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 m-4">

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
          <div className="form-control md:w-full m-4">

            <label className="input-group">
              <span>Responsibilities</span>
              <textarea

                type="text"
                name="responsibility"
                placeholder="Responsibilities"
                className="input input-bordered w-full"
              />


            </label>
          </div>
        </div>
        {/* <button
          type="submit"
          className="btn btn-block bg-purple-600 text-white"
        >
          Post The Job
        </button> */}

        <input
          type="submit"
          value="Post"
          className="primary-btn"
        />
      </form>
    </div>
  );
};

export default CareerPost;
