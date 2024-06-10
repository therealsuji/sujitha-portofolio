import React from "react";
import { getPost } from "../../post-actions";
import PostPreview from "@/components/PostPreview";
 
const PreviewPost = async ({ params }: { params: { "slug-id": string } }) => {
  const { data } = await getPost({ id: params["slug-id"] });

  let formattedContent = data?.content;

  return (
    <>
      {formattedContent && (
        <div className="flex flex-col items-center my-5">
          <PostPreview title={data?.title} content={formattedContent} />
        </div>
      )}
    </>
  );
};

export default PreviewPost;
