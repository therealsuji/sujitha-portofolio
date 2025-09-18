import React from "react";
import { listPosts } from "./post-actions";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import PostCard from "./PostCard";

const PostList = async () => {
  const posts = await listPosts(undefined);

  if (!posts.data) {
    return <div>no posts</div>;
  }

  return (
    <div className="p-6">
      <div className="flex w-full justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link href="/blog/new">
          <Button>New Post</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.data.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};


export default PostList;
