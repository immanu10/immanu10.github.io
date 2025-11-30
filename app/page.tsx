export default function Page() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "React Native",
  ];
  const sideProjects = [
    {
      id: 0,
      url: "https://play.google.com/store/apps/details?id=com.immanu10.pong",
      name: "Red Pong",
      description:
        "A simple 2D arcade pong game made using react native available on play store.",
    },
    {
      id: 1,
      url: "/blog/",
      name: "Blog",
      description:
        "AI powered, fully automated tech blog generator (SSG) built in Go. (generates a new blog every day! - thanks to cron job)",
    },
    {
      id: 2,
      url: "/crafts/",
      name: "Crafts",
      description:
        "[WIP] Collection of UI bits and experiments made using react, tailwindcss and react/motion",
    },
    {
      id: 3,
      url: "https://traveltree.vercel.app/",
      name: "TravelTree",
      description: "Your travel bucketlist and profile made easy.",
    },
  ];

  const experience = [
    {
      id: 0,
      role: "Software Engineer",
      company: "Geekyants",
      companyUrl: "https://geekyants.com",
      duration: "Jul 2022 - Present",
    },
    {
      id: 1,
      role: "Application Developer",
      company: "Accenture",
      companyUrl: "https://accenture.com",
      duration: "Sep 2021 - Jul 2022",
    },
  ];
  return (
    <div className="">
      <div className="py-8">
        <h2 className="tracking-wide">00.About</h2>
        <p className="text-sm mt-4 text-neutral-400">
          Hello. I am a software engineer based in Bengaluru, coding for
          survival with a spark of passion on the side.
          <br /> <br />I specialize in frontend technologies. I enjoy minimal
          design, clean code, and solving complex problems with simple
          solutions.
        </p>
        <div>
          <h3 className="text-sm mt-6 tracking-wide">
            [Languages & Technologies]
          </h3>
          <div className="flex flex-wrap gap-3 mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-sm font-medium rounded-full text-neutral-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-yellow-950/50 py-4">
        <h2 className="tracking-wide">02.Projects</h2>
        <div className="mt-4">
          <ul className="divide-y divide-yellow-950/50">
            {sideProjects.map((repo) => (
              <li key={repo.id} className="py-4">
                <a rel="noopener noreferrer" target="_blank" href={repo.url}>
                  <div className="flex flex-col gap-2">
                    <h3 className=" text-sm underline underline-offset-4 text-yellow-300 font-semibold tracking-wide">
                      {repo.name}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {repo.description}
                    </p>
                  </div>
                </a>
                {repo.name === "Red Pong" ? (
                  <p className="text-sm tracking-wide text-neutral-500 mt-2">
                    You can try the web version here{" "}
                    <a
                      href="/redpong/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-300 font-medium"
                    >
                      /redpong
                    </a>
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-yellow-950/50 py-4">
        <h2 className="tracking-wide">03.Experience</h2>
        <div className=" mt-4">
          <ul className="divide-y divide-yellow-950/50">
            {experience.map((item) => (
              <li key={item.id} className="py-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm font-medium text-neutral-400">
                    <span>{item.role}</span>
                    {"  "}
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline underline-offset-4 font-semibold tracking-wide"
                    >
                      {item.company}
                    </a>
                  </div>
                  <span className="text-sm text-neutral-500">
                    {item.duration}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-yellow-950/50 py-12 text-center text-neutral-700 text-xs">
        © {new Date().getFullYear()} Manoj Kumar.
      </div>
    </div>
  );
}
