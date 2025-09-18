export interface StashItem {
  id: string;
  name: string;
  description: string;
  codeSnippet?: {
    code: string;
    language: string;
  };
  tags: string[];
  links: {
    gist?: string;
    github?: string;
    npm?: string;
  };
  language: string;
}

export const stashItems: StashItem[] = [
  {
    id: "paginated-query",
    name: "PAGINATED QUERY",
    description: "TYPE-SAFE PAGINATION FOR DRIZZLE ORM",
    codeSnippet: {
      code: `const result = await paginatedQuery({
  table: users,
  page: 1,
  limit: 10
});`,
      language: "typescript"
    },
    tags: ["DRIZZLE", "POSTGRESQL", "PAGINATION"],
    links: {
      gist: "https://gist.github.com/therealsuji/622143da6a8ffd5ada1a8c11a12ebcbd"
    },
    language: "TYPESCRIPT"
  }
];