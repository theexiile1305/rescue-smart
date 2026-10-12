export default function BadgeCheckIcon({
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
        d="M9 12.75l2.25 2.25L15 9.75M12 2.25l2.09 1.26 2.44-.29 1.02 2.24 2.24 1.02-.29 2.44L21 11l-1.26 2.09.29 2.44-2.24 1.02-1.02 2.24-2.44-.29L12 21.75l-2.09-1.26-2.44.29-1.02-2.24-2.24-1.02.29-2.44L3 11l1.26-2.09-.29-2.44 2.24-1.02 1.02-2.24 2.44.29L12 2.25z"
      />
    </svg>
  );
}
