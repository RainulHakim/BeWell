import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const future = [
  {
    icon: "👨‍⚕️",
    bg: "bg-green-light",
    title: "Specialist Medical Services",
    body: "Provide services through specialist doctors focusing on personal hygiene and preventable diseases.",
  },
  {
    icon: "🗑️",
    bg: "bg-orange-light",
    title: "Sanitation Infrastructure",
    body: "Provision of additional dustbins for waste disposal to maintain lasting environmental hygiene.",
  },
  {
    icon: "📚",
    bg: "bg-green-light",
    title: "Nutrition Workshops",
    body: "Conduct dedicated workshops addressing nutrition awareness and safe food preparation.",
  },
  {
    icon: "💧",
    bg: "bg-orange-light",
    title: "Water & Drainage",
    body: "Pursue water drainage improvements to address root causes of waterborne illness.",
  },
  {
    icon: "🦟",
    bg: "bg-green-light",
    title: "Mosquito Prevention",
    body: "Extended mosquito prevention including distribution of mosquito nets to vulnerable households.",
  },
];

export default function ConclusionPage() {
  return (
    <>
      <PageHero
        eyebrow="Looking Ahead"
        title="Conclusion"
        subtitle="A milestone — not a finish line"
      />

      <div className="max-w-5xl mx-auto px-6 py-20">
        <Reveal>
          <div className="bg-green-light border-l-4 border-green rounded-2xl p-8 mb-16 text-slate-700 leading-relaxed text-base">
            After dedicating a huge amount of time and effort in engaging in
            challenging tasks and thrilling activities while relentlessly serving
            the Tulatuli community, Team Shopnochari is proud to have reached
            approximately{" "}
            <strong className="text-slate-900">
              90% of the community population
            </strong>{" "}
            — though we acknowledge the journey toward complete transformation
            continues.
          </div>
        </Reveal>

        <Reveal>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mb-8">
            Future Plans
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {future.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 ${f.bg}`}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5 text-sm">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
