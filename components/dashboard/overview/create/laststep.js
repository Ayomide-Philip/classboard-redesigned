/* eslint-disable @next/next/no-img-element */

export default function LastStep({ formData }) {
  return (
    <div className="grid gap-6">
      <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Summary
        </h2>

        <div className="mt-4 grid gap-6 text-sm text-slate-600 dark:text-white/70">
          <section className="grid gap-1">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/35">
              Basics
            </p>
            <p className="text-base font-semibold text-slate-900 dark:text-white">
              {formData.name?.trim() || "(No name yet)"}
            </p>
            <p>{formData.tagline?.trim() || "No tagline provided."}</p>
            <p className="text-xs text-slate-500 dark:text-white/45">
              {formData.description?.trim() || "No description yet."}
            </p>
          </section>

          <section className="grid gap-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/35">
              Structure
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-white/60">
                {formData.boardType || "No type selected"}
              </span>
              {formData.school ? (
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-white/50">
                  {formData.school.logo ? (
                    <img
                      src={formData.school.logo}
                      alt={`${formData.school.name} logo`}
                      className="h-8 w-8 rounded-full border border-slate-200 object-contain dark:border-white/10"
                    />
                  ) : (
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-[#22d3ee] via-[#34d399] to-[#0ea5e9] text-xs font-semibold uppercase tracking-[0.2em] text-white/95">
                      {formData.school.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                  <div className="grid">
                    <span className="font-medium text-slate-700 dark:text-white/80">
                      {formData.school.name}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-white/45">
                      {formData.school.shortName || "No short name"} ·{" "}
                      {formData.school.country || "Country unknown"}
                    </span>
                  </div>
                </div>
              ) : (
                <span className="text-xs text-slate-500 dark:text-white/50">
                  No school selected.
                </span>
              )}
            </div>
          </section>

          <section className="grid gap-1">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/35">
              Access
            </p>
            <p className="font-medium text-slate-700 dark:text-white/75">
              {formData.joinMode === "code"
                ? "Join via code"
                : formData.joinMode === "link"}
            </p>
            <p className="text-xs text-slate-500 dark:text-white/45">
              {formData.seatLimit > 0
                ? `Seat limit: ${formData.seatLimit}`
                : "No seat limit"}
            </p>
          </section>

          <section className="grid gap-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/35">
              Learner preferences
            </p>
            <ul className="grid gap-1 text-xs">
              <li>
                {formData.allowComments
                  ? "Comments enabled"
                  : "Comments disabled"}
              </li>
              <li>
                {formData.allowAssignments
                  ? "Learners can add assignments"
                  : "Assignments restricted to board owners"}
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-6 text-sm text-slate-500 dark:border-white/15 dark:bg-white/5 dark:text-white/60">
        When you click
        <strong className="mx-1 font-semibold text-slate-700 dark:text-white">
          Finish setup
        </strong>
        the board will be created as a draft. You can invite members or adjust
        settings before publishing to learners.
      </div>
    </div>
  );
}
