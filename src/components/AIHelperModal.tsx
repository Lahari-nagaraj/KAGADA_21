import React, { useState, useCallback } from "react";
import { Sparkles, X, Loader } from "lucide-react";
import { generateContent } from "../services/geminiService";

// 1. Define an interface for the component's props for type safety.
interface AIHelperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIHelperModal: React.FC<AIHelperModalProps> = ({ isOpen, onClose }) => {
  // 2. Add explicit types for state variables.
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleGenerate = useCallback(async () => {
    if (!query) {
      setError("Please enter a question.");
      return;
    }
    setLoading(true);
    setError("");
    setResult("");

    try {
      const responseText = await generateContent(query);
      setResult(responseText);
    } catch (err: unknown) {
      // 3. Type the caught error as 'unknown' for safe handling.
      setError(
        err instanceof Error ? err.message : "An unknown error occurred."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-fade-in-up p-4">
      <div className="relative w-11/12 max-w-2xl p-6 sm:p-8 text-left blueprint-card-light font-roboto-mono text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <h3 className="font-rajdhani text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Ask AI Assistant
        </h3>
        <p className="text-slate-600 mb-4 text-sm sm:text-base">
          Have a question about KAGADA 2025? Our AI can help.
        </p>
        <textarea
          value={query}
          // 4. Type the event parameter for the onChange handler.
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setQuery(e.target.value)
          }
          placeholder="e.g., Who can participate?"
          className="w-full p-3 border-2 border-blue-600/20 rounded-md bg-white/70 focus:outline-none focus:border-blue-600 text-slate-800 text-base"
          rows={3}
        />
        <div className="text-xs text-slate-500 mt-2">
          Example questions: "When is the event?", "What are the prizes?", "How
          do I register?"
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading || !query}
          className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md text-base mt-3 flex items-center justify-center
                     hover:bg-blue-500 transition-all duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader className="animate-spin mr-2" />
          ) : (
            <Sparkles className="mr-2" size={16} />
          )}
          {loading ? "Thinking..." : "Get Answer"}
        </button>
        {error && <p className="text-red-600 mt-4">{error}</p>}
        {result && (
          <div className="mt-4 p-4 bg-black/5 rounded-md border border-blue-600/20 text-slate-800 whitespace-pre-wrap">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

// Memoization works the same way in TypeScript.
export default React.memo(AIHelperModal);
