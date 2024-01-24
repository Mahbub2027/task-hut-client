import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useBuyer = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isBuyer} = useQuery({
        queryKey: ['isBuyer', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/buyer/${user.email}`);
            console.log(res.data)
            return res.data?.buyer;
        }
    })
    return [isBuyer];
};

export default useBuyer;