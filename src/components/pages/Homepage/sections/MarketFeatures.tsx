import { marketDataPreview } from "../../../../data/market-data";
import { MarketCard } from "../../../ui/MarketCard";

export default function MarketFeatures() {
  const handleClick = (id: number) => {
    console.log("clicked", id);
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-16">
      {marketDataPreview.slice(0, 4).map((item) => (
        <MarketCard
          key={item.id}
          data={item}
          onClick={handleClick}
          className="rounded-full shadow-sm border-none "
        />
      ))}
    </div>
  );
}
