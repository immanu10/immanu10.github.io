"use client";

import {
  DndContext,
  useSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  useSensors,
} from "@dnd-kit/core";
import { ThemeProvider } from "next-themes";
import { useState, createContext } from "react";

const defaultCoordinates = {
  x: 0,
  y: 0,
};

export const CordinateContext = createContext(defaultCoordinates);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [coordinate, setCoordinates] = useState(defaultCoordinates);
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DndContext
        sensors={sensors}
        onDragEnd={({ delta }) => {
          setCoordinates(({ x, y }) => {
            return {
              x: x + delta.x,
              y: y + delta.y,
            };
          });
        }}
      >
        <CordinateContext.Provider value={coordinate}>
          {children}
        </CordinateContext.Provider>
      </DndContext>
    </ThemeProvider>
  );
}
