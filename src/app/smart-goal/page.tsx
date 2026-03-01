import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const smart = [
  {
    letter: "S",
    label: "Specific",
    color: "bg-green text-white",
    body: "Target the Tulatoli community with physical wellbeing campaigns — covering personal hygiene, environmental hygiene, and food safety.",
  },
  {
    letter: "M",
    label: "Measurable",
    color: "bg-orange text-white",
    body: "Reach a minimum of 100 people through a combination of in-person and online activities, tracked via attendance and Facebook metrics.",
  },
  {
    letter: "A",
    label: "Achievable",
    color: "bg-green text-white",
    body: "Deploy a team of 11 members using structured offline campaigns and an active Facebook page to engage the community.",
  },
  {
    letter: "R",
    label: "Relevant",
    color: "bg-orange text-white",
    body: "Improve health outcomes in an underprivileged community that lacks adequate access to health education and medical services.",
  },
  {
    letter: "T",
    label: "Time-bound",
    color: "bg-green text-white",
    body: "Complete all intervention activities within 21 days with documented milestones.",
  },
];

export default function SmartGoalPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Objective"
        title="Smart Goal"
        subtitle="Specific · Measurable · Achievable · Relevant · Time-bound"
      />

      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Quote */}
        <Reveal>
          <div className="relative bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-14">
            <span className="absolute -top-5 left-7 text-6xl text-green/20 font-serif leading-none select-none">
              &ldquo;
            </span>
            <blockquote className="text-xl text-slate-700 leading-relaxed italic">
              Our purpose was to create awareness on physical wellbeing among{" "}
              <strong className="text-slate-900 not-italic">100 people</strong>{" "}
              both online and offline (Tulatoli Community) within{" "}
              <strong className="text-slate-900 not-italic">21 days</strong>{" "}
              through campaigns and other activities.
            </blockquote>
          </div>
        </Reveal>

        {/* SMART items */}
        <div className="flex flex-col gap-4">
          {smart.map((item, i) => (
            <Reveal key={item.letter} delay={i * 0.08}>
              <div className="flex gap-5 items-start bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:translate-x-1 transition-all duration-200">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-black flex-shrink-0 ${item.color}`}
                >
                  {item.letter}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.label}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
