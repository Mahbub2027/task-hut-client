import React from 'react';
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useSavedJobs = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();

    const {data: savedJob=[], 
        isPaused: saveJobsPaused, 
        refetch, isLoading: saveJobsLoading} = useQuery({
        enabled: !!user?.email,
        queryKey: ['saveJobs', user?.email],
        queryFn: async () =>{
            if(user?.email){
                const res = await axiosPublic.get(`/saveJobs`)
                return res.data;
            }
            return [];
        }
    })
    return [savedJob, saveJobsPaused, saveJobsLoading, refetch]
};

export default useSavedJobs;