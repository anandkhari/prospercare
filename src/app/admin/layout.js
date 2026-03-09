"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

import {
  Image as ImageIcon,
  FileText,
  LogOut,
  ChevronRight,
  LayoutDashboard,
  Terminal,
} from "lucide-react";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  const isLoginRoute = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginRoute) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!isMounted) return;

      if (!session) {
        router.replace("/admin/login");
      } else {
        setLoading(false);
      }
    };

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace("/admin/login");
      } else {
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [isLoginRoute, router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  // AUTH LOADING
  if (loading && !isLoginRoute) {
    return (
      <div className="min-h-screen bg-[#03a696] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-2 border-[#26C6DA]/20 border-t-[#26C6DA] rounded-full animate-spin mb-4" />
        <span className="text-[10px] font-black text-[#26C6DA] uppercase tracking-[0.5em] animate-pulse">
          Authenticating_Session
        </span>
      </div>
    );
  }

  // LOGIN PAGE
  if (isLoginRoute) return <>{children}</>;

  return (
    <div className="flex h-screen text-white overflow-hidden">
      {/* SIDEBAR */}
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col relative z-20">
        {/* BRANDING */}
        <div className="p-8 border-b border-gray-100">
          <div className="flex items-center gap-3">
            {/* LOGO */}
            <img
              src="/logo.png"
              alt="Prosper Haven"
              className="w-50 h-50 object-contain"
            />
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-4 py-8 space-y-2">
        
          <NavLink
            href="/admin/gallery"
            icon={<ImageIcon size={18} />}
            label="Gallery"
            active={pathname === "/admin/gallery"}
          />

          <NavLink
            href="/admin/blogs"
            icon={<FileText size={18} />}
            label="Blog Articles"
            active={pathname === "/admin/blogs"}
          />
        </nav>

        {/* FOOTER */}
        <div className="p-6 border-t border-gray-100">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition-colors w-full"
          >
            <LogOut size={18} />

            <span className="text-sm font-medium">Sign Out</span>
          </button>

          <div className="mt-6 text-xs text-gray-400 flex justify-between">
            <span>Prosper Haven CMS</span>

            <span>v1.0</span>
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 flex bg-[#F6FBF8] flex-col relative overflow-hidden">
        <div className="flex-1 overflow-auto p-10">{children}</div>
      </main>
    </div>
  );
}

/* NAV LINK COMPONENT */

function NavLink({ href, icon, label, active }) {
  return (
    <Link
      href={href}
      className={`
        flex items-center justify-between px-4 py-3 rounded-lg transition-all
        ${
          active
            ? "bg-[#2BB673] text-white shadow-sm"
            : "text-gray-600 hover:bg-[#F6FBF8] hover:text-[#2BB673]"
        }
      `}
    >
      <div className="flex items-center gap-3">

        <span
          className={`${
            active ? "text-white" : "text-[#2BB673]"
          }`}
        >
          {icon}
        </span>

        <span className="text-sm font-medium">
          {label}
        </span>

      </div>

      {active && (
        <ChevronRight size={16} className="text-white" />
      )}
    </Link>
  );
}
