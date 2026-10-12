export default function PhoneIcon({
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
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372a1.5 1.5 0 00-1.006-1.417l-3.4-1.213a1.5 1.5 0 00-1.618.42l-.72.867a11.25 11.25 0 01-5.09-5.09l.867-.72a1.5 1.5 0 00.42-1.618l-1.213-3.4a1.5 1.5 0 00-1.417-1.006H4.5A2.25 2.25 0 002.25 6.75z"
      />
    </svg>
  );
}
