import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

const blocks = [
  {
    pill: "Awareness Campaign",
    pillColor: "bg-green-light text-green-dark",
    title: "3-Day Community Campaign",
    img: "/images/awareness-campaign.png",
    body: "Conducted a three-day awareness campaign reaching 145 community members. Topics covered included personal hygiene, environmental hygiene, and food safety. Feedback sessions were held after each day.",
    points: [
      "Personal hygiene practices",
      "Environmental hygiene",
      "Food safety and handling",
      "Post-session feedback rounds",
    ],
  },
  {
    pill: "Door to Door",
    pillColor: "bg-orange-light text-orange",
    title: "Community Outreach Visits",
    img: "/images/door-to-door.png",
    body: "Team members went door-to-door through the Tulatoli community, engaging directly with families to assess their health knowledge and share hygiene tips.",
    points: [
      "Direct household engagement",
      "Personal health assessments",
      "Resource & guidance distribution",
    ],
  },
  {
    pill: "Cleanliness Drive",
    pillColor: "bg-green-light text-green-dark",
    title: "Cleaning Activities & Banners",
    img: "/images/cleaning-activities.png",
    body: "Community cleanup with participation from local children, who received prizes and learned proper waste disposal and handwashing. Health banners were placed throughout the area.",
    points: [
      "Gamified trash collection with prizes",
      "Handwashing technique education",
      "2 dustbins installed",
      "Health banners placed around the area",
    ],
  },
  {
    pill: "Medical Outreach",
    pillColor: "bg-orange-light text-orange",
    title: "Health Assessments & Doctor Visit",
    img: "/images/medical-outreach.png",
    body: "A medical professional conducted health assessments for 22 residents. Local government representatives also participated as partners.",
    points: [
      "22 residents received medical checks",
      "Food, medicines & treatment provided",
      "99% community satisfaction",
      "Local government partnership",
    ],
  },
  {
    pill: "Disease Prevention",
    pillColor: "bg-green-light text-green-dark",
    title: "Dengue Prevention & Dustbins",
    img: "/images/dengue-prevention.png",
    body: "Anti-dengue spray was distributed across the Tulatoli community. Dustbins were installed in strategic locations. The project closed with a celebration for the children.",
    points: [
      "97% of community members reached",
      "Mosquito repellent distributed",
      "Dustbins placed in key spots",
      "Closing ceremony & children's event",
    ],
  },
];

export default function OfflinePage() {
  return (
    <>
      <PageHero
        eyebrow="In-Person Work"
        title="Offline Intervention"
        subtitle="Direct community engagement in the Tulatoli neighbourhood"
      />

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-20">
        {blocks.map((b, i) => (
          <Reveal key={b.title}>
            <div
              className={`grid md:grid-cols-2 gap-10 items-center ${
                i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <div>
                <span
                  className={`inline-block text-[0.68rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${b.pillColor}`}
                >
                  {b.pill}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                  {b.title}
                </h3>
                <p className="text-slate-600 mb-5 leading-relaxed">{b.body}</p>
                <ul className="flex flex-col gap-2">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-green font-bold mt-0.5">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
