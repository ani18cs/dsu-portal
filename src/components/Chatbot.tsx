"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageCircle, X, RotateCcw, ChevronRight } from "lucide-react";
import { CHAT_NODES, ROOT_FOLLOWUPS } from "@/data/chatData";

interface Message {
  id: string;
  type: "bot" | "user";
  text: string;
  link?: { label: string; href: string };
}

function formatText(text: string) {
  // Convert **bold**, bullet points •, and \n to JSX
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const rendered = parts.map((part, j) =>
      j % 2 === 1 ? <strong key={j} className="font-bold text-[#002366]">{part}</strong> : part
    );
    return (
      <span key={i} className="block leading-relaxed">
        {rendered}
        {i < lines.length - 1 && <br />}
      </span>
    );
  });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      type: "bot",
      text: CHAT_NODES["root"].answer,
    },
  ]);
  const [bubbles, setBubbles] = useState<string[]>(ROOT_FOLLOWUPS);
  const [hasNewMsg, setHasNewMsg] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Show ping after 4s if not opened
  useEffect(() => {
    const t = setTimeout(() => setHasNewMsg(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const handleBubble = (nodeId: string) => {
    const node = CHAT_NODES[nodeId];
    if (!node) return;

    const userMsg: Message = { id: `u-${Date.now()}`, type: "user", text: node.label };
    const botMsg: Message = {
      id: `b-${Date.now()}`,
      type: "bot",
      text: node.answer,
      link: node.link,
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setBubbles(node.followups);
  };

  const reset = () => {
    setMessages([{ id: "init", type: "bot", text: CHAT_NODES["root"].answer }]);
    setBubbles(ROOT_FOLLOWUPS);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {!open && hasNewMsg && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="bg-white text-[#002366] text-sm font-bold px-4 py-2 rounded-2xl shadow-xl border border-blue-100 max-w-[200px] text-right"
            >
              👋 Ask me anything about DSU!
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setOpen(o => !o); setHasNewMsg(false); }}
          className="w-14 h-14 bg-[#002366] text-white rounded-full shadow-2xl flex items-center justify-center relative"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
          {/* Pulse ring */}
          {!open && (
            <span className="absolute inset-0 rounded-full animate-ping bg-[#002366] opacity-20" />
          )}
        </motion.button>
      </div>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] flex flex-col rounded-3xl overflow-hidden shadow-2xl bg-white border border-blue-100"
            style={{ maxHeight: "80vh" }}
          >
            {/* Header */}
            <div className="bg-[#002366] px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-dsu-gold rounded-full flex items-center justify-center text-[#002366] font-black text-sm">
                  D
                </div>
                <div>
                  <p className="text-white font-bold text-sm">DSU Assistant</p>
                  <p className="text-blue-300 text-xs">Dayananda Sagar University</p>
                </div>
              </div>
              <button onClick={reset} title="Restart" className="text-blue-300 hover:text-white transition-colors p-1">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gradient-to-b from-blue-50/30 to-white">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.type === "bot" && (
                    <div className="w-7 h-7 bg-[#002366] rounded-full flex items-center justify-center text-dsu-gold font-black text-xs mr-2 mt-1 shrink-0">D</div>
                  )}
                  <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                    msg.type === "user"
                      ? "bg-[#002366] text-white rounded-tr-sm"
                      : "bg-white border border-blue-50 text-gray-700 rounded-tl-sm"
                  }`}>
                    {msg.type === "user" ? (
                      <span>{msg.text}</span>
                    ) : (
                      <div className="space-y-1">{formatText(msg.text)}</div>
                    )}
                    {msg.link && (
                      <Link
                        href={msg.link.href}
                        onClick={() => setOpen(false)}
                        className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#002366] bg-dsu-gold/10 hover:bg-dsu-gold/20 px-3 py-1.5 rounded-lg transition-colors w-fit"
                      >
                        {msg.link.label} <ChevronRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Bubble Chips */}
            <div className="px-4 py-3 border-t border-blue-50 bg-white shrink-0">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2.5">Choose a topic</p>
              <div className="flex flex-wrap gap-2 max-h-[130px] overflow-y-auto">
                {bubbles.map((nodeId) => {
                  const node = CHAT_NODES[nodeId];
                  if (!node) return null;
                  return (
                    <motion.button
                      key={nodeId}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleBubble(nodeId)}
                      className="text-xs font-bold bg-white border-2 border-[#002366]/10 text-[#002366] px-3 py-1.5 rounded-full hover:bg-[#002366] hover:text-white hover:border-[#002366] transition-all shadow-sm"
                    >
                      {node.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
