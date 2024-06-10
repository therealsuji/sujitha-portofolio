"use client";
import dynamic from "next/dynamic";
const ClientHighLight = dynamic(() => import("./ClientHighLight"), {
  ssr: false,
});

type PostPreviewProps = {
  content: string;
  title?: string;
};

const PostPreview = (props: PostPreviewProps) => {
  return (
    <div className="prose dark:prose-invert prose-pre:p-0">
      {props.title && <h1>{props.title}</h1>}
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
      <ClientHighLight />
    </div>
  );
};

export default PostPreview;
