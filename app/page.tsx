const CALENDLY_URL = "https://calendly.com/filamentplatform/30min";
const CONTACT_EMAIL = "hello@filamentplatform.com";

function BookDemoButton({ size = "default" }: { size?: "default" | "large" }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block bg-[#e07b2a] hover:bg-[#c96a1a] active:bg-[#b55c10]
        text-white font-semibold rounded-lg transition-colors duration-150
        ${size === "large" ? "px-10 py-4 text-lg" : "px-7 py-3 text-base"}
      `}
    >
      Book a Demo
    </a>
  );
}

export default function Home() {
  return (
    <main>

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="bg-[#0f2244] text-white px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#e07b2a] text-sm font-semibold uppercase tracking-widest mb-4">
            For Canadian University Financial Aid Offices
          </p>
          <h1
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(3rem, 5vw, 3.75rem)",
            }}
          >
            Your students are missing scholarships they qualify for. Filament fixes that.
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Filament is the scholarship navigator for your students — a chatbot that answers financial aid questions instantly with citations from your own official sources.
          </p>
          <BookDemoButton size="large" />

          {/* Demo video */}
          <div className="mt-14 rounded-xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/oL4mpEEuL5I"
              title="Filament Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ── 2. HOW IT WORKS ─────────────────────────────────────── */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-bold text-[#0f2244] text-4xl text-center mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            How It Works
          </h2>
          <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
            From your official pages to a live chatbot — in days, not months.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "We ingest your sources",
                body: "Filament scrapes your official scholarship and financial aid pages. Your data, your rules — nothing fabricated.",
              },
              {
                step: "02",
                title: "Students ask in plain English",
                body: "Students ask questions through a chat widget on your website, any time of day or night.",
              },
              {
                step: "03",
                title: "Instant, cited answers",
                body: "Filament responds immediately with the correct answer and a link to the official source — no hallucinations, no liability.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col gap-3">
                <span
                  className="font-bold text-6xl text-[#e07b2a] leading-none"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {step}
                </span>
                <h3
                  className="font-bold text-[#0f2244] text-xl"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY FILAMENT ─────────────────────────────────────── */}
      <section className="bg-[#f8fafc] px-6 py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-bold text-[#0f2244] text-4xl text-center mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Why Filament
          </h2>
          <p className="text-center text-slate-500 mb-14 max-w-xl mx-auto">
            Built for administrators. Trusted by students.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                heading: "Your staff, freed up",
                body: "Students get accurate answers 24/7 — your team handles complex cases, not the same FAQ over and over.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                heading: "Zero liability risk",
                body: "Every answer cites the official source — no misinformation, no hallucinated policy details, no calls from upset parents.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                heading: "Live in days, not months",
                body: "No IT project. No integration work. Filament is on your website within days of signing — a script tag is all it takes.",
              },
            ].map(({ icon, heading, body }) => (
              <div
                key={heading}
                className="bg-white rounded-xl p-7 shadow-sm border border-slate-100 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0f2244]/5 flex items-center justify-center text-[#0d7d7d]">
                  {icon}
                </div>
                <h3
                  className="font-bold text-[#0f2244] text-lg"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {heading}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SOCIAL PROOF ─────────────────────────────────────── */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-bold text-[#0f2244] text-4xl mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Built with students, validated on campus
          </h2>
          <p className="text-slate-500 mb-14 max-w-xl mx-auto">
            Real feedback from real students at a real Canadian university.
          </p>

          <div className="bg-[#0f2244] rounded-2xl px-10 py-12 text-white">
            <p
              className="font-bold leading-tight mb-4 text-[#e07b2a]"
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
              }}
            >
              7 out of 10
            </p>
            <p className="text-slate-300 text-lg">
              KPU students said they would use Filament regularly instead of waiting for an email response from the financial aid office.
            </p>
            <p className="text-slate-400 text-sm mt-4 font-medium">
              — Student survey, Kwantlen Polytechnic University
            </p>
          </div>

          {/* Space for university logos
          <div className="mt-12 border border-dashed border-slate-200 rounded-xl py-8 px-6">
            <p className="text-slate-300 text-sm tracking-wide uppercase">
              University partner logos — coming soon
            </p>
          </div> */}
        </div>
      </section>

      {/* ── 5. FOOTER CTA ───────────────────────────────────────── */}
      <footer className="bg-[#0f2244] text-white px-6 py-16">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2
            className="font-bold text-3xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Ready to give your students the answers they need?
          </h2>
          <p className="text-slate-300">
            See Filament in action — book a 30-minute demo.
          </p>
          <BookDemoButton size="large" />
          <div className="mt-6 border-t border-white/10 pt-6 w-full flex flex-col items-center gap-2">
            <p className="text-slate-400 text-sm">
              Filament — Scholarship navigation made easy for Canadian universities
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              {CONTACT_EMAIL} <br />
              {CALENDLY_URL}
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
