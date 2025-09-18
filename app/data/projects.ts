export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  techStack: string[];
  tags: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  language: string;
}

export const projects: Project[] = [
  {
    id: "rn-upgrader-mcp",
    name: "RN UPGRADER MCP",
    description: "MCP SERVER FOR REACT NATIVE UPGRADES",
    longDescription: "Model Context Protocol server that helps with React Native version upgrades by providing structured upgrade guidance and compatibility checks.",
    techStack: ["TypeScript", "MCP Protocol", "Node.js"],
    tags: ["MCP", "REACT NATIVE", "CLI TOOL"],
    links: {
      github: "https://github.com/therealsuji/rn-upgrader-mcp"
    },
    language: "TYPESCRIPT"
  }
];