import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "../ui/button";

interface NavItem {
  label: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: "Trading", hasDropdown: true },
  { label: "Discover", hasDropdown: true },
  { label: "Promotions", hasDropdown: true },
  { label: "Company", hasDropdown: true },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"personal" | "institutional">(
    "personal"
  );

  return (
    <nav className="bg-white ">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top thin bar */}
        <div className="flex items-center justify-between h-4 text-[11px] leading-none border-b-2 border-[#e4e4e4] py-4">
          {/* Left: Personal / Institutional */}
          <div className="flex items-center ">
            {/* Personal Tab */}
            <a
              onClick={() => setActiveTab("personal")}
              className={`relative font-medium ml-2 py-2 ${
                activeTab === "personal"
                  ? "text-red-700"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Personal
              {activeTab === "personal" && (
                <span className="absolute top-7.5 left-0 w-full h-0.5 bg-red-600"></span>
              )}
            </a>

            <span className="block h-3 border-r-2 border-gray-200 mx-2"></span>

            {/* Institutional Tab */}
            <a
              onClick={() => setActiveTab("institutional")}
              className={`relative font-medium py-2 ${
                activeTab === "institutional"
                  ? "text-red-700"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Institutional
              {activeTab === "institutional" && (
                <span className="absolute top-7.5 left-0 w-full h-0.5 bg-red-600"></span>
              )}
            </a>
          </div>

          {/* Right: WebTrader / Support / Open Demo / Lang */}
          <div className="hidden md:flex items-center space-x-5 text-[11px]">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              WebTrader
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Support
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Open Demo
            </a>

            {/* Language selector */}
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <div className="w-5 h-5 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center">
                <span className="text-[10px]">🇦🇪</span>
              </div>
              <span className="text-[11px]">EN</span>
            </button>
          </div>
        </div>

        {/* Main nav row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/Logo.svg" alt="Premier Markets" className="h-8 w-auto" />
          </a>
          {/* Left: logo + nav items */}
          <div className="flex items-center space-x-10">
            {/* Desktop nav items */}
            <div className="hidden md:flex items-center space-x-6 text-[13px]">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-3 h-3 stroke-[2.5]" />
                  )}
                </button>
              ))}

              <a
                href="#"
                className="flex items-center space-x-1 text-red-600 hover:text-red-700 font-medium"
              >
                <span>Partner with us</span>
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Register + profile icon on desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className=" bg-red-600 text-white px-5 font-semibold group relative overflow-hidden flex items-center gap-2">
              Register
              <ArrowRight className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
            <button>
              {/* simple user icon  */}
              <svg
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.35"
                  d="M12.0007 13.3333C15.6825 13.3333 18.6673 10.3486 18.6673 6.66667C18.6673 2.98477 15.6825 0 12.0007 0C8.31875 0 5.33398 2.98477 5.33398 6.66667C5.33398 10.3486 8.31875 13.3333 12.0007 13.3333Z"
                  fill="url(#paint0_linear_3787_43714)"
                />
                <path
                  d="M20 17.333H4C1.79067 17.333 0 19.1237 0 21.333C0 23.5423 1.79067 25.333 4 25.333H20C22.2093 25.333 24 23.5423 24 21.333C24 19.1237 22.2093 17.333 20 17.333Z"
                  fill="url(#paint1_linear_3787_43714)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3787_43714"
                    x1="7.50065"
                    y1="-0.171654"
                    x2="15.2033"
                    y2="11.1555"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFDDDE" />
                    <stop offset="1" stop-color="#ED1D25" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_3787_43714"
                    x1="12"
                    y1="17.333"
                    x2="12"
                    y2="25.333"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E4030C" />
                    <stop offset="1" stop-color="#ED1D25" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3 text-sm">
            {/* Main nav */}
            {navItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 py-2"
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
            <a
              href="#"
              className="flex items-center justify-between text-red-600 hover:text-red-700 py-2"
            >
              <span>Partner with us</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            {/* Top‑right items + CTA */}
            <div className="pt-3 border-t border-gray-200 space-y-2">
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-1"
              >
                WebTrader
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-1"
              >
                Support
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-1"
              >
                Open Demo
              </a>
              <button className="w-full mt-2 px-5 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
