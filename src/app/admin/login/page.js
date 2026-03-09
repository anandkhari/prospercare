"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Lock, Mail, ShieldCheck, Loader2 } from "lucide-react";

export default function AdminLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {

    e.preventDefault();

    setIsLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Login failed. Please check your credentials.");
      setIsLoading(false);
      return;
    }

    router.push("/admin");

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6ED3A3] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#2BB673] rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md p-1 bg-gradient-to-b from-[#2BB673] to-transparent shadow-xl rounded-lg">

        <div className="bg-white p-10 space-y-8 rounded-lg">

          <div className="text-center space-y-3">

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2BB673]/10">
              <ShieldCheck className="text-[#2BB673] w-8 h-8" />
            </div>

            <h1 className="text-3xl font-bold text-gray-800">
              Prosper Care
              <span className="block text-[#2BB673] text-xl font-semibold">
                Admin Portal
              </span>
            </h1>

            <p className="text-sm text-gray-500">
              Secure access for authorized administrators
            </p>

          </div>

          <form onSubmit={handleLogin} className="space-y-6">

            <div className="space-y-2">

              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Admin Email
              </label>

              <div className="relative group">

                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#2BB673]" />

                <input
                  type="email"
                  required
                  placeholder="admin@prospercare.com"
                  className="w-full border border-gray-200  text-gray-500 bg-gray-50 p-4 pl-12 rounded-md outline-none focus:border-[#2BB673]"
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

            </div>

            <div className="space-y-2">

              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Password
              </label>

              <div className="relative group">

                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#2BB673]" />

                <input
                  type="password"
                  required
                  placeholder="Enter password"
                  className="w-full border border-gray-200 text-gray-600 bg-gray-50 p-4 pl-12 rounded-md outline-none focus:border-[#2BB673]"
                  onChange={(e) => setPassword(e.target.value)}
                />

              </div>

            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 p-3 rounded">
                <p className="text-sm text-red-600 font-medium">{error}</p>
              </div>
            )}

            <button
              disabled={isLoading}
              className="w-full bg-[#2BB673] text-white py-4 font-semibold rounded-md hover:bg-[#239a5f] transition flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Login to Admin Panel"
              )}
            </button>

          </form>

          <div className="text-center text-xs text-gray-400 pt-4 border-t">
            Prosper Care Solutions • Secure Admin System
          </div>

        </div>
      </div>
    </div>
  );
}