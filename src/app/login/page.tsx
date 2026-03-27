"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Suspense } from "react";

function LoginContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  // Format type nicely (student -> Student Login)
  const loginType = typeParam ? (typeParam.charAt(0).toUpperCase() + typeParam.slice(1)) : "Portal";

  return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
      >
        {/* Header */}
        <div className="bg-dsu-navy p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-dsu-navy via-dsu-navy to-dsu-gold/20" />
          <div className="relative z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-wide.png" alt="DSU Logo" className="h-10 mx-auto mb-6 bg-white p-2 rounded" />
            <h1 className="text-2xl font-serif text-white font-bold tracking-wide">
              {loginType} Login
            </h1>
            <p className="text-white/70 text-sm mt-2">Secure access to the DSU campus network</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">University ID / Reference No.</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-dsu-gold focus:border-transparent transition-all outline-none" 
                  placeholder="e.g. DSU26001" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <Link href="#" className="text-xs text-dsu-gold hover:text-dsu-navy font-medium transition-colors">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="password" 
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-dsu-gold focus:border-transparent transition-all outline-none" 
                  placeholder="Enter your password" 
                />
              </div>
            </div>

            <button type="button" className="w-full bg-dsu-navy hover:bg-dsu-navy/90 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 mt-4 group">
              Sign In Securely
            </button>
          </form>

          <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-dsu-navy transition-colors font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to university portal
            </Link>
          </div>
        </div>
      </motion.div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 pt-32 pb-20">
      <Suspense fallback={<div className="text-dsu-navy font-bold animate-pulse">Loading secure portal...</div>}>
         <LoginContent />
      </Suspense>
    </div>
  );
}
