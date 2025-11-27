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

        <section className="grid gap-6 lg:grid-cols-2 pb-10">
          <EmptyBoardJoin />
          <EmptyBoardCreate />
        </section>
      </div>
    </div>
  );
}
