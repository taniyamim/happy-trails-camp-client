import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const UseSelectedClass = () => {

    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const {refetch, data: selectedClass =[]} = useQuery({
        queryKey: ['selectedClass' , user?.email],
        queryFn: async ()=>{
            const res =await axiosSecure(`/selectedClasses?email=${user.email}`)
            return res.data;
        },
    })
    return [selectedClass , refetch]
};

export default UseSelectedClass;