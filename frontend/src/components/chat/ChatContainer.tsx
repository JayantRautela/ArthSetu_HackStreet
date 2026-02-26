import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Namaste! 🙏 I'm your ArthSetu AI assistant. I can help you with tax planning, government schemes, and financial guidance in multiple languages. How can I assist you today?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    const assistantId = (Date.now() + 1).toString();

    const assistantPlaceholder: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);

    try {
      const response = await fetch(
        " https://arthsetu-hackstreet.onrender.com/api/v1/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: text }),
        }
      );

      if (!response.body) return;

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;

        const chunk = decoder.decode(value || new Uint8Array());

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? { ...msg, content: msg.content + chunk }
              : msg
          )
        );
      }
    } catch (error) {
      console.error("Streaming error:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-card flex flex-col h-162.5 overflow-hidden">
      
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
}