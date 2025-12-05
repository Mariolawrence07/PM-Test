import { Button } from "@/components/ui/button";
import { H2, P } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";
import { ASSETS } from "@/config/assest";

export function TrustSection() {
  return (
    <section className=" relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 ">
        <div className="grid md:grid-cols-2 gap-12 mt-30 ">
          {/* Left Content */}
          <div className=" mb-20">
            <H2 className="text-3xl md:text-4xl lg:text-7xl font-bold  mb-6">
              Join <span className="text-pmred">50,000+</span>
              <br />
              traders who
              <br />
              trust us
            </H2>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center">
            <div>
              <P className=" mb-8 max-w-md">
                Experience advanced trading tools, transparent and competitive
                pricing, lightnaing-fast execution, and dedicated support
                trusted by traders worldwide.
              </P>
              <div className="my-6 flex flex-col sm:flex-row justify-center md:justify-start gap-8">
                <Button className=" bg-red-500 text-white px-5 font-semibold group relative overflow-hidden flex items-center gap-2">
                  Start Trading
                  <ArrowRight className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </Button>

                <Button className="b-pmred px-5 font-semibold group relative overflow-hidden flex items-center gap-2">
                  Try Demo Account
                  <ArrowRight className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center px-4">
          <div
            className="relative w-full max-w-[1400px] rounded-3xl overflow-visible bg-linear-to-r from-[#ED1D25] to-[#940006] py-20 flex flex-col md:flex-row items-center
"
          >
            {/* Coins – Behind Trader, NOT Overflowing */}
            <div className="absolute  top-1/2 -translate-y-1/2 h-full flex items-center justify-end overflow-hidden z-0">
              <img
                src={ASSETS.CTA_COIN}
                alt="Coins"
                className="h-full object-contain"
              />
            </div>

            {/* Trader – Can Overflow, In Front of Coins */}
            <img
              src={ASSETS.CTA_IMAGE}
              alt="Trader"
              className="
-   absolute left-40 top-1/2 -translate-y-1/2
-   h-[160%] object-contain
+   absolute left-1/2 md:left-40 top-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-1/2
+   max-h-[65vh] w-[75vw] sm:w-[60vw] md:w-auto
    object-contain
    z-5 pointer-events-none
    ml-10
  "
            />

            {/* Right-side Text */}
            <div className="relative z-10 ml-auto pr-10 md:pr-16 lg:pr-24">
              <div className="flex flex-col gap-6 max-w-md">
                <H2 className="text-white font-bold text-4xl md:text-5xl leading-tight">
                  Everything you need to trade the markets
                </H2>

                <Button
                  className="
    border-r-2 px-5 font-semibold group relative overflow-hidden 
    flex items-center gap-2 
    bg-linear-to-r from-[#390507] to-[#962020] 
    text-white  w-fit py-7 
  "
                >
                  Explore Accounts
                  <ArrowRight
                    className="
      absolute right-2 top-1/2 -translate-y-1/2 
      opacity-0 transition-all duration-300 group-hover:opacity-100
    "
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
