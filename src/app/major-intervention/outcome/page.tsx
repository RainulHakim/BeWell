import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const outcomes = [
  {
    pct: 80,
    color: "#009933",
    label: "Hand Washing",
    desc: "~80% of community people now wash their hands before eating",
  },
  {
    pct: 90,
    color: "#E8611A",
    label: "Health Consciousness",
    desc: "~90% now shower regularly and keep their surroundings clean",
    featured: true,
  },
  {
    pct: 40,
    color: "#009933",
    label: "Food Safety Awareness",
    desc: "~40% are now conscious about food, meals & water safety",
  },
];

function Ring({
  pct,
  color,
  featured,
}: {
  pct: number;
  color: string;
  featured?: boolean;
}) {
  const r = 42;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-full ${featured ? "max-w-[160px]" : "max-w-[130px]"} mx-auto`}
    >
      <circle cx="50" cy="50" r={r} fill="none" stroke="#f1f5f9" strokeWidth="7" />
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        transform="rotate(-90 50 50)"
      />
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fill="#1e293b"
      >
        {pct}%
      </text>
    </svg>
  );
}

export default function OutcomePage() {
  return (
    <>
      <PageHero
        eyebrow="What Changed"
        title="Outcome"
        subtitle="Measurable improvements in community health behaviours"
      />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {outcomes.map((o, i) => (
            <Reveal key={o.label} delay={i * 0.12}>
              <div
                className={`bg-white border rounded-2xl p-8 text-center shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ${
                  o.featured
                    ? "border-orange shadow-sm"
                    : "border-slate-200"
                }`}
              >
                <Ring pct={o.pct} color={o.color} featured={o.featured} />
                <h3 className="font-bold text-slate-900 mt-5 mb-2">{o.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{o.desc}</p>
                {o.featured && (
                  <span className="inline-block mt-3 text-[0.65rem] font-bold tracking-widest uppercase text-orange bg-orange-light px-2.5 py-0.5 rounded-full">
                    Top Result
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
