"use client";

import { motion } from "framer-motion";
import { Bot, ChartNoAxesCombined, Code2, Database, ShieldCheck } from "lucide-react";

const orbitNodes = [
  {
    label: "Web",
    icon: Code2,
    className: "left-1/2 top-0 -translate-x-1/2",
  },
  {
    label: "AI",
    icon: Bot,
    className: "right-[4%] top-[24%]",
  },
  {
    label: "Growth",
    icon: ChartNoAxesCombined,
    className: "right-[12%] bottom-[10%]",
  },
  {
    label: "CRM",
    icon: Database,
    className: "bottom-[10%] left-[12%]",
  },
  {
    label: "Security",
    icon: ShieldCheck,
    className: "top-[24%] left-[4%]",
  },
];

export function DigitalOrbit() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[620px] items-center justify-center">
      <div className="absolute size-[72%] rounded-full border border-emerald-500/20 bg-emerald-500/[0.03] shadow-[0_0_80px_rgba(16,185,129,0.12)]" />
      <div className="absolute size-[92%] rounded-full border border-dashed border-zinc-300/70" />
      <div className="absolute size-[58%] rounded-full border border-zinc-200/80" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        className="absolute inset-[4%]"
      >
        {orbitNodes.map(({ label, icon: Icon, className }) => (
          <div key={label} className={`absolute ${className}`}>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-3 py-2 text-xs font-semibold text-zinc-700 shadow-lg shadow-zinc-900/5 backdrop-blur"
            >
              <Icon className="size-4 text-emerald-600" />
              {label}
            </motion.div>
          </div>
        ))}
      </motion.div>

      <div className="relative z-10 flex size-36 flex-col items-center justify-center rounded-full border border-emerald-500/30 bg-zinc-950 text-center text-white shadow-[0_0_70px_rgba(16,185,129,0.25)] sm:size-44">
        <span className="text-xl font-semibold tracking-tight sm:text-2xl">
          petruco
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.24em] text-emerald-300">
          digital
        </span>
      </div>
    </div>
  );
}
