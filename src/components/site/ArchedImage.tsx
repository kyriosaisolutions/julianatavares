import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  bg?: "sage" | "sage-light" | "sage-dark" | "nude" | "nude-light" | "cream";
  className?: string;
  imgClassName?: string;
  offset?: number; // px to offset the image down into the arch bg
};

const bgMap = {
  sage: "bg-sage",
  "sage-light": "bg-sage-light",
  "sage-dark": "bg-sage-dark",
  nude: "bg-nude",
  "nude-light": "bg-nude-light",
  cream: "bg-cream",
};

export function ArchedImage({ src, alt, bg = "sage-light", className, imgClassName, offset = 24 }: Props) {
  return (
    <div className={cn("relative arch-shape group", bgMap[bg], className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ marginTop: offset }}
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
          imgClassName,
        )}
      />
    </div>
  );
}
