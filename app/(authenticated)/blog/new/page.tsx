"use client";

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useStateAction } from "next-safe-action/hooks";
import React from "react";
import { createPost } from "../post-actions";
import { getFirstZodError } from "@/lib/action-utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

const NewPost = () => {
  const router = useRouter();
  const { execute } = useStateAction(createPost, {
    onError: (e) => {
      if ("serverError" in e.error) {
        toast.error(e.error.serverError);
      } else {
        const error = getFirstZodError(e.error.validationErrors);
        if (error) {
          toast.error(error);
        }
      }
    },
    onSuccess: (data) => {
      if (data.data.id) {
        router.push(`/blog/${data.data.id}`);
      } else {
        toast.error("Failed to create Post");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call your execute function here with the form data
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          execute(new FormData(e.currentTarget));
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="Enter post title" />
        </div>
        <Button size={"default"} type="submit" className="w-full">
          Create Post
        </Button>
      </form>
    </div>
  );
};

export default NewPost;
