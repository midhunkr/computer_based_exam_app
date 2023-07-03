import React, { createContext, useState, ReactNode } from "react";

interface CandidateContextValue {
  candidateName: string;
  setCandidateName: React.Dispatch<React.SetStateAction<string>>;
  candidateRollNumber: string;
  setCandidateRollNumber: React.Dispatch<React.SetStateAction<string>>;
}

export const CandidateContext = createContext<CandidateContextValue>({
  candidateName: "",
  setCandidateName: () => {},
  candidateRollNumber: "",
  setCandidateRollNumber: () => {},
});

const CandidateContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [candidateName, setCandidateName] = useState<string>("Midhun KR");
  const [candidateRollNumber, setCandidateRollNumber] = useState<string>("323434");

  return (
    <CandidateContext.Provider
      value={{
        candidateName,
        setCandidateName,
        candidateRollNumber,
        setCandidateRollNumber,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
};

export default CandidateContextProvider;
