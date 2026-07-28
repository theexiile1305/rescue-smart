export default function ClockIcon({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75v5.25l3.75 2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
