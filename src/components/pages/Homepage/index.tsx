import Hero from "./sections/Hero";
import MarketFeatures from "./sections/MarketFeatures";
import { MarketsAccessSection } from "./sections/MarketsAccessSection";
import { TrustSection } from "./sections/TrustSection";
import MarketChartSection from "./sections/MarketChartSection";
import EmpowerTrading from "./sections/EmpowerTradeSection";
import TradingCTA from "./sections/TradingCta";
import TestimonialsSection from "./sections/TestimonialsSection";
import SeamlessWithdrawals from "./sections/SeamlessWithdrawalsSection";
import MarketInsights from "./sections/MarketInsightSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ==============================
          HERO
      =============================== */}
      <section className="relative">
        <Hero />
      </section>

      {/* ==============================
          MARKET FEATURES (comes up into wave)
      =============================== */}
      <section className="-mt-20 md:-mt-28 relative z-10">
        <MarketFeatures />
      </section>

      {/* ==============================
          ACCESS / EXPLAINER SECTIONS
      =============================== */}
      <section>
        <MarketsAccessSection />
      </section>

      <section>
        <TrustSection />
      </section>

      <section>
        <MarketChartSection />
      </section>

      <section>
        <EmpowerTrading />
      </section>

      <section>
        <SeamlessWithdrawals />
      </section>

      <section>
        <MarketInsights />
      </section>

      {/* ==============================
          CTA
      =============================== */}
      <section className="my-10">
        <TradingCTA />
      </section>

      {/* ==============================
          TESTIMONIALS
      =============================== */}
      <section>
        <TestimonialsSection />
      </section>
    </div>
  );
}
