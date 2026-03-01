import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const teamMembers = [
  { name: "Md Abdullah Tasrif", img: "/images/member-tasrif.png" },
  { name: "Muntaha Fayez", img: "/images/member-muntaha.png" },
  { name: "Muhammad Nurul Arman", img: "/images/member-arman.png" },
  { name: "Mohammad Rimon", img: "/images/member-rimon.png" },
  { name: "Tasnim Binte Shareq", img: "/images/member-tasnim.png" },
  { name: "Muhammad Monirul Mosthafa", img: "/images/member-monirul.png" },
  { name: "Ahmad Mostafa", img: "/images/member-ahmad.png" },
  { name: "Samia Asfeen", img: "/images/member-samia.png" },
  { name: "Rainul Hakim", img: "/images/member-rainul.png" },
  { name: "Beson Chakma", img: "/images/member-beson.png" },
  { name: "H M Abdul Mojid Juhan", img: "/images/member-juhan.png" },
];

const stats = [
  { value: "9,614", label: "People Reached" },
  { value: "145", label: "Campaign Attendees" },
  { value: "21", label: "Days" },
  { value: "11", label: "Team Members" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-banner.png"
          alt="Team Shopnochari"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-green-dark/40" />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <span className="inline-block text-[0.7rem] font-bold tracking-[0.15em] uppercase text-white/65 border border-white/25 px-3 py-1 rounded-full mb-6">
            Team Shopnochari · BBLT42
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-5">
            Be Healthy Today
            <br />
            <span className="text-green-mid">for a Better</span> Tomorrow
          </h1>
          <p className="text-lg text-white/80 max-w-md mx-auto mb-8">
            Spreading health &amp; hygiene awareness across the Tulatoli
            Community and beyond.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/smart-goal"
              className="px-6 py-3 bg-white text-green-dark rounded-full font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Explore Our Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full font-semibold text-sm border-2 border-white/50 text-white hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[0.65rem] tracking-widest uppercase z-10">
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── Stat Bar ─────────────────────────────────────────── */}
      <div className="border-b border-slate-200 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-200">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center py-7 px-4">
              <span className="text-3xl font-black text-green-dark tracking-tight leading-none">
                {s.value}
              </span>
              <span className="mt-2 text-[0.68rem] font-semibold uppercase tracking-widest text-slate-500">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Our Identity ─────────────────────────────────────── */}
      <section id="our-identity" className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <p className="text-xs font-bold tracking-widest uppercase text-green mb-2">
            Who We Are
          </p>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-3">
            Our Identity
          </h2>
          <p className="text-slate-500 max-w-xl mb-12 text-base">
            We are Team Shopnochari — driven young people committed to making
            health and hygiene accessible to everyone.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {[
            {
              icon: "👥",
              title: "Team Shopnochari",
              body: "11 members from BBLT42 batch, united by a shared vision for community health and hygiene.",
            },
            {
              icon: "🎯",
              title: "Our Mission",
              body: "Create sustainable health awareness among underprivileged communities — online and offline.",
            },
            {
              icon: "📍",
              title: "Tulatoli Community",
              body: "Our ground-zero — where campaigns, medical outreach, and cleanliness drives happen in person.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Facilitator */}
        <Reveal>
          <div className="bg-gradient-to-br from-green-light to-[#d4f0df] border border-green/10 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-14">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
              <Image
                src="/images/facilitator.png"
                alt="Md. Amdadul Hoque"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="inline-block text-[0.7rem] font-bold tracking-widest uppercase text-green bg-white px-3 py-1 rounded-full mb-3">
                Facilitator
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Md. Amdadul Hoque
              </h3>
              <p className="text-sm text-slate-600 max-w-md">
                Leading Team Shopnochari through the BeWell initiative, guiding
                11 passionate members to deliver real impact in the Tulatoli
                community.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="text-xl font-bold text-slate-900 mb-6">Team Members</h3>
        </Reveal>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {teamMembers.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.04}>
              <div className="group text-center">
                <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-slate-200 group-hover:border-green shadow-xs group-hover:shadow-md transition-all duration-200 mb-2">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-[0.68rem] font-semibold text-slate-600 leading-tight">
                  {m.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Introduction ─────────────────────────────────────── */}
      <section
        id="introduction"
        className="bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <p className="text-xs font-bold tracking-widest uppercase text-green mb-2">
              Background
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-5">
              Introduction
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Team SHOPNOCHARI launched the{" "}
              <strong className="text-slate-800">BeWell</strong> health
              awareness initiative with a clear purpose — spreading awareness on{" "}
              <strong className="text-slate-800">health and hygiene</strong>{" "}
              among underprivileged people in the Tulatoli community and across
              social media platforms.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We believe that access to basic health knowledge is a fundamental
              right. Through campaigns, medical outreach, and digital content,
              we work to bridge the gap between awareness and action.
            </p>
            <Link
              href="/smart-goal"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green text-white rounded-full text-sm font-semibold hover:bg-green-dark transition-colors shadow-sm hover:shadow-md"
            >
              See Our Goal →
            </Link>
          </Reveal>

          <Reveal direction="right">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero-banner.png"
                alt="Team in the community"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
