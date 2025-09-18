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
    <div className="prose prose-lg dark:prose-invert max-w-none
      prose-headings:font-display prose-headings:font-bold prose-headings:uppercase
      prose-h1:text-4xl prose-h1:brutal-shadow
      prose-h2:text-3xl prose-h2:text-primary prose-h2:mt-8
      prose-h3:text-2xl prose-h3:text-secondary
      prose-p:font-mono prose-p:leading-relaxed
      prose-a:text-primary prose-a:no-underline prose-a:border-b-2 prose-a:border-primary hover:prose-a:bg-primary hover:prose-a:text-primary-foreground
      prose-strong:text-primary prose-strong:font-bold
      prose-code:bg-muted prose-code:text-foreground prose-code:px-2 prose-code:py-1 prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
      prose-pre:bg-foreground prose-pre:text-background prose-pre:border-4 prose-pre:border-foreground prose-pre:p-0
      prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:font-mono
      prose-ul:list-none prose-ul:pl-0
      prose-li:relative prose-li:pl-6 prose-li:before:content-['→'] prose-li:before:absolute prose-li:before:left-0 prose-li:before:text-primary prose-li:before:font-bold
      prose-img:brutal-border prose-img:brutal-box-shadow"
    >
      {props.title && <h1>{props.title}</h1>}
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
      <ClientHighLight />
    </div>
  );
};

export default PostPreview;