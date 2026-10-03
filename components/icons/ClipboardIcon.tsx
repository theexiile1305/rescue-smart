export default function ClipboardIcon({
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
        d="M9 3.75h6a1.5 1.5 0 011.5 1.5v.75h1.5a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5H7.5v-.75a1.5 1.5 0 011.5-1.5zM9 12h6M9 15.75h6"
      />
    </svg>
  );
}
