import React, { useContext } from 'react';
// import { useQuery } from 'react-query';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePaymentClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: paymentClass = [] } = useQuery(
        ['payments', user?.email],
        async () => {
            const res = await axiosSecure(`/payments?email=${user.email}`);
            return res.data;
        }
    );

    return [paymentClass, refetch];
};

export default usePaymentClass;
