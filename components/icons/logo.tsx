import clsx from "clsx";

export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CheapWatchStore logo"
      viewBox="0 0 100 100"
      {...props}
      className={clsx("h-4 w-4", props.className)}
    >
      {/* Ārējais aplis */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      {/* Ciparnīca */}
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="white"
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* 12, 3, 6, 9 o'clock marķieri */}
      <rect x="48" y="12" width="4" height="8" fill="currentColor" rx="2" />
      <rect x="80" y="48" width="8" height="4" fill="currentColor" rx="2" />
      <rect x="48" y="80" width="4" height="8" fill="currentColor" rx="2" />
      <rect x="12" y="48" width="8" height="4" fill="currentColor" rx="2" />

      {/* Minūšu rādītājs */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Stundu rādītājs */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Centrs */}
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}
