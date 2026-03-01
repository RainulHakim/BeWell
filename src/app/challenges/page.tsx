import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const challenges = [
  {
    icon: "🛡️",
    bg: "bg-green-light",
    title: "Project Adaptive Challenges",
    body: "Adapting project plans to evolving community needs required flexibility and quick decision-making. Unexpected situations demanded on-the-spot solutions from the team.",
  },
  {
    icon: "🤝",
    bg: "bg-orange-light",
    title: "Team Adaptive Challenges",
    body: "Coordinating 11 members across multiple simultaneous activities required constant communication and alignment to keep everyone on the same page.",
  },
  {
    icon: "💻",
    bg: "bg-green-light",
    title: "Project Technical Problems",
    body: "Managing digital content creation, survey deployment, and analytics presented technical hurdles we navigated with limited tools and resources.",
  },
  {
    icon: "🛠️",
    bg: "bg-orange-light",
    title: "Team Technical Problems",
    body: "Varying technical expertise across team members required knowledge-sharing sessions and peer support to ensure consistent quality.",
  },
];

export default function ChallengesPage() {
  return (
    <>
      <PageHero
        eyebrow="Lessons Learned"
        title="Challenges & Limitations"
        subtitle="Real obstacles we faced and what we learned from them"
      />

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {challenges.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${c.bg}`}
                >
                  {c.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex gap-4 items-start bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <span className="text-2xl flex-shrink-0 mt-0.5">⚠️</span>
            <div>
              <h3 className="font-bold text-amber-800 mb-2">Limitations</h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                Despite our best efforts, the project operated within real-world
                constraints — a 21-day window, a limited budget, and the
                inherent difficulty of reaching 100% of a community. These
                factors shaped the scope and depth of our interventions, but
                they also motivated us to be strategic and resourceful at every
                step.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
