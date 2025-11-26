import { Sparkle } from "lucide-react";

export default async function EmptyBoardHeader() {
  return (
    <header className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.38em] text-teal-600 dark:border-white/10 dark:bg-white/5 dark:text-teal-200/80">
          <Sparkle className="h-3 w-3" />
          Classora
        </span>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold md:text-5xl">
            Your classrooms, organized
          </h1>
          <p className="max-w-xl text-sm text-slate-600 md:text-base dark:text-indigo-100/80">
            Join existing Classora boards to collaborate with your peers or
            launch a new board to lead a fresh cohort. Manage lessons,
            assignments, and conversations from one dashboard.
          </p>
        </div>
      </div>
    </header>
  );
}
