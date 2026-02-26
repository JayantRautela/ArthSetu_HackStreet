import { Send } from "lucide-react";
import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="border-t p-6 bg-white">

      <div className="flex gap-4 items-center">

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder="Ask me anything about taxes, schemes, or financial planning... (Press Enter to send)"
          className="flex-1 resize-none bg-gray-100 focus:bg-white border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl px-5 py-3 outline-none transition-all h-14"
        />

        <button
          onClick={handleSubmit}
          className="bg-orange-400 cursor-pointer hover:bg-orange-500 text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-md transition"
        >
          <Send size={18} />
          Send
        </button>
      </div>

      <div className="flex justify-between text-xs text-muted mt-3">
        <span>💡 Tip: Press Enter to send, Shift + Enter for new line</span>
        <span>Powered by ArthSetu</span>
      </div>
    </div>
  );
}