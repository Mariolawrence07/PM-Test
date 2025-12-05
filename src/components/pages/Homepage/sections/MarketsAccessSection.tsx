import { H2, P } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ASSETS } from "@/config/assest";
const marketTypes = [
  {
    id: "forex",
    title: "Forex",
    description:
      "Trade the world’s largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs.",
    icon: ASSETS.COIN,
  },
  {
    id: "stocks",
    title: "Stocks",
    description:
      "From Wall Street to global tech leaders, follow the world’s leading companies and react to market moves in real time.",
    icon: ASSETS.GRAPH,
  },
  {
    id: "indices",
    title: "Indices",
    description:
      "Trade major global indices with deep liquidity, precise execution, and competitive spreads across key markets.",
    icon: ASSETS.ANALYTICS,
  },
  {
    id: "commodities",
    title: "Commodities",
    description:
      "Tap into global demand and supply trends by trading essential resources such as oil, gas, and agricultural products.",
    icon: ASSETS.EARTH,
  },
];

const trustIndicators = [
  {
    id: 1,
    icon: ASSETS.DEPOSIT,
    name: "$0 Deposit Fees",
  },
  {
    id: 2,
    icon: ASSETS.SPREAD,
    name: "Spreads from 0.0 pips",
  },
  {
    id: 3,
    icon: ASSETS.SECURE,
    name: "Secure Funds",
  },
];

export function MarketsAccessSection() {
  return (
    <section
      className="py-20 bg-black relative max-h-full max-w-full overflow-hidden"
      style={{
        backgroundImage: `
      url('/Ellipse.svg'),
      url('/Rectangles.svg'),
      url('/BottomRectangle.svg')
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     

      <div className="container mx-auto px-4 lg:px-8 ">
        {/* Header */}
        <div className="text-center ">
          <H2 className="text-4xl md:text-5xl lg:text-[62px] font-bold text-white">
            Access <span className="text-[#E31E24]">17,000+</span>
            <br />
            markets all in one
          </H2>
          <P className="text-muted-foreground max-w-2xl mx-auto text-white">
            Trade forex, shares, indices, and commodities with competitive
            spreads, deep liquidity, and seamless execution.
          </P>
        </div>

        {/* trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto my-16">
          {trustIndicators.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center gap-3 p-6  b-pmred rounded-full bg-gradient-r from[#6F0307]-to-[#6F0307]"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-6 h-6 object-contain"
              />
              <span className="font-extralight text-sm text-center text-white">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Market Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
          {marketTypes.map((market) => (
            <div
              key={market.id}
              className="bg-white b-pmred rounded-[40px] p-6 hover:shadow-lg 
                 hover:-translate-y-4 transition-transform duration-300 cursor-pointer
                 flex flex-col h-full group"
            >
              <div className="flex flex-col space-y-1 grow items-start">
                {/* Icon */}
                <div className="text-4xl">
                  <img
                    src={market.icon}
                    alt={market.title}
                    className="mx-auto"
                  />
                </div>

                {/* Title */}
                <H2 className="text-2xl font-bold text-[#1F1F1F] text-center py-4">
                  {market.title}
                </H2>

                {/* Separator */}
                <Separator className="bg-[#D2D2D2]" />

                {/* Description */}
                <P className="text-muted-foreground text-sm font-light text-[#1F1F1F]">
                  {market.description}
                </P>
              </div>

              {/* Arrow Circle at bottom */}
              <div className="mt-2 w-10 h-10 rounded-full bg-[#151515]/15 flex items-center justify-center group-hover:bg-red-600 transition-colors ">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8586 2.9209L4.1736 14.6059"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.8586 11.4927V2.9209H7.28682"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
