export default function CreateStepOne() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
          Board name
        </label>
        <input
          type="text"
          placeholder="e.g. Advanced UI Design"
          className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:border-white/15 dark:bg-transparent dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
          Tagline
        </label>
        <input
          type="text"
          placeholder="Summarise your board in one sentence"
          className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:border-white/15 dark:bg-transparent dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
          Description
        </label>
        <textarea
          rows={4}
          placeholder="Outline the goals of this board so learners know what to expect."
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:border-white/15 dark:bg-transparent dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40"
        />
      </div>
      <div className="grid gap-2 md:max-w-sm">
        <div className="flex items-baseline justify-between gap-3">
          <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
            Board type
          </label>
          <span className="text-xs font-medium text-slate-400 dark:text-white/45">
            Set the vibe for this space
          </span>
        </div>
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm shadow-slate-900/5 transition dark:border-white/15 dark:bg-white/5 dark:shadow-[0_30px_120px_-80px_rgba(34,211,238,0.45)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-focus-within:opacity-100"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(99,102,241,0.18))",
            }}
          />
          <div className="relative flex items-center gap-3">
            <span className="h-10 w-10 shrink-0 rounded-full bg-[#22d3ee]/15 text-[#22d3ee] transition group-focus-within:bg-[#22d3ee]/25 dark:bg-[#22d3ee]/20">
              <span className="flex h-full w-full items-center justify-center text-sm font-semibold leading-none text-[#22d3ee]">
                BT
              </span>
            </span>
            <div className="relative flex-1">
              <select
                defaultValue=""
                className="h-12 w-full appearance-none rounded-xl border border-transparent bg-transparent px-4 text-sm font-semibold text-slate-900 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:text-white dark:focus:ring-[#22d3ee]/40"
              >
                <option value="" disabled>
                  Choose board type
                </option>
                <option value="school">School</option>
                <option value="personal">Personal</option>
                <option value="projects">Projects</option>
                <option value="group">Group</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400 dark:text-white/40">
                ▾
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
