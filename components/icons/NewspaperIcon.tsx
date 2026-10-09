export default function NewspaperIcon({
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
        d="M4.5 5.25h9a1.5 1.5 0 011.5 1.5v11.25a1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5V8.25a1.5 1.5 0 00-1.5-1.5h-1.5M4.5 5.25v12.75a1.5 1.5 0 001.5 1.5h9M4.5 5.25a1.5 1.5 0 011.5-1.5h6a1.5 1.5 0 011.5 1.5M7.5 9h4.5M7.5 12h4.5M7.5 15h3"
      />
    </svg>
  );
}
