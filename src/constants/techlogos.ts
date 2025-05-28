import reactLogo from "../assets/tech/react.png";
import tsLogo from "../assets/tech/typescript.png";
import cssLogo from "../assets/tech/css.png";
import viteLogo from "../assets/tech/vite.png";
import fastapiLogo from "../assets/tech/fastapi.png";
import postgresLogo from "../assets/tech/postgresql.png";
import apolloLogo from "../assets/tech/apollo.png";
import tailwindLogo from "../assets/tech/tailwind.png";
import nodeLogo from "../assets/tech/node.png";
import graphqlLogo from "../assets/tech/graphql.png";
import jsLogo from "../assets/tech/javascript.png";

export const techLogos: Record<string, { name: string; icon: string }> = {
  React: { name: "React", icon: reactLogo },
  TypeScript: { name: "TypeScript", icon: tsLogo },
  JavaScript: { name: "JavaScript", icon: jsLogo },
  CSS: { name: "CSS", icon: cssLogo },
  Vite: { name: "Vite", icon: viteLogo },
  FastAPI: { name: "FastAPI", icon: fastapiLogo },
  PostgreSQL: { name: "PostgreSQL", icon: postgresLogo },
  "Apollo Client": { name: "Apollo Client", icon: apolloLogo },
  TailwindCSS: { name: "TailwindCSS", icon: tailwindLogo },
  "Node.js": { name: "Node.js", icon: nodeLogo },
  GraphQL: { name: "GraphQL", icon: graphqlLogo },
};
