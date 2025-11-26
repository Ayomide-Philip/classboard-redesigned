import Link from "next/link";
import { Layers, UserPlus, Users, PlusCircle } from "lucide-react";
import EmptyBoardHeader from "./empty/header";
import EmptyBoardCta from "./empty/cta";
import EmptyBoardJoin from "./empty/join";
import EmptyBoardCreate from "./empty/create";

const suggestedBoards = [
  {
    title: "UI Foundations",
    code: "UI-204",
    members: 38,
    focus: "Design Systems",
    accent: "from-[#34d399] via-[#22d3ee] to-[#6366f1]",
  },
  {
    title: "Data Science Cohort",
    code: "DS-312",
    members: 24,
    focus: "Machine Learning",
    accent: "from-[#8b5cf6] via-[#6366f1] to-[#0ea5e9]",
  },
  {
    title: "Product Strategy Guild",
    code: "PS-118",
    members: 41,
    focus: "PM Frameworks",
    accent: "from-[#f97316] via-[#fb7185] to-[#6366f1]",
  },
];
export default function EmptyBoard() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden transition-colors duration-300">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-14 md:px-10">
        <EmptyBoardHeader />
        <EmptyBoardCta />

        <section className="grid gap-6 lg:grid-cols-2">
          <EmptyBoardJoin />
          <EmptyBoardCreate />
        </section>

        <section className="space-y-5 pb-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
              Suggested boards
            </h2>
            <Link
              href="#"
              className="text-sm font-semibold text-slate-600 transition hover:text-slate-800 dark:text-white/70 dark:hover:text-white"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {suggestedBoards.map((board) => (
              <article
                key={board.code}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                <div
                  className={`absolute inset-x-6 top-6 h-1 rounded-full bg-linear-to-r ${board.accent}`}
                />
                <div className="flex items-start justify-between pt-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                      {board.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-indigo-100/70">
                      Focus: {board.focus}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                    <Users className="h-3.5 w-3.5" />
                    {board.members}
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-white/70">
                  Code: {board.code}
                </p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition hover:text-teal-500 dark:text-teal-200/80 dark:hover:text-teal-200">
                  Preview board
                  <Layers className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
