import { Button } from "@/components/ui/button";
import { StepBadge } from "@/components/ui/stepbadge";
import { P } from "@/components/ui/typography";
import { ASSETS } from "@/config/assest";
import { ArrowRight } from "lucide-react";

export default function TradingCTA() {
  return (
    <div
      className="
        relative 
        mx-auto 
        max-w-6xl 
        overflow-hidden 
        rounded-3xl 
        bg-gradient-to-r from-[#B20018] to-[#77000C]
        text-white
        flex flex-col md:flex-row 
        
        
      "
    ><div>
      
      <div className="flex-1 flex flex-col justify-center px-10">
        {/* STEPS */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 text-2xl  ">
          <StepBadge number={1} label="Register" />
          <StepBadge number={2} label="Fund" />
          <StepBadge number={3} label="Start Trading" />
        </div>

        {/* DESCRIPTION */}
        <P className="text-base md:text-lg leading-relaxed max-w-sm opacity-90 mb-8">
          Ready to trade smarter? Get instant access to global markets with
          reliable tools and 24/5 support.
        </P>

        {/* CTA BUTTON */}
        <Button
          className="
            bg-white text-pmred px-5 font-semibold group relative overflow-hidden 
            flex items-center gap-2  md:p-7 w-fit
          "
        >
          Get Started
          <ArrowRight className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100" />
        </Button>
      </div>
    </div>
     
     

      {/* RIGHT IMAGE BLOCK */}
      <div
        className="
          flex-1 
          w-full 
          md:h-full 
          flex items-stretch justify-end
        "
      >
        <img
          src={ASSETS.CTA_PHONE}
          alt="coins"
          className="
            w-full 
            md:h-full
            object-cover 
            pointer-events-none 
            select-none
          "
        />
      </div>
    </div>
  );
}
