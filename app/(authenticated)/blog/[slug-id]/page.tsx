import React from "react";
import { getPost } from "../post-actions";
import ClientEditor from "./ClientEditor";

const EditPost = async ({ params }: { params: { "slug-id": string } }) => {
  const { data, serverError } = await getPost({ id: params["slug-id"] });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
      {serverError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {serverError}
        </div>
      )}
      {data && <ClientEditor post={data} />}
    </div>
  );
};

export default EditPost;
