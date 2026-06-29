import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const AiChatBox = () => {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef(null);

  // 🔥 AUTO SCROLL
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMsg = message;

    setMessages(prev => [
      ...prev,
      { sender: "user", text: userMsg }
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:6062/api/ai/chat",
        { message: userMsg }
      );

      setMessages(prev => [
        ...prev,
        { sender: "ai", text: res.data.answer }
      ]);

    } catch (err) {
      setMessages(prev => [
        ...prev,
        { sender: "ai", text: "Something went wrong" }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full h-full">

      {/* HEADER */}
      <div className="p-4 border-b font-semibold text-lg text-gray-300">
        AI Assistant 🤖
      </div>

      {/* CHAT AREA */}
      <div
  ref={scrollRef}
  className="flex-1 overflow-y-auto px-6 py-4 space-y-3 bg-gray-50"
>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[75%] px-4 py-2 rounded-xl text-sm whitespace-pre-wrap ${
              msg.sender === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-gray-200 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="text-gray-400 text-sm">
            AI is typing...
          </div>
        )}

      </div>

      {/* INPUT AREA */}
      <div className="p-4 border-t flex gap-2 bg-white">

        <Input
          value={message}
          className="bg-slate-800"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything..."
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />

        <Button onClick={sendMessage} className='text-white bg-red-950'>
          <PaperPlaneIcon/>
        </Button>

      </div>

    </div>
  );
};

export default AiChatBox;