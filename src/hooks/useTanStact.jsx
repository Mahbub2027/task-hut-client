import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTanStact = () => {
    const axiosPublic = useAxiosPublic();
    // const {data: users= [], refetch} = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async()=>{
    //         const res = await axiosPublic.get('/users')
    //         return res.data;
    //     }
    // })
    // return [users, refetch];
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosPublic.get('/users')
            return result.data;
        }
    })
    return [users, refetch]
};

export default useTanStact;