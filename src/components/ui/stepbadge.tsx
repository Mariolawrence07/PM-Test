
/* STEP BADGE SUBCOMPONENT */
export function StepBadge({ number, label }: { number: number; label: string }) {
  return (
    <div className="flex items-center gap-2 mt-4">
      {/* Number Circle */}
      <div
        className="
          w-16 h-16 flex items-center justify-center rounded-full text-white
          bg-linear-to-r from-[#FF3A3A] to-[#C70000]
          shadow-[0_0_12px_rgba(255,0,0,0.45)]
          font-semibold 
        "
      >
        {number}
      </div>

      {/* Label */}
      <span className="text-3xl font-semibold">{label}</span>
    </div>
  );
}
