import { createContext, useContext, useState, type ReactNode } from "react";

type InterviewAiContextProps = {
    role: string;
    summary: string;
    weakAreas: string[];
};

type Props = {
    children: ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
export const InterviewAiContext =
    createContext<InterviewAiContextProps | null>(null);

export const InterviewAiContextProvider = ({ children }: Props) => {
    const [role] = useState("");
    const [summary] = useState("");
    const [weakAreas] = useState<string[]>([]);

    return (
        <InterviewAiContext.Provider
            value={{
                role,
                summary,
                weakAreas,
            }}
        >
            {children}
        </InterviewAiContext.Provider>
    );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useInterview = () => {
    const context = useContext(InterviewAiContext)
    if (!context) throw new Error("useInterview must be used within provider")
    return context
}