import { cn } from "@/lib/utils";

export function JTLogo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn("flex flex-col leading-none", className)}>
      <span className="font-display text-nude text-3xl tracking-tight">
        <span className="italic">J</span>T
      </span>
      {!compact && (
        <>
          <span className="text-[9px] tracking-[0.3em] text-ink/80 mt-1">STUDIO JULIANA TAVARES</span>
          <span className="text-[7px] tracking-[0.25em] text-ink/50 mt-0.5 hidden md:block">
            ONDULADOS • CACHEADOS • CRESPOS
          </span>
        </>
      )}
    </div>
  );
}
