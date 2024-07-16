import React, { cache } from "react";
import { cacheablePost } from "@/actions/post-actions";
import PostPreview from "@/components/PostPreview";
import { Metadata } from "next";

const cachedPost = cache(cacheablePost);

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await cachedPost(params.slug);

  return {
    title: `Sujitha | ${data?.title ?? ""}`,
  };
}

const ViewPost = async ({ params }: { params: { slug: string } }) => {
  const data = await cachedPost(params["slug"]);

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
