import React, { cache } from "react";
import { getPublishedPost } from "@/actions/post-actions";
import PostPreview from "@/components/PostPreview";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

const cachedPost = cache(getPublishedPost);

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await cachedPost(params.slug);

  return {
    title: `${data?.title ?? "Post"} | Sujitha Wijewantha`,
    description: data?.content?.substring(0, 160) ?? "",
  };
}

const ViewPost = async ({ params }: { params: { slug: string } }) => {
  const data = await cachedPost(params["slug"]);

  if (!data) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
          <div className="brutal-card p-8 text-center max-w-md">
            <h1 className="text-4xl font-display brutal-heading mb-4">404</h1>
            <p className="font-mono text-xl mb-6">POST NOT FOUND</p>
            <Link href="/">
              <div className="bg-primary text-primary-foreground px-6 py-3 brutal-border brutal-box-shadow font-mono uppercase tracking-wider inline-block hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all">
                ← BACK HOME
              </div>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-12">
            <Link href="/" className="inline-block mb-6">
              <div className="font-mono text-sm uppercase tracking-wider hover:text-primary transition-colors">
                ← BACK TO HOME
              </div>
            </Link>

            <h1 className="text-4xl md:text-6xl font-display brutal-heading brutal-shadow mb-6">
              {data.title}
            </h1>

            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <span className="bg-brutal-yellow text-black px-3 py-1 brutal-border">
                {new Date(data.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </header>

          {/* Post Content */}
          <div className="brutal-card p-8 md:p-12 bg-background">
            <PostPreview content={data.content} />
          </div>

          {/* Post Footer */}
          <footer className="mt-12 pt-8 border-t-4 border-foreground">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="font-mono text-sm uppercase">
                Written by <span className="font-bold text-primary">Sujitha Wijewantha</span>
              </p>

              <Link href="/#cool-stuff">
                <div className="bg-secondary text-secondary-foreground px-6 py-3 brutal-border brutal-box-shadow font-mono uppercase tracking-wider hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all">
                  MORE POSTS →
                </div>
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
};

export default ViewPost;