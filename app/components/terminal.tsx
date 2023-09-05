"use client";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const commands = ["cd", "help", "welcome", "clear"];

const routes = {
  about: "/",
  projects: "/projects",
} as const;

const helpCommand = [
  {
    cmd: "cd <page-name>",
    desc: " eg: cd projects",
  },
  {
    cmd: "welcome",
    desc: "displays welcome message",
  },
  {
    cmd: "help",
    desc: "list of commands",
  },
  {
    cmd: "clear",
    desc: "clear the terminal",
  },
];
export default function Terminal() {
  const [history, setHistory] = useState<string[]>(["welcome"]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const cmdString = value.trim().split(" ");
    if (cmdString[0] === "cd") {
      if (Object.keys(routes).includes(cmdString[1])) {
        const path = cmdString[1] as keyof typeof routes;
        router.push(routes[path]);
      }
    }
    setHistory([...history, value]);
    setValue("");
  };
  const clearTerminal = () => {
    setValue("");
    setHistory([]);
  };

  const scrollToBottom = () => {
    terminalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history.length]);

  return (
    <div className="bg-gray-100 dark:bg-[#1c1c1c] px-2 py-1 rounded-sm text-sm">
      {history.map((data, i) => {
        const cmdString = data.trim().split(" ");
        const isValid = commands.includes(cmdString[0]);
        return (
          <div key={i}>
            <p>
              <span className="text-yellow-500 dark:text-yellow-300">{`-> `}</span>
              <span className="text-pink-500 dark:text-pink-300">{`~ `}</span>
              {data}
            </p>
            {isValid ? (
              <CmdResult
                type={cmdString[0]}
                arg={cmdString[1]}
                clear={clearTerminal}
              />
            ) : data === "" ? null : (
              <p>{`${data}: Command not found`}</p>
            )}
          </div>
        );
      })}
      <div className="flex">
        <p>
          <span className="text-yellow-500 dark:text-yellow-300">{`-> `}</span>
          <span className="text-pink-500 dark:text-pink-300">{`~ `}</span>
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="flex-1 ml-2 border-none outline-none bg-transparent"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
      <div ref={terminalRef} />
    </div>
  );
}

function CmdResult({
  type,
  arg,
  clear,
}: {
  type: string;
  arg: string;
  clear: () => void;
}) {
  if (type === "welcome") {
    return <p>Hi guest, to see the list of commands, type `help`</p>;
  }
  if (type === "help")
    return (
      <div>
        {helpCommand.map((info, i) => (
          <div key={i} className="grid grid-cols-2 gap-1">
            <p>{`'${info.cmd}'`}</p>
            <p>{`- ${info.desc}`}</p>
          </div>
        ))}
      </div>
    );
  if (type === "cd") {
    if (!Object.keys(routes).includes(arg))
      return <p>{`cd: ${arg}: No such page name`}</p>;
  }
  if (type === "clear") {
    clear();
  }
  return null;
}
