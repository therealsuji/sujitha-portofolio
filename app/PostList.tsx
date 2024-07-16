import { listPosts } from "@/actions/post-actions";
import React from "react";
import { format } from "date-fns";
import Link from "next/link";
const PostList = async () => {
  const posts = await listPosts(void 0);

  return (
    <div className="mt-8 gap-2 flex flex-col">
      {posts.data?.map((post) => (
        <div className="flex" key={post.id}>
          <Link href={`posts/${post.slug}`}>
            <div>
              <div className="text-xl">{post.title}</div>
              <div className="text-sm text-gray-200">
                {format(post.createdAt, "dd MM yyyy")}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
