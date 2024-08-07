import type { Metadata } from "next";

const API_ENDPOINT = "https://api.github.com/graphql";
const query = `
  query {
    viewer {
      pinnedItems(first: 10) {
        nodes {
          ... on Repository {
            id
            name
            url
            description
          }
        }
      }
    }
  }
`;
type PinnedRepo = {
  data: {
    viewer: {
      pinnedItems: {
        nodes: {
          id: string;
          name: string;
          url: string;
          description: string;
        }[];
      };
    };
  };
};

async function getPinnedProjects() {
  const res = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GH_API_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query: query }),
  });

  return (await res.json()) as PinnedRepo;
}

export const metadata: Metadata = {
  title: "Projects",
  description: "My projects on the internet",
};

const sideProjects = [
  {
    id: 0,
    url: "https://play.google.com/store/apps/details?id=com.immanu10.pong",
    name: "Red Pong",
    description: "A simple 2D arcade pong game made using React native",
    isNew: true,
  },
  {
    id: 1,
    url: "https://www.traveltree.co/",
    name: "traveltree.co",
    description: "Your travel bucketlist and profile made easy.",
    isNew: false,
  },
];
export default async function Page() {
  const { data } = await getPinnedProjects();

  return (
    <ul className="space-y-4">
      {sideProjects.map((repo) => (
        <li key={repo.id}>
          <a
            className="bg-transparent border border-[#ecebeb] hover:border-[#999] dark:border-[#333] hover:dark:bg-[#ffffff05]
            transition-colors
            p-2 flex flex-col space-y-1.5 !no-underline rounded-md"
            rel="noopener noreferrer"
            target="_blank"
            href={repo.url}
          >
            <div className="flex items-center space-x-2">
              <span className="text-sm underline underline-offset-4 text-indigo-600 font-medium">
                {repo.name}
              </span>
              {repo.isNew && (
                <span className="tracking-tighter text-xs font-medium rounded-full px-2 py-0.5 text-black/70 bg-yellow-300 dark:bg-yellow-300/10  dark:text-yellow-300">
                  New
                </span>
              )}
            </div>
            <span className="text-xs text-neutral-500">{repo.description}</span>
          </a>
        </li>
      ))}
      {data?.viewer?.pinnedItems?.nodes.map((repo) => (
        <li key={repo.id}>
          <a
            className="bg-transparent border border-[#ecebeb] hover:border-[#999] dark:border-[#333] hover:dark:bg-[#ffffff05]
            transition-colors
            p-2 flex flex-col space-y-1.5 !no-underline rounded-md"
            rel="noopener noreferrer"
            target="_blank"
            href={repo.url}
          >
            <div>
              <span className="text-sm underline underline-offset-4 text-indigo-600 font-medium">
                {repo.name}
              </span>
            </div>
            <span className="text-xs text-neutral-500">{repo.description}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
