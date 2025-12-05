import { ASSETS } from "@/config/assest";
import { Button } from "../../../ui/button";
import { H1, P } from "../../../ui/typography";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[linear-gradient(135deg,#8B0000_0%,#DC143C_50%,#FF6347_100%)] ">
      {/* Main Hero Section */}
      <div className="backdrop-brightness-90">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex  flex-col-reverse md:flex-row gap-10 md:gap-16">
          {/* LEFT TEXT */}
          <div className="flex-1 text-white text-center md:text-left">
            <H1 className="text-5xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Trade Forex <br /> with Premier <br /> Markets
            </H1>

            <P className="mt-4 max-w-sm mx-auto md:mx-0 ">
              Access global markets with advanced trading tools, competitive
              spreads, and institutional-grade execution.
            </P>

            <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button className="bg-white text-pmred px-5 font-semibold group relative overflow-hidden flex items-center gap-2">
                Start Trading
                <ArrowRight className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </Button>

              <Button className="border-2 px-5 font-semibold group relative overflow-hidden flex items-center gap-2">
                Try Demo Account
                <ArrowRight className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 w-full max-w-md md:max-w-lg">
            <img
              src={ASSETS.HERO_IMAGE}
              alt="Trading dashboard preview"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Curved Bottom Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          width="100%"
          height="160"
          viewBox="0 0 1440 182"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 29.575C0 29.575 611 0 925.5 0C1240 0 1440 35.5632 1440 35.5632V182H0V29.575Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
