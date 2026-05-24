type Props = { className?: string; size?: number };

export function CircleArrow({ className, size = 40 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1" />
      <path
        d="M14 20h12m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
