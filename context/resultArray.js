import { createContext, useContext, useState } from "react";

const ResultContext = createContext();

export function ResultWrapper({ children }) {
  const [resultArray, setResultArray] = useState([]);

  return (
    <ResultContext.Provider value={{ resultArray, setResultArray }}>
      {children}
    </ResultContext.Provider>
  );
}

export function useResultContext() {
  return useContext(ResultContext);
}
