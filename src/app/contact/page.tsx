import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="You can find us via Facebook and Gmail"
      />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {/* Facebook */}
          <Reveal delay={0}>
            <Link
              href="https://web.facebook.com/BeWell0011"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center bg-white border border-slate-200 rounded-2xl p-8 shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#1877f2]/30 transition-all duration-200 h-full"
            >
              <div className="w-16 h-16 rounded-full bg-[#1877f2] flex items-center justify-center text-white text-2xl font-black mb-4 shadow-md">
                f
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Facebook</h3>
              <p className="font-semibold text-slate-700 mb-1">BeWell</p>
              <p className="text-xs text-slate-400">web.facebook.com/BeWell0011</p>
            </Link>
          </Reveal>

          {/* Email */}
          <Reveal delay={0.1}>
            <Link
              href="mailto:project.bewell11@gmail.com"
              className="group flex flex-col items-center text-center bg-white border border-slate-200 rounded-2xl p-8 shadow-xs hover:shadow-xl hover:-translate-y-2 hover:border-[#ea4335]/30 transition-all duration-200 h-full"
            >
              <div className="w-16 h-16 rounded-full bg-[#ea4335] flex items-center justify-center text-white text-2xl mb-4 shadow-md">
                ✉
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Email</h3>
              <p className="font-semibold text-slate-700 mb-1 text-sm">
                project.bewell11@gmail.com
              </p>
              <p className="text-xs text-slate-400">Send us a message</p>
            </Link>
          </Reveal>

          {/* Website */}
          <Reveal delay={0.2}>
            <div className="flex flex-col items-center text-center bg-white border border-slate-200 rounded-2xl p-8 shadow-xs h-full">
              <div className="w-16 h-16 rounded-full bg-green-light flex items-center justify-center mb-4 shadow-sm overflow-hidden">
                <Image
                  src="/images/logo.jpeg"
                  alt="BeWell"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Website</h3>
              <p className="font-semibold text-slate-700 mb-1">BeWell.Com</p>
              <p className="text-xs text-slate-400">Team Shopnochari</p>
            </div>
          </Reveal>
        </div>

        {/* Thank you */}
        <Reveal>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 text-center">
            <Image
              src="/images/logo.jpeg"
              alt="BeWell"
              width={96}
              height={96}
              className="mx-auto mb-5 object-contain"
            />
            <p className="text-lg text-slate-700 mb-1">
              Thank you so much from{" "}
              <strong className="text-slate-900">Team Shopnochari</strong>
            </p>
            <p className="text-sm text-slate-400">BBLT42 · BeWell.Com</p>
          </div>
        </Reveal>
      </div>
    </>
  );
}
