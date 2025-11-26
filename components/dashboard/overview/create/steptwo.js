export default function CreateStepTwo({ formData }) {
  return (
    <div className="grid gap-8">
      <div className="grid gap-3">
        <p className="text-sm font-semibold text-slate-700 dark:text-white/80">
          How should learners join?
        </p>
        {/* <div className="grid gap-3 md:grid-cols-3">
          {["code", "open", "limited"].map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => handleFieldChange("joinMode", mode)}
              className={`rounded-2xl border px-4 py-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]/40 ${
                formData.joinMode === mode
                  ? "border-[#22d3ee]/60 bg-[#22d3ee]/5 text-slate-900 shadow-sm dark:text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-transparent dark:text-white/60 dark:hover:border-white/20 dark:hover:bg-white/5"
              }`}
            >
              <p className="text-sm font-semibold capitalize">{mode}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-white/45">
                {mode === "code" && "Learners enter a unique join code."}
                {mode === "open" && "Anyone with the link can request access."}
                {mode === "limited" &&
                  "Invitees only, with optional seat limit."}
              </p>
            </button>
          ))}
        </div> */}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
            Visibility
          </label>
          {/* <div className="flex gap-3">
            {["private", "listed"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleFieldChange("visibility", option)}
                className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium capitalize transition ${
                  formData.visibility === option
                    ? "border-[#34d399]/60 bg-[#34d399]/10 text-[#0f766e] dark:text-[#34d399]"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-transparent dark:text-white/60 dark:hover:border-white/20 dark:hover:bg-white/5"
                }`}
              >
                {option}
              </button>
            ))}
          </div> */}
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-white/80">
            Seat limit
          </label>
          {/* <input
            type="number"
            min={1}
            value={formData.seatLimit}
            onChange={(event) =>
              handleFieldChange("seatLimit", event.target.value)
            }
            placeholder={
              formData.joinMode === "limited" ? "e.g. 50" : "Unlimited"
            }
            disabled={formData.joinMode !== "limited"}
            className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-[#22d3ee] focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/25 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50 disabled:text-slate-400 dark:border-white/15 dark:bg-transparent dark:text-white dark:placeholder:text-white/40 dark:focus:ring-[#22d3ee]/40 dark:disabled:border-white/10 dark:disabled:bg-white/5 dark:disabled:text-white/30"
          /> */}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-transparent dark:text-white/70 dark:hover:border-white/20 dark:hover:bg-white/5">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-[#22d3ee] focus:ring-0 dark:border-white/30 dark:bg-transparent"
          />
          Allow learner comments on posts
        </label>
      </div>
    </div>
  );
}
