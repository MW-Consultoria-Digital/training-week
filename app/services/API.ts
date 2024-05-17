import { Posts } from "../interfaces/Posts";

export const API = {
  getAllPosts: async (): Promise<Posts[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  },
};
