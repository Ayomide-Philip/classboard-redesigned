import { UserPlus, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function EmptyBoardCta() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_40px_160px_-80px_rgba(34,211,238,0.55)]">
      <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#34d399]/10 blur-2xl dark:bg-[#34d399]/20" />
      <div className="pointer-events-none absolute -right-14 top-10 h-36 w-36 rounded-full bg-[#6366f1]/15 blur-3xl dark:bg-[#6366f1]/25" />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-500 dark:text-white/65">
            <span className="h-2 w-2 rounded-full bg-[#34d399]" />
            No boards yet
          </div>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Kickstart your board in seconds
          </h2>
          <p className="max-w-lg text-sm text-slate-600 md:text-base dark:text-indigo-100/80">
            You are moments away from joining a learning space. Use a join code
            shared by your facilitator or launch a new board to invite others.
            All resources, assignments, and discussions stay synced across
            devices.
          </p>
        </div>
        <div className="grid gap-3 md:w-64">
          <Link
            href="/overview/create"
            className="inline-flex h-12 items-center cursor-pointer justify-center gap-2 rounded-full bg-linear-to-r from-[#34d399] via-[#22d3ee] to-[#6366f1] px-6 text-sm font-semibold text-white shadow-md shadow-[#22d3ee]/10 transition hover:-translate-y-px hover:shadow-lg hover:shadow-[#22d3ee]/35 dark:text-slate-900"
          >
            <UserPlus className="h-4 w-4" />
            Join with a code
          </Link>
          <button
            href="#createboard"
            className="inline-flex cursor-pointer h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-6 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-200 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white dark:hover:bg-white/15"
          >
            <PlusCircle className="h-4 w-4" />
            Create a new board
          </button>
        </div>
      </div>
    </section>
  );
}
