import { Button } from "@/components/ui/button";
import { H2, P } from "@/components/ui/typography";
import { ASSETS } from "@/config/assest";
import { ArrowRight, Play } from "lucide-react";

export default function MarketInsights() {
  return (
    <section className="py-24 bg-white">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between mb-10">
        <div>
          <P className="text-red-600 font-medium mb-1">Daily Updates</P>

          <H2 className="text-3xl md:text-5xl font-bold">
            Everything you need to trade the markets
          </H2>
        </div>

        <button className="flex items-center gap-1 text-red-600 font-semibold text-sm hover:underline">
          View all <ArrowRight size={18} />
        </button>
      </div>

      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT ARTICLE CARD */}
        <div className="rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.05)] bg-white">
          <img src={ASSETS.MEDIA} className="w-full h-48 object-cover" />

          <div className="p-6">
            <P className="text-xs text-gray-500 mb-2">03 October 2025</P>

            <H2 className="font-semibold text-lg leading-snug mb-2">
              Gulf markets end mixed on Ukraine ceasefire hopes, tariff fears
            </H2>

            <P className="text-sm text-gray-600 leading-relaxed mb-4">
              Stock markets in the Gulf ended mixed on Wednesday, buoyed by
              Ukraine's readiness to support a proposal for...
            </P>

            <Button className="text-red-600 font-semibold text-sm hover:underline">
              Read more
            </Button>
          </div>
        </div>

        {/* MAIN VIDEO CARD */}
        <div className="col-span-1 md:col-span-2 relative rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.05)] bg-black/90">
          <img
            src={ASSETS.INSIGHT_VIDEO}
            className="w-full h-[350px] md:h-full object-cover opacity-90"
          />

          <button
            className="
              absolute inset-0 m-auto w-20 h-20 rounded-full bg-red-600/90
              flex items-center justify-center shadow-lg cursor-pointer
            "
          >
            <Play className="text-white w-10 h-10" />
          </button>
        </div>
      </div>

      {/* LOWER FEATURE BLOCK */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div
          className="
            rounded-2xl overflow-hidden
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            flex flex-col md:flex-row
            md:w-full
              
              bg-no-repeat bg-cover bg-right
              h-56 md:h-auto text-white
          "
          style={{
            backgroundImage: `url(${ASSETS.INSIGHT})`,
          }}
        >
          {/* TEXT */}
          <div className="flex-1 p-8 md:p-12">
            <h3 className="font-semibold text-lg mb-3">
              Premier Market – Market Cap Weighted PR (BKP)
            </h3>

            <p className="text-sm text-gray-200 max-w-lg mb-6 leading-relaxed">
              Stay ahead of the latest tech trends with our algorithmically
              selected portfolio of the 15 top tech stocks each month.
            </p>

            <div className="flex gap-6 text-xs text-gray-400 font-medium">
              <span>Google</span>
              <span>Trending</span>
              <span>investing.com</span>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
             
             
            "
          />
        </div>
      </div>
    </section>
  );
}
