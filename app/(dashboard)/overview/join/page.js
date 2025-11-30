/* eslint-disable @next/next/no-img-element */
import { Users, MessageSquare, FileText, Lock, Globe } from "lucide-react";

export default function JoinBoardPage() {
  // Static preview data (would come from backend in real usage)
  const board = {
    userId: "692a30842af3af93e062efec",
    name: "Computing Science and Cybersecurity",
    tagline: "NACOSITE",
    description:
      "Obafemi Awolowo University departement of Computing Science and Cybersecurity students Boards",
    boardType: "projects",
    school: {
      name: "Obafemi Awolowo University Ile-Ife",
      logo: "https://logo.clearbit.com/oauife.edu.ng",
      shortName: "OAU",
      country: "Nigeria",
    },
    joinMode: "code",
    allowComments: true,
    allowPosts: false,
    seatLimit: 20,
    students: ["6926d333ee8d457108a56efc"],
  };

  const memberCount = board.students.length;
  const seatsAvailable = board.seatLimit ? board.seatLimit - memberCount : null;

  return (
    <div className="flex min-h-screen items-center justify-center  px-4 py-10">
      <div className="w-full max-w-lg overflow-hidden ">
        {/* Header with school logo */}
        <div className="relative flex flex-col items-center bg-linear-to-br from-slate-100 to-slate-50 px-6 pb-6 pt-8 dark:from-slate-800 dark:to-slate-900">
          <div className="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg dark:border-slate-800 dark:bg-slate-800">
            {board.school.logo ? (
              <img
                src={board.school.logo}
                alt={board.school.name}
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
            ) : (
              <span className="text-2xl font-bold text-slate-400">
                {board.school.shortName}
              </span>
            )}
          </div>

          <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-500 shadow-sm dark:bg-slate-800 dark:text-slate-400">
            <Globe className="h-3 w-3" />
            {board.school.country}
          </span>

          <h1 className="mt-2 text-center text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
            {board.name}
          </h1>

          {board.tagline && (
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              {board.tagline}
            </p>
          )}
        </div>

        {/* Board details */}
        <div className="space-y-6 p-6">
          {/* Description */}
          <p className="text-center text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {board.description}
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center rounded-xl bg-slate-50 px-3 py-4 dark:bg-slate-800">
              <Users className="mb-1 h-5 w-5 text-sky-500" />
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                {memberCount}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Members
              </span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-slate-50 px-3 py-4 dark:bg-slate-800">
              <MessageSquare className="mb-1 h-5 w-5 text-emerald-500" />
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                {board.allowComments ? "On" : "Off"}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Comments
              </span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-slate-50 px-3 py-4 dark:bg-slate-800">
              <FileText className="mb-1 h-5 w-5 text-purple-500" />
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                {board.allowPosts ? "On" : "Off"}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Posts
              </span>
            </div>
          </div>

          {/* Info badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">
              <Lock className="h-3 w-3" />
              Join by {board.joinMode}
            </span>

            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium capitalize text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
              {board.boardType}
            </span>

            {seatsAvailable !== null && (
              <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                {seatsAvailable} seats left
              </span>
            )}
          </div>

          {/* School info */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/5 dark:bg-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-slate-700">
                {board.school.logo ? (
                  <img
                    src={board.school.logo}
                    alt={board.school.shortName}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                ) : (
                  <span className="text-sm font-bold text-slate-400">
                    {board.school.shortName}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {board.school.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {board.school.shortName} · {board.school.country}
                </p>
              </div>
            </div>
          </div>

          {/* Join button */}
          <button className="w-full cursor-pointer rounded-full bg-linear-to-r from-sky-500 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30">
            Join this board
          </button>

          <p className="text-center text-xs text-slate-400 dark:text-slate-500">
            By joining, you agree to the board rules set by the owner.
          </p>
        </div>
      </div>
    </div>
  );
}
