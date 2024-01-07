import { Helmet } from "react-helmet";
import useTanStact from "../../hooks/useTanStact";
// import { useEffect, useState } from "react";

function AboutUs() {
    const [users] = useTanStact();
//     const [pagol, setUsers] = useState([]);
//     useEffect(()=>{
//     fetch('/http://localhost:5000/users')
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
            </div>
        </div>
    );
}

export default AboutUs;