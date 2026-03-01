import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Smart Goal", href: "/smart-goal" },
  { label: "Major Intervention", href: "/major-intervention" },
  { label: "Impact Analysis", href: "/impact-analysis" },
  { label: "Challenges", href: "/challenges" },
  { label: "Conclusion", href: "/conclusion" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row justify-between gap-8 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-lg p-1.5">
            <Image
              src="/images/logo.jpeg"
              alt="BeWell"
              width={48}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-white font-bold text-base">BeWell.Com</p>
            <p className="text-slate-400 text-sm">Team Shopnochari · BBLT42</p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 max-w-xl">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-green-mid transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-800 text-center py-4 text-xs text-slate-600 px-4">
        © 2024 BeWell.Com · Team Shopnochari. All rights reserved.
      </div>
    </footer>
  );
}
