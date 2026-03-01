import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const cards = [
  {
    href: "/major-intervention/offline",
    img: "/images/awareness-campaign.png",
    pill: "In Person",
    pillColor: "bg-green-light text-green-dark",
    title: "Offline Intervention",
    body: "Awareness campaigns, medical outreach, cleaning drives, and community events in Tulatoli.",
  },
  {
    href: "/major-intervention/online",
    img: "/images/online-video.png",
    pill: "Digital",
    pillColor: "bg-orange-light text-orange",
    title: "Online Intervention",
    body: "Facebook posts, awareness videos, AI-generated content, and Google Form surveys.",
  },
  {
    href: "/major-intervention/outcome",
    img: "/images/dengue-prevention.png",
    pill: "Results",
    pillColor: "bg-green-light text-green-dark",
    title: "Outcome",
    body: "Measurable improvements in hand-washing, health consciousness, and food safety.",
  },
];

export default function MajorInterventionPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Did"
        title="Major Intervention"
        subtitle="Combining offline and online strategies to maximise community reach"
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.href} delay={i * 0.1}>
              <Link
                href={c.href}
                className="group block bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <span
                    className={`inline-block text-[0.68rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 ${c.pillColor}`}
                  >
                    {c.pill}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                    {c.body}
                  </p>
                  <span className="text-sm font-semibold text-green group-hover:gap-2 flex items-center gap-1 transition-all">
                    View details <span>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
