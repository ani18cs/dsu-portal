"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles } from "lucide-react";

export function FloatingConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "ai" | "user" }[]>([
    { text: "Hello! I'm your AI Concierge. How can I help you explore Dayananda Sagar University today?", sender: "ai" },
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: inputVal, sender: "user" }]);
    const currentInput = inputVal;
    setInputVal("");

    // Simulate AI response (AWS Lex placeholder)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: `I can certainly help you with "${currentInput}". Please check out our admissions page or contact the faculty directly for more deep insights!`,
          sender: "ai",
        },
      ]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-dsu-navy p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-dsu-gold/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-dsu-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">DSU AI Concierge</h3>
                  <p className="text-xs text-white/60">Powered by AWS Lex</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-[300px] overflow-y-auto p-4 space-y-4 bg-gray-50 flex flex-col">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.sender === "user"
                      ? "bg-dsu-navy text-white self-end rounded-tr-sm"
                      : "bg-white text-gray-700 border border-gray-100 shadow-sm self-start rounded-tl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form onSubmit={handleSend} className="relative">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-dsu-navy focus:ring-1 focus:ring-dsu-navy transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-dsu-gold text-dsu-navy rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
                >
                  <Send className="w-4 h-4 ml-[2px]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-dsu-navy text-white rounded-full shadow-xl flex items-center justify-center z-50 group border border-white/10"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <Bot className="w-6 h-6 group-hover:text-dsu-gold transition-colors" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dsu-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-dsu-gold"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
