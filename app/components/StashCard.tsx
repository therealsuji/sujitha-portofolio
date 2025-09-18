"use client";

import { StashItem } from "../data/stash";

interface StashCardProps {
  item: StashItem;
  index: number;
}

const StashCard = ({ item, index }: StashCardProps) => {
  const getLanguageColor = (language: string) => {
    switch (language.toLowerCase()) {
      case "typescript":
        return "bg-brutal-green";
      case "javascript":
        return "bg-brutal-yellow";
      case "python":
        return "bg-brutal-purple";
      case "rust":
        return "bg-accent";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="brutal-card p-6 bg-background hover:translate-x-2 hover:translate-y-2 transition-transform max-w-2xl">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-mono uppercase mb-2">
            <span className="text-primary">
              {String(index + 1).padStart(2, "0")}.
            </span>{" "}
            {item.name}
          </h3>
          <p className="font-mono text-sm opacity-80">{item.description}</p>
        </div>
        <span
          className={`${getLanguageColor(
            item.language
          )} text-black px-2 py-1 brutal-border text-xs font-mono`}
        >
          {item.language}
        </span>
      </div>

      {item.codeSnippet && (
        <div className="bg-muted p-4 brutal-border mb-4">
          <code className="font-mono text-xs">
            {item.codeSnippet.code.split("\n").map((line, i) => (
              <div key={i}>
                {line.includes("const") && (
                  <span className="text-secondary">const</span>
                )}
                {line.includes("await") && (
                  <span className="text-primary"> await </span>
                )}
                {line.includes("paginatedQuery") && (
                  <span className="text-accent">paginatedQuery</span>
                )}
                {line.replace(/const|await|paginatedQuery/g, "")}
                {item.codeSnippet &&
                  i < item.codeSnippet?.code.split("\n").length - 1 && <br />}
              </div>
            ))}
          </code>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="font-mono text-xs bg-muted text-foreground px-2 py-1 brutal-border"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {item.links.gist && (
          <a
            href={item.links.gist}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="bg-primary text-primary-foreground px-4 py-2 brutal-border font-mono text-sm uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              VIEW GIST →
            </div>
          </a>
        )}
        {item.links.github && (
          <a
            href={item.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="bg-secondary text-secondary-foreground px-4 py-2 brutal-border font-mono text-sm uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              GITHUB →
            </div>
          </a>
        )}
        {item.links.npm && (
          <a
            href={item.links.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="bg-accent text-accent-foreground px-4 py-2 brutal-border font-mono text-sm uppercase hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
              NPM →
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default StashCard;
