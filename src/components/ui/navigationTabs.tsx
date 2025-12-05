interface MarketNavigationTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function NavigationTabs({ activeTab, setActiveTab }: MarketNavigationTabsProps) {
  const tabs = ["Most Traded", "Commodities", "Indices", "Cryptocurrencies", "Shares", "ETFs"]

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {tabs.map((tab) => {
        const tabKey = tab.toLowerCase().replace(" ", "-")
        const isActive = activeTab === tabKey

        return (
          <button
            key={tabKey}
            onClick={() => setActiveTab(tabKey)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              isActive ? "bg-red-500 text-white" : "b-pmred text-gray-700 hover:border-gray-400"
            }`}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
