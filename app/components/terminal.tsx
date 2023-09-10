"use client";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect, useContext } from "react";
import { useTheme } from "next-themes";
import { useDraggable } from "@dnd-kit/core";
import { CordinateContext } from "../providers";

const commands = ["cd", "help", "welcome", "clear", "theme"];

const routes = {
  about: "/",
  projects: "/projects",
} as const;

const helpCommand = [
  {
    cmd: "cd <page-name>",
    desc: "eg: cd <projects | about>",
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
  {
    cmd: "theme <mode>",
    desc: "eg: theme <dark | light>",
  },
];
export default function Terminal() {
  const [history, setHistory] = useState<string[]>(["welcome"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState("");
  const router = useRouter();
  const { setTheme } = useTheme();
  const coordinate = useContext(CordinateContext);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const cmdString = value.trim().split(" ");
    if (cmdString[0] === "cd") {
      if (Object.keys(routes).includes(cmdString[1])) {
        const path = cmdString[1] as keyof typeof routes;
        router.push(routes[path]);
      }
    }
    if (cmdString[0] === "theme") {
      if (["dark", "light"].includes(cmdString[1])) {
        const theme = cmdString[1];
        setTheme(theme);
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
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (history.length > 1) scrollToBottom();
  }, [history.length]);

  return (
    <div
      ref={setNodeRef}
      className="relative h-60 mb-6 bg-gray-100 dark:bg-[#171717] rounded-md text-sm overflow-hidden flex flex-col"
      onClick={() => inputRef.current?.focus()}
      style={
        {
          top: coordinate.y,
          left: coordinate.x,
          "--translate-x": `${transform?.x ?? 0}px`,
          "--translate-y": `${transform?.y ?? 0}px`,
        } as React.CSSProperties
      }
      {...attributes}
      {...listeners}
    >
      <div className="sticky top-0 left-0 right-0 h-6 bg-zinc-300 dark:bg-[#323232] flex pl-2 ">
        <div className="flex space-x-2 items-center my-auto">
          <div className="h-3 w-3 bg-red-500 rounded-full"></div>
          <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
          <div className="h-3 w-3 bg-green-600 rounded-full"></div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scrollcontainer">
        <div className="px-1 py-1">
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

            <form onSubmit={handleSubmit} className="flex-1 ml-2">
              <input
                type="text"
                className="w-full border-none outline-none bg-transparent"
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                ref={inputRef}
              />
            </form>
          </div>
        </div>
        <div ref={terminalEndRef} />
      </div>
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
      return <p>{`${type} ${arg}: No such page name`}</p>;
  }
  if (type === "theme") {
    if (!["dark", "light"].includes(arg))
      return <p>{`${type} ${arg}: No such theme exists`}</p>;
  }
  if (type === "clear") {
    clear();
  }
  return null;
}
