import React from "react";
import { listPosts } from "./post-actions";
import { Post } from "@/lib/schema";
import Link from "next/link";
import { EyeIcon, PenIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

const PostList = async () => {
  const posts = await listPosts(undefined);

  if (!posts.data) {
    return <div>no posts</div>;
  }

  return (
    <div className="px-4 py-4">
      <div className="flex w-full justify-end">
        <Link href="/blog/new">
          <Button>New</Button>
        </Link>
      </div>
      <div className="grid grid-cols-5 px-5 py-5">
        {posts.data.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

const PostCard = (post: Post) => {
  return (
    <div className="h-40 bg-blue-950 rounded-md flex flex-col justify-between">
      <h1 className="py-2 px-4">{post.title}</h1>
      <div className="flex justify-end px-4 pb-4 gap-3">
        <Link href={`/blog/${post.id}`}>
          <PenIcon className="h-6 w-6" />
        </Link>
        <Link href={`/blog/preview/${post.id}`}>
          <EyeIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default PostList;
