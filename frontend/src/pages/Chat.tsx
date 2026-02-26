import { Sparkles } from "lucide-react"
import Navbar from "../components/Navbar"
import ChatContainer from "../components/chat/ChatContainer"


const Chat = () => {
  return (
    <div className="bg-soft min-h-screen px-6 md:px-12 py-8">
      <Navbar />
      <div className="text-center my-12">
        <div className="mx-auto w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center">
          <Sparkles size={36} className="text-orange-500 animate-pulse" />
        </div>

        <h1 className="mt-6 text-4xl font-bold text-primary">
          AI Assistant
        </h1>

        <p className="mt-3 text-muted text-lg">
          Ask me anything about taxes, schemes, and financial planning
        </p>
      </div>

      <ChatContainer />
    </div>
  )
}

export default Chat


