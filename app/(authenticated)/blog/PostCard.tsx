"use client";

import { Post } from "@/lib/schema";
import Link from "next/link";
import { EyeIcon, PenIcon, Globe, GlobeLock } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { togglePostPublished } from "./post-actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const PostCard = (post: Post) => {
  const router = useRouter();
  const { execute: executeToggle, isPending } = useAction(togglePostPublished, {
    onSuccess: (data) => {
      toast.success(data.data ? "Post published" : "Post unpublished");
      router.refresh();
    },
    onError: () => {
      toast.error("Failed to toggle publish status");
    }
  });

  const handleTogglePublished = () => {
    executeToggle({ id: post.id });
  };

  return (
    <div className="h-40 bg-blue-950 rounded-md flex flex-col justify-between p-4 hover:bg-blue-900 transition-colors">
      <div>
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-white font-medium line-clamp-2 flex-1">{post.title}</h2>
          <button
            onClick={handleTogglePublished}
            disabled={isPending}
            className={`ml-2 p-1 rounded transition-colors ${
              post.published
                ? "text-green-400 hover:text-green-300"
                : "text-gray-400 hover:text-gray-300"
            } ${isPending ? "opacity-50" : ""}`}
            title={post.published ? "Published - Click to unpublish" : "Unpublished - Click to publish"}
          >
            {post.published ? <Globe className="h-4 w-4" /> : <GlobeLock className="h-4 w-4" />}
          </button>
        </div>
        <p className="text-blue-200 text-sm">
          {post.updatedAt ? new Date(post.updatedAt).toLocaleDateString() : 'No date'}
        </p>
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <Link href={`/blog/${post.id}`} className="text-blue-200 hover:text-white transition-colors">
          <PenIcon className="h-5 w-5" />
        </Link>
        <Link href={`/blog/preview/${post.id}`} className="text-blue-200 hover:text-white transition-colors">
          <EyeIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;