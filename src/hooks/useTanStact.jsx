import { useQuery } from "@tanstack/react-query";

const useTanStact = () => {
    const {data, refetch} = useQuery({
        queryKey: ['stack'],
        queryFn: ()=>{
            fetch('http://localhost:5000/')
            .then((res)=>res.json());
        }
    })
    return [data, refetch];
};

export default useTanStact;