import { createContext, useContext, useState } from "react";

const InstructionContext = createContext();

export function InstructionWrapper({ children }) {
  const [instructions, setInstructions] = useState([]);
  return (
    <InstructionContext.Provider value={{ instructions, setInstructions }}>
      {children}
    </InstructionContext.Provider>
  );
}

export function useInstructionContext() {
  return useContext(InstructionContext);
}
