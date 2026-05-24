import { cn } from "@/lib/utils";

export function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-nude-light px-6 py-2 font-display italic text-nude text-lg",
        className,
      )}
    >
      {children}
    </span>
  );
}
