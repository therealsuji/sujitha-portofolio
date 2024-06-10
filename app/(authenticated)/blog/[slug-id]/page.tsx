import React from "react";
import { getPost } from "../post-actions";
import ClientEditor from "./ClientEditor";

const EditPost = async ({ params }: { params: { "slug-id": string } }) => {
  const { data, serverError } = await getPost({ id: params["slug-id"] });

  return (
    <>
      <h1>Edit Post</h1>
      {serverError && <div>{serverError}</div>}
      {data && (
        <>
          <ClientEditor post={data} />
        </>
      )}
    </>
  );
};

export default EditPost;
