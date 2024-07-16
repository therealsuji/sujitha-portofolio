"use client";

import { Tiptap } from "@/components/tiptap/TipTap";
import { useDebounce } from "@/hooks/useDebounce";
import { useAction } from "next-safe-action/hooks";
import React, { useEffect, useState } from "react";
import {
  isSlugAvailable,
  updatePostContent,
  updatePostTitle,
} from "../post-actions";
import { Post } from "@/lib/schema";
import { Input } from "@/components/ui/Input";
import { toast } from "sonner";

type ClientEditorProps = {
  post: Post;
};

const ClientEditor = ({ post }: ClientEditorProps) => {
  const [updatedContent, setUpdatedContent] = useState(post.content);
  const [updatedTitle, setUpdatedTitle] = useState(post.title);

  const debouncedContent = useDebounce(updatedContent, 300);
  const debouncedTitle = useDebounce(updatedTitle, 300);
  const { execute: executeContent } = useAction(updatePostContent);
  const { executeAsync: executeSlugAvailable } = useAction(isSlugAvailable);
  const { execute: executeTitle } = useAction(updatePostTitle);

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
    <div>
      <Input
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
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
  );
};

export default ClientEditor;
