export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Google Review Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Catch a review crisis{" "}
          <span className="text-[#58a6ff]">before it goes viral</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ReviewGuard monitors your Google Business reviews 24/7, uses AI to detect negative patterns, and fires instant email or SMS alerts the moment a crisis is brewing — so you can respond before the damage spreads.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start monitoring for $9/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No contracts. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["AI sentiment analysis", "Email & SMS alerts", "Google Business API", "Configurable thresholds", "Real-time dashboard"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-xs px-3 py-1 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Single Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, per location</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited review monitoring",
              "AI-powered crisis detection",
              "Instant email + SMS alerts",
              "Configurable alert thresholds",
              "Connect up to 3 Google profiles",
              "7-day free trial"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get started free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does ReviewGuard detect a crisis?</h3>
            <p className="text-[#8b949e] text-sm">ReviewGuard polls your Google Business reviews every 15 minutes and runs each new review through an AI sentiment model. When it detects a cluster of negative reviews — e.g. 3 or more 1-star reviews within 24 hours — it immediately sends you an alert so you can respond fast.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which businesses is this built for?</h3>
            <p className="text-[#8b949e] text-sm">ReviewGuard is designed for local restaurants, service businesses, and franchisees who rely on Google reviews for new customers. If a bad review wave can hurt your revenue, this tool is for you.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need technical skills to set it up?</h3>
            <p className="text-[#8b949e] text-sm">No. After signing up you connect your Google Business profile with one click via OAuth, enter your phone number and email, and set your alert threshold. The whole setup takes under 5 minutes.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ReviewGuard. All rights reserved.
      </footer>
    </main>
  );
}
