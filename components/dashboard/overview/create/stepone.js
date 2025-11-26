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
      {/* <div className="grid gap-2 md:max-w-xs">
        <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
          Timezone
        </label>
        <div className="relative">
          <select
            value={formData.timezone}
            onChange={(event) =>
              handleFieldChange("timezone", event.target.value)
            }
            className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 dark:border-white/15 dark:bg-transparent dark:text-white dark:focus:ring-[#22d3ee]/40"
          >
            {timezoneOptions.map((zone) => (
              <option
                key={zone}
                value={zone}
                className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white"
              >
                {zone}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
            ▾
          </span>
        </div>
      </div> */}
    </div>
  );
}
