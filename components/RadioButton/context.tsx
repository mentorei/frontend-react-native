import type React from "react";
import { createContext, useState } from "react";

export const Context = createContext<any>({});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [id, setId] = useState<string | number | null>(null);

  const setSelectedId = (id: string | number) => {
    setId(id);
  };

  return (
    <Context.Provider value={{ selectedId: id, setSelectedId }}>
      {children}
    </Context.Provider>
  );
};
