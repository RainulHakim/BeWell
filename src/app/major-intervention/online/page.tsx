import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const cards = [
  {
    icon: "🎬",
    color: "bg-green-light",
    title: "Video Awareness Campaign",
    body: "Uploaded awareness videos on personal, environmental, and food hygiene. Also posted a dedicated dengue prevention video and an AI-generated awareness video.",
  },
  {
    icon: "📋",
    color: "bg-orange-light",
    title: "Google Form Survey",
    body: "Created and distributed a Google Form to assess baseline health awareness among community members and measure the impact of campaigns.",
  },
  {
    icon: "📣",
    color: "bg-green-light",
    title: "7 Social Media Posts",
    body: "Published 7 posts covering personal hygiene, food hygiene, environmental hygiene, and a quiz post — generating thousands of interactions.",
  },
  {
    icon: "📸",
    color: "bg-orange-light",
    title: "Activity Documentation",
    body: "Shared photos and videos of Days 1–8 offline activities on Facebook, extending the reach of in-person work to an online audience.",
  },
];

export default function OnlinePage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Campaigns"
        title="Online Intervention"
        subtitle="Reaching thousands through Facebook, video, and interactive content"
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${c.color}`}
                >
                  {c.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Featured video */}
        <Reveal>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/online-video.png"
                alt="Dengue awareness video"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                ▶ Dengue Awareness
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block text-[0.68rem] font-bold tracking-widest uppercase text-orange bg-orange-light px-3 py-1 rounded-full mb-4 w-fit">
                Featured Content
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                Dengue Awareness Video
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                One of our most impactful pieces — educating the public on
                dengue prevention, water accumulation dangers, and how to keep
                surroundings clean.
              </p>
              <Link
                href="https://web.facebook.com/BeWell0011"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green text-white rounded-full text-sm font-semibold hover:bg-green-dark transition-colors w-fit shadow-sm"
              >
                View on Facebook →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
