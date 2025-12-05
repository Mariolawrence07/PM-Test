import { Separator } from "@/components/ui/separator";
import { P } from "@/components/ui/typography";
import { Mail, RefreshCcw } from "lucide-react";

type Testimonial = {
  name: string;
  initials: string;
  text: string;
  icon?: "mail" | "refresh";
};

const testimonials: Testimonial[] = [
  {
    initials: "AK",
    name: "Adam Keller",
    text: "I’m new in trading and I really like that Premier let me start small. I can trade crypto and few other assets easy. Withdrawals are quick too. Help Center is simple to use and I learned a lot from there.",
    icon: "refresh",
  },
  {
    initials: "LV",
    name: "Lucas Vermeer",
    text: "Premier works well for me. KYC was fast and support people (Thx millions!) helped me right away when I had a question. I was able to deposit and start trading in same day. Withdrawal came to my bank after 2 days. All smooth.",
    icon: "refresh",
  },
  {
    initials: "DL",
    name: "David Lorens",
    text: "Been using Premier for about 3 months now. Card deposits go through right away and show in balance within a minute. I withdraw my profit each month and it’s always in my bank by end of day. Very happy.",
    icon: "mail",
  },
  {
    initials: "ML",
    name: "Marco Lazzari",
    text: "My experience with PM is perfect so far. Payouts come same day few hours max. Works good with both crypto and credit card. You can take money out many times per day and no hidden fees. Spreads are ok too 🙂",
    icon: "mail",
  },
  {
    initials: "PI",
    name: "Petar Ilic",
    text: "I think Premier’s trading cost are low compare to others. Spreads are good on most pairs, deposit is free, for withdraw they have a small fee but it’s fine. Thanks guys",
    icon: "refresh",
  },
  {
    initials: "MR",
    name: 'Mark "Clips" Renard',
    text: "Premier is a serious broker. Web platform looks nice and runs good. Support reply quick and helpful. Sometimes small slippage in busy time but nothing crazy. Commissions are low so I stay here.",
    icon: "mail",
  },
  {
    initials: "TA",
    name: "TradeAce92",
    text: "Good service 🙂 Never had a single problem with withdraw. Usually takes under 24 hours. You get update when it’s submitted and when it’s done. Got many assets to trade and the spreads are not bad. And mT5 Thank you!",
    icon: "mail",
  },
  {
    initials: "SK",
    name: "Shivani Kaur",
    text: "Multiple withdraws made, all success. Used both bank and international transfer. Also few friends joined from my referral and no issue for them. Been here long time, still all fine.",
    icon: "mail",
  },
  {
    initials: "MD",
    name: "Mateusz Durek",
    text: "Deposit and withdraws are fast. One time my payout came before my bank even show the deduction lol. Trade speed is good and data feed fast too. Feels like pro level broker.",
    icon: "mail",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#FF000038]/22 to-[#FF000000]">
      {/* HEADER */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          What <span className="text-red-600">Premier</span> Traders <br />
          are saying about us
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Join a growing community of professionals who rely on our platform to
          trade smarter every day.
        </p>

        {/* NAV BUTTONS */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <div className="w-2 h-2 border-l-2 border-b-2 border-gray-600 rotate-45"></div>
          </button>

          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <div className="w-2 h-2 border-r-2 border-b-2 border-gray-600 -rotate-45"></div>
          </button>
        </div>
      </div>

      {/* MASONRY LAYOUT */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 xl:columns-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                mb-6 
                break-inside-avoid 
                b-pmred
                rounded-2xl 
                p-6 
                bg-white 
                shadow-sm 
                hover:shadow-md 
                transition
                flex flex-col justify-between
              "
            >
              <P className="text-gray-700 leading-relaxed mb-6 font-light">
                {t.text}
              </P>

              <Separator className="b-pmred mb-8" />
              <div className="flex items-center justify-between">
                {/* AVATAR + NAME */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium">
                    {t.initials}
                  </div>
                  <span className="font-semibold text-gray-900">{t.name}</span>
                </div>

                {/* ICON */}
                {t.icon === "mail" && <Mail className="text-red-600 w-5 h-5" />}
                {t.icon === "refresh" && (
                  <RefreshCcw className="text-red-600 w-5 h-5" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
