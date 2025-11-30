export default function Topbar({ resumeLink }: { resumeLink: string }) {
  const socialItems = [
    {
      name: "linkedin",
      href: "http://in.linkedin.com/in/immanu10",
    },
    {
      name: "github",
      href: "http://github.com/immanu10",
    },
    {
      name: "resume",
      href: resumeLink,
    },
  ];
  return (
    <header className="py-8 ">
      <div>
        <h1 className="font-bold text-2xl">Manoj Kumar</h1>
        <p className="text-sm text-yellow-300 mt-1">
          Software Engineer // Bengaluru, India
        </p>
        <nav className="mt-6 flex gap-6 underline-offset-8 text-sm">
          {socialItems.map((item) => {
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-yellow-300 mr-1 font-bold">{`>`}</span>
                <span className="hover:underline decoration-yellow-900">
                  {item.name}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
