import axios from "axios";


const axiosPublic = axios.create({
    // baseURL: 'https://tusk-hut-server.vercel.app'
    baseURL: 'https://tusk-hut-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;