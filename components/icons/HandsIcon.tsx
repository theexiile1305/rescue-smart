export default function HandsIcon({
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
        d="M7.5 12.75l3 3 7.5-7.5M3 16.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v9.75a2.25 2.25 0 01-2.25 2.25H10.5l-4.5 3v-3H5.25A2.25 2.25 0 013 16.5z"
      />
    </svg>
  );
}
