import { Helmet } from "react-helmet";
// import useTanStact from "../../hooks/useTanStact";
import logo from "../../../public/TaskHut.jpg";
import developer from "../../assets/images/developer.jpg";
import WhyTaskHut from "./WhyTaskHut";
import Statistics from "./Statistics";

// import { useEffect, useState } from "react";

function AboutUs() {
  //   const [users] = useTanStact();
  //     const [pagol, setUsers] = useState([]);
  //     useEffect(()=>{
  //     fetch('/http://localhost:5000/users')
  //     .then(res=> res.json())
  //     .then(data=> {
  //       setUsers(data)
  //     })
  //   },[])
  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us || TaskHut</title>
      </Helmet>
      {/* <div className="my-20"> */}
      {/* <h1 className="text-3xl">About Us Page. Welcome {users.length}</h1> */}
      {/* {
    const [users] = useTanStact();
//     const [pagol, setUsers] = useState([]);
//     useEffect(()=>{
//     fetch('/https://tusk-hut-server.vercel.app/users')
//     .then(res=> res.json())
//     .then(data=> {
//       setUsers(data)
//     })
//   },[])
    return (
        <div>
            <Helmet>
                <title>About Us || TaskHut</title>
            </Helmet>
            <div className="my-20">
            <h1 className="text-3xl">About Us Page. Welcome {users.length}</h1>
            {/* {
                pagol.map(pag=> <li key={pag._id}>Name: {pag.name}</li>)
            } */}
      {/* </div> */}

      <h1 className="text-center p-10 font-bold text-5xl">
        About Us -<span className="text-black"> Task</span>
        <span className="text-purple-600">Hut</span>
      </h1>
      {/* <hr/> */}

      <div className="lg:flex items-center justify-evenly p-20">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="text-black">
          <h3 className="text-center">
            <span className="text-5xl font-bold">
              Empowering Global Talent:
            </span>
            <br />
            <span className="text-3xl">
              Unveiling TaskHut`s Mission in the Digital Workspace
            </span>
          </h3>

          <p className="p-12 text-wrap">
            Welcome to TaskHut, where innovation meets opportunity in the
            dynamic realm of remote work. <br /> At TaskHut, we are dedicated to
            revolutionizing the way companies connect with top-tier developers{" "}
            <br />
            from around the world, and how skilled professionals unlock exciting
            remote tasks and jobs.
          </p>
        </div>
      </div>

      <h1 className="text-5xl font-bold text-center">Our Mission</h1>
      <div className="lg:flex items-center justify-evenly p-20">
        <div>
          <p className="text-2xl text-center text-wrap text-black p-12">
            TaskHut was born out of a vision to create a global marketplace that
            seamlessly brings together companies seeking technical expertise and
            talented developers eager to take on exciting challenges. As the
            digital landscape evolves, so does the need for a platform that
            transcends geographical boundaries, fostering collaboration and
            innovation on a truly global scale.
          </p>
        </div>
        <div>
          <img src={developer} alt="" />
        </div>
      </div>

      <h1 className="text-5xl font-bold text-center">Why Us?</h1>
      <div className="items-center justify-center w-1/2 lg:ml-96 mb-10">
        <WhyTaskHut></WhyTaskHut>
      </div>

      <h1 className="text-5xl font-bold text-center">Statistics</h1>
      <div className="lg:flex items-center justify-center p-20">
        <Statistics></Statistics>
      </div>
    </div>
  );
}

export default AboutUs;
