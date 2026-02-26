import { Bot, User } from "lucide-react";
import type { Message } from "./ChatContainer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


interface Props {
  message: Message;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-4 ${isUser ? "justify-end" : ""}`}>

      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white">
          <Bot size={18} />
        </div>
      )}

      <div
        className={`max-w-xl rounded-2xl px-6 py-4 text-sm leading-relaxed shadow-sm ${
          isUser
            ? "bg-gray-200 text-gray-800 rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none"
        }`}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {message.content}
        </ReactMarkdown>
      </div>

      {isUser && (
        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
          <User size={18} />
        </div>
      )}
    </div>
  );
}