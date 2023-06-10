import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const UseInstructorClass = () => {
    
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {refetch, data: addClass =[]} = useQuery({
        queryKey: ['addClass' , user?.email],
        queryFn: async ()=>{
            const res =await axiosSecure(`/addClass?email=${user.email}`)
            console.log(res);
            return res.data;
        },
    })
    return [addClass , refetch]
};

export default UseInstructorClass;