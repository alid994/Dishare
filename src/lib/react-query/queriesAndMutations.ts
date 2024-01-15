import { INewUser } from '@/types';
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { createUserAccount, logInAccount,  } from '../appwrite/api';

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

export const useLoginAccount = () => {
    return useMutation({
        mutationFn: (user: {
            email: string;
        password: string;
        }) => logInAccount(user)
    })
}