
import { ASSETS } from "@/config/assest";
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-red-500 text-white text-sm pt-5 ">
      <div className="bg-black">
        {/* PAYMENT METHODS */}
        <div className="max-w-7xl mx-auto border-b border-white/10 py-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <img src={ASSETS.PAYPAL} className="h-7 opacity-90" />
          <img src={ASSETS.MASTERCARD} className="h-7 opacity-90" />
          <img src={ASSETS.SKRILL} className="h-7 opacity-90" />
          <img src={ASSETS.APPLEPAY} className="h-7 opacity-90" />
          <img src={ASSETS.VISA}className="h-7 opacity-90" />
        </div>

        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto py-14 border-b border-white/10 px-6">
          <img src="/logowhite.svg" className="h-10 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* LOGO + DISCLAIMER */}
            <div className="md:col-span-1">
              <p className="text-gray-400 leading-relaxed max-w-xs">
                CFDs are complex instruments and come with a high risk of losing
                money rapidly due to leverage. 21.38% of retail investor
                accounts generate profits when trading CFDs with this provider.
                You should consider whether you understand how CFDs work and
                whether you can afford to take the high risk of losing your
                money.
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-4 mt-6">
                {/** FACEBOOK */}
                <div className="w-9 h-9 rounded-full bg-black border border-white/20 flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-red-500 fill-red-500" />
                </div>

                {/** LINKEDIN */}
                <div className="w-9 h-9 rounded-full bg-black border border-white/20 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-white  fill-white" />
                </div>

                {/** INSTAGRAM */}
                <div className="w-9 h-9 rounded-full bg-black border border-white/20 flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>

                {/** YOUTUBE */}
                <div className="w-9 h-9 rounded-full bg-black border border-white/20 flex items-center justify-center">
                  <Youtube className="w-4 h-4 text-gray-500  fill-white " />
                </div>

                {/** TWITTER */}
                <div className="w-9 h-9 rounded-full bg-black border border-white/20 flex items-center justify-center">
                  <Twitter className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Markets</li>
                <li>Platforms</li>
                <li>Pricing</li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Careers</li>
                <li>News & Updates</li>
                <li>Partnerships</li>
                <li>Legal Documents</li>
              </ul>
            </div>
          </div>
        </div>

        {/* LOWER DISCLAIMER TEXT */}
        <div className="max-w-5xl mx-auto py-5 text-center text-gray-400 leading-relaxed px-6">
          CFDs are complex instruments and come with a high risk of losing money
          rapidly due to leverage. 21.38% of retail investor accounts generate
          profits when trading CFDs with this provider. You should consider
          whether you understand how CFDs work and whether you can afford to
          take the high risk of losing your money.
        </div>

        {/* COMPANY LEGAL DETAILS */}
        <div className="max-w-6xl mx-auto text-center text-gray-400 leading-relaxed mt-4 px-6">
          Premier Markets Ltd, trading as Premier Markets is a company
          incorporated under company number: A000003075 in Anguilla. Our
          registered office is located at Anguilla, The Valley, Kismet House,
          Sandy Hill, PO Box P.O.Box 174The information on this site is not
          directed at residents of Russia, Afghanistan, Belgium, Canada, India,
          United States or any country or jurisdiction where such distribution
          or use would be contrary to local law, sanctions or regulation.
        </div>

        {/* COPYRIGHT BAR */}
        <div className="text-center text-gray-500 text-xs mt-10">
          Copyright © 2025 Premier Markets – All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
