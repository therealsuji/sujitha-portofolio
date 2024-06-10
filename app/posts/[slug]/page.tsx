import React from "react";
 import { getPost } from "@/actions/post-actions";
import PostPreview from "@/components/PostPreview";
 
const ViewPost = async ({ params }: { params: { "slug": string } }) => {
  const { data } = await getPost({ slug: params["slug"] });

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

export default ViewPost;
