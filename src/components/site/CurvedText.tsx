type Props = {
  text: string;
  size?: number;
  radius?: number;
  className?: string;
  id?: string;
};

export function CurvedText({
  text,
  size = 360,
  radius = 160,
  className,
  id = "curved-path",
}: Props) {
  const c = size / 2;
  // circle path starting at top, going clockwise
  const d = `M ${c},${c - radius} a ${radius},${radius} 0 1,1 -0.01,0`;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden
    >
      <defs>
        <path id={id} d={d} fill="none" />
      </defs>
      <text
        fill="currentColor"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 16,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        <textPath href={`#${id}`} startOffset="0">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
