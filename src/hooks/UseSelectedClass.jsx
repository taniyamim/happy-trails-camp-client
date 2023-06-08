import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProvider';

const UseSelectedClass = () => {
    const { user } = useContext(AuthContext);
    const {isLoading , isError, data,error} = useQuery({
        queryKey: ['selectedClass' , user?.email],
        queryFn: async ()=>{
            const res =await fetch(`http://localhost:5000/selectedClasses?email=${user.email}`)
            return res.json();
        },
    })
};

export default UseSelectedClass;