import { API } from "@/app/services/API";
import React from "react";
import { Post } from "./Post";

export const Posts = async () => {
  const data = await API.getAllPosts();
  return (
    <section className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-x-6">
      {data.map((post, index) => (
        <Post
          key={`${post.title}-${index}`}
          title={post.title}
          body={post.body}
        />
      ))}
    </section>
  );
};
