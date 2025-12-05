import { H2, P } from "@/components/ui/typography";
import { ASSETS } from "@/config/assest";
import { ShieldCheck, Rocket, Banknote } from "lucide-react";

export default function SeamlessWithdrawals() {
  return (
    <section className="py-24 bg-white">
      {/* TEXT HEADER */}
      <div className="text-center mb-14 px-4">
        <p className="text-red-600 font-medium tracking-wide mb-2">
          Access your funds anytime, anywhere.
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">Seamless Withdrawals</h2>
      </div>

      {/* CORE BLOCK */}
      <div
        className="
          relative  
          max-w-7xl mx-auto 
          rounded-3xl 
          overflow-hidden 
          flex flex-col md:flex-row
       
          bg-contain bg-right bg-no-repeat
          min-h-[420px]
        
        "
        style={{
    backgroundImage: `url(${ASSETS.MOBILE_HAND})`,
  }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFDFDF] via-[#FFFCFC] to-[#FFD5D6] opacity-50"></div>
        {/* LEFT DETAILS */}
        <div className="flex-1 p-8 md:p-14 flex flex-col gap-8">
          {/* CARD 1 */}
          <div className="flex gap-5 items-start bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#FF4C4C] to-[#C70000] flex items-center justify-center shadow">
              <Rocket className="text-white w-5 h-5" />
            </div>

            <div>
              <H2 className="font-semibold text-gray-900 text-xl">
                Ultra-Fast Processing
              </H2>
              <P className="text-gray-600 text-sm leading-relaxed max-w-xs font-light">
                Over 99% of withdrawals processed within 24 hours, based on
                verified 2025 internal performance data.
              </P>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex gap-5 items-start bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#FF4C4C] to-[#C70000] flex items-center justify-center shadow">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>

            <div>
              <H2 className="font-semibold text-gray-900 text-xl">
                Secure & Transparent
              </H2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs font-light">
                Tier 1 banking and custody partners keep your funds protected at
                every stage.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex gap-5 items-start bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#FF4C4C] to-[#C70000] flex items-center justify-center shadow">
              <Banknote className="text-white w-5 h-5" />
            </div>

            <div>
              <H2 className="font-semibold text-gray-900 text-xl">Effortless Access</H2>
              <P className="text-gray-600 text-sm leading-relaxed max-w-xs font-light">
                Enjoy quick withdrawals with no hidden fees and a smooth,
                seamless process.
              </P>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE LAYER */}
        <div
          className="
            relative flex-1
            hidden md:flex
          "
        >
          {/* LIVE STATUS CARD */}
          <div className="absolute left-10 bottom-30 bg-white rounded-2xl shadow-lg p-4 flex gap-3 items-center">
            <img
              src={ASSETS.AVATAR}
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <P className="text-gray-500  font-light text-sm">
                Premier Markets
              </P>
              <P className="text-sm font-semibold text-gray-900">John Smith</P>
              <P className="text-xs font-medium text-red-600">
                100% withdrawal completed
              </P>
              <span className="block h-1 rounded w-full bg-gradient-to-r from-[#FF0000] to-[#FFC7C7]"></span>
            </div>
          </div>

          {/* MASTERCARD TAG */}
          <div className="absolute right-40 top-40">
            <img src={ASSETS.MASTERCARD_COLORED} className="h-ful w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
