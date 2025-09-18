"use client";

import { Tiptap } from "@/components/tiptap/TipTap";
import { useDebounce } from "@/hooks/useDebounce";
import { useAction } from "next-safe-action/hooks";
import React, { useEffect, useState } from "react";
import {
  isSlugAvailable,
  updatePostContent,
  updatePostTitle,
  togglePostPublished,
} from "../post-actions";
import { Post } from "@/lib/schema";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { toast } from "sonner";
import { Globe, GlobeLock } from "lucide-react";
import { useRouter } from "next/navigation";

type ClientEditorProps = {
  post: Post;
};

const ClientEditor = ({ post }: ClientEditorProps) => {
  const router = useRouter();
  const [updatedContent, setUpdatedContent] = useState(post.content);
  const [updatedTitle, setUpdatedTitle] = useState(post.title);

  const debouncedContent = useDebounce(updatedContent, 300);
  const debouncedTitle = useDebounce(updatedTitle, 300);
  const { execute: executeContent } = useAction(updatePostContent);
  const { executeAsync: executeSlugAvailable } = useAction(isSlugAvailable);
  const { execute: executeTitle } = useAction(updatePostTitle);
  const { execute: executeToggle, isExecuting: isToggling } = useAction(togglePostPublished, {
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

  useEffect(() => {
    if (debouncedContent != post.content) {
      executeContent({ content: debouncedContent, id: post.id });
    }
  }, [debouncedContent, executeContent, post.content, post.id]);

  useEffect(() => {
    if (debouncedTitle != post.title) {
      (async () => {
        const isAvailable = await executeSlugAvailable({
          slug: debouncedTitle,
        });
        console.log(isAvailable);
        
        if (isAvailable.data) {
          executeTitle({ title: debouncedTitle, id: post.id });
          toast.success("Title updated");
        } else {
          toast.error("Title is not available");
        }
      })();
    }
  }, [debouncedTitle, executeTitle, post.id, post.title]);

  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-end">
        <div className="flex-1 space-y-2">
          <label className="text-sm font-medium">Title</label>
          <Input
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </div>
        <Button
          onClick={handleTogglePublished}
          disabled={isToggling}
          variant={post.published ? "default" : "outline"}
          className="flex items-center gap-2"
        >
          {post.published ? <Globe className="h-4 w-4" /> : <GlobeLock className="h-4 w-4" />}
          {post.published ? "Published" : "Unpublished"}
        </Button>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Content</label>
        <div className="border rounded-lg overflow-hidden">
          <Tiptap
            content={post.content}
            withToolbar={true}
            withTaskListExtension={true}
            withLinkExtension={true}
            withCodeBlockLowlightExtension={true}
            withEmojiSuggestion={true}
            withTypographyExtension={true}
            withHexColorsDecorator={true}
            withEmojisReplacer={true}
            onUpdate={setUpdatedContent}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientEditor;
