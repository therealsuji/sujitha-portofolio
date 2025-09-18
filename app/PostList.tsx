import { listPosts } from "@/actions/post-actions";
import React from "react";
import { format } from "date-fns";
import Link from "next/link";

const PostList = async () => {
  const posts = await listPosts(void 0);

  if (!posts.data || posts.data.length === 0) {
    return (
      <div className="brutal-card p-8 text-center">
        <p className="font-mono text-xl uppercase">No posts yet</p>
        <p className="font-mono text-sm mt-2 opacity-60">Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {posts.data?.map((post, index) => (
        <Link href={`/posts/${post.slug}`} key={post.id} className="group">
          <article className="brutal-card p-6 bg-background hover:translate-x-2 hover:translate-y-2 transition-transform cursor-pointer">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-sm bg-primary text-primary-foreground px-2 py-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <time className="font-mono text-sm uppercase opacity-60">
                    {format(post.createdAt, "MMM dd, yyyy")}
                  </time>
                </div>
                <h3 className="text-2xl font-display font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                {post.content && (
                  <p className="font-mono text-sm opacity-80 line-clamp-2">
                    {post.content.substring(0, 150)}...
                  </p>
                )}
              </div>
              <div className="font-mono text-2xl text-primary group-hover:translate-x-2 transition-transform">
                →
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default PostList;