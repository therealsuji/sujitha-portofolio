import React from "react";
import { getPost } from "../../post-actions";
import PostPreview from "@/components/PostPreview";

const PreviewPost = async ({ params }: { params: { "slug-id": string } }) => {
  const { data } = await getPost({ id: params["slug-id"] });

  let formattedContent = data?.content;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Preview Post</h1>
        <p className="text-sm text-gray-500 mt-1">This is how it will look on the public site</p>
      </div>
      {formattedContent ? (
        <article className="brutal-card p-8 md:p-12 bg-background">
          <header className="mb-8">
            <h1 className="text-4xl md:text-6xl font-display brutal-heading brutal-shadow mb-6">
              {data?.title}
            </h1>
          </header>
          <PostPreview content={formattedContent} />
        </article>
      ) : (
        <div className="text-gray-500">No content to preview</div>
      )}
    </div>
  );
};

export default PreviewPost;
