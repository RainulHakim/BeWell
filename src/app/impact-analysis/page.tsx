import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const offline = [
  {
    num: "78%",
    numColor: "text-green-dark",
    title: "Medical Campaign",
    points: [
      "Goal: 30 ill members — Reached: 22",
      "Food, medicines & treatment provided",
      "99% community satisfaction",
      "Quality over quantity approach",
    ],
  },
  {
    num: "97%",
    numColor: "text-orange",
    title: "Dengue Prevention",
    points: [
      "97% of community covered",
      "Anti-dengue spray distributed",
      "Water accumulation addressed",
      "Local government partnership",
    ],
  },
  {
    num: "95%",
    numColor: "text-green-dark",
    title: "Cleanliness Initiative",
    points: [
      "95% of children learned hand-washing",
      "Gamified competition with prizes",
      "2 dustbins installed",
      "Residents personally thanked team",
    ],
  },
];

const metrics = [
  { value: "484", label: "Page Likes" },
  { value: "513", label: "Followers" },
  { value: "9,614", label: "Total Reach", highlight: true },
  { value: "3,538", label: "Interactions" },
  { value: "5,796", label: "Video Views" },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="The Numbers"
        title="Impact Analysis"
        subtitle="Measuring the real difference we made in the community"
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Offline */}
        <Reveal>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mb-8">
            Offline Impact
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {offline.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow h-full">
                <p className={`text-4xl font-black tracking-tight mb-1 ${c.numColor}`}>
                  {c.num}
                </p>
                <h3 className="font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                  {c.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-green font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Online */}
        <Reveal>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mb-8">
            Online Impact
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.07}>
              <div
                className={`rounded-2xl p-5 text-center border transition-transform hover:-translate-y-1 duration-200 ${
                  m.highlight
                    ? "bg-green-light border-green/20 shadow-sm"
                    : "bg-white border-slate-200 shadow-xs"
                }`}
              >
                <p
                  className={`text-3xl font-black tracking-tight leading-none mb-1.5 ${
                    m.highlight ? "text-green-dark" : "text-slate-800"
                  }`}
                >
                  {m.value}
                </p>
                <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-slate-500">
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
