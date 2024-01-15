import { INewPost, INewUser } from "@/types";
import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  createPost,
  createUserAccount,
  logInAccount,
  logOutAccount,
} from "../appwrite/api";
import { QUERY_KEYS } from "./QueryKeys";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useLoginAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      logInAccount(user),
  });
};

export const useLogOutAccount = () => {
  return useMutation({
    mutationFn: logOutAccount,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: INewPost) => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
      });
    },
  });
};
