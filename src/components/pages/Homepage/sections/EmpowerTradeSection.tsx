import { FeatureCard } from "@/components/ui/featureCard";
import { H1, P } from "@/components/ui/typography";
import { ASSETS } from "@/config/assest";

const EmpowerTrading = () => {
  return (
    <section className="relative bg-[#0A0A0A] py-24 text-white overflow-hidden">
      
      {/* BACKGROUND SVG CENTERED */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <img
          src={ASSETS.VECTOR}
          alt="bg-image"
        />
      </div>

      {/* BACKGROUND RED GLOW */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-[480px] h-[480px] rounded-full bg-red-600/10 blur-[140px]" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <H1 className="text-6xl font-bold pb-4">Empower Your Trading</H1>
        <P className="text-[#A8A6B1] mt-2 py-16 max-w-sm mx-auto text-light">
          Unlock advanced tools, insights, and support to maximise your trading
          potential.
        </P>
      </div>

      {/* FEATURES GRID */}
      <div className="relative z-10 max-w-6xl mx-auto mt- grid grid-cols-1 md:grid-cols-2 gap-30">
        <FeatureCard
          title="Charting tools and indicators"
          text="Sharpen your analysis with an array of intuitive charts, drawing tools and 100+ indicators."
          icon={ASSETS.TOOLS}
        />

        <FeatureCard
          title="Get flexible leverage"
          text="Trade larger positions and maximise your return potential with lower margin requirements."
          icon={ASSETS.LEVERAGE}
        />

        <FeatureCard
          title="Round-the-clock support"
          text="Our dedicated experts are available 24/5 to guide and assist you at every step."
          icon={ASSETS.CLOCK}
        />

        <FeatureCard
          title="Customisable price alerts"
          text="Set real-time alerts to track asset movements and stay ahead with your strategy."
          icon={ASSETS.ALERT}
        />
      </div>

      {/* FOREGROUND LOGO CIRCLE */}
      <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 z-0 opacity-10 md:opacity-100">
        <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,0,0,0.4)]">
          <img src="/Frame.svg" className="w-20" alt="" />
        </div>
      </div>

    </section>
  );
};

export default EmpowerTrading;
