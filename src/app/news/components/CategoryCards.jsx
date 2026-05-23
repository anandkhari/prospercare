"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Activity,
  HeartHandshake,
  Users,
  Newspaper,
  ShieldCheck,
  Brain,
  HeartPulse,
  Loader2,
} from "lucide-react";

const categoryCards = [
  { id: "all",        name: "All News",                       icon: Newspaper      },
  { id: "activities", name: "Care Home Activities",           icon: Activity       },
  { id: "career",     name: "Healthcare Career Guides",       icon: HeartHandshake },
  { id: "life",       name: "Life in a Care Home",            icon: Users          },
  { id: "cqc",        name: "Care Quality Commission",        icon: ShieldCheck    },
  { id: "lda",        name: "Learning Disability and Autism", icon: Brain          },
  { id: "pbs",        name: "Therapeutical approach and PBS", icon: HeartPulse     },
];

export default function CategoryCards() {
  const [loadingId, setLoadingId] = useState(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
      {categoryCards.map((cat) => {
        const Icon = cat.icon;
        const isLoading = loadingId === cat.id;

        return (
          <Link
            key={cat.id}
            href={`/news/category/${cat.id}`}
            onClick={() => setLoadingId(cat.id)}
          >
            <div
              className={`
                group p-8 rounded-xl border transition-all duration-200
                flex flex-col items-center justify-center gap-4
                cursor-pointer select-none
                active:scale-95
                ${isLoading
                  ? "bg-[#2BB673] border-[#2BB673] text-white shadow-lg shadow-[#2BB673]/20"
                  : "bg-white text-[#2BB673] border-gray-200 hover:border-[#2BB673] hover:shadow-md hover:-translate-y-0.5"
                }
              `}
            >
              {isLoading ? (
                <Loader2 size={40} className="animate-spin" />
              ) : (
                <Icon
                  size={48}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
              )}

              <span className="text-sm font-semibold text-center leading-snug">
                {cat.name}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
