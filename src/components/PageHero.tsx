interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-green to-green-dark text-white text-center py-20 px-6">
      {eyebrow && (
        <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-3">
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </section>
  );
}
