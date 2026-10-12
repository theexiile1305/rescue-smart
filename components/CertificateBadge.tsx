import BadgeCheckIcon from "@/components/icons/BadgeCheckIcon";

interface CertificateBadgeProps {
  /** ISO date string. When omitted, the badge shows the general validity rule instead of a computed countdown. */
  issueDate?: string;
  /** Validity in months; null means unlimited (e.g. the Führerschein-Bescheinigung). */
  validityMonths: number | null;
  label?: string;
}

function monthsBetween(from: Date, to: Date): number {
  return (
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth())
  );
}

export function CertificateBadge({
  issueDate,
  validityMonths,
  label = "Zertifikatsgültigkeit",
}: CertificateBadgeProps) {
  if (validityMonths == null) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-sand-300 bg-paper-muted px-5 py-4">
        <BadgeCheckIcon className="h-6 w-6 shrink-0 text-primary-800" />
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-primary-700">
            {label}
          </p>
          <p className="text-sm font-medium text-slate-700">
            Unbegrenzt gültig — kein Ablaufdatum
          </p>
        </div>
      </div>
    );
  }

  if (!issueDate) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-sand-300 bg-paper-muted px-5 py-4">
        <BadgeCheckIcon className="h-6 w-6 shrink-0 text-primary-800" />
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-primary-700">
            {label}
          </p>
          <p className="text-sm font-medium text-slate-700">
            {validityMonths} Monate gültig ab Ausstellungsdatum
          </p>
        </div>
      </div>
    );
  }

  const issued = new Date(issueDate);
  const now = new Date();
  const elapsedMonths = monthsBetween(issued, now);
  const remainingMonths = validityMonths - elapsedMonths;
  const progress = Math.min(
    100,
    Math.max(0, (elapsedMonths / validityMonths) * 100),
  );

  let status: string;
  if (remainingMonths <= 0) {
    status = "Abgelaufen — Fortbildung erforderlich";
  } else if (remainingMonths <= 2) {
    status = `Läuft bald ab — noch ${remainingMonths} Monat(e)`;
  } else {
    status = `Gültig — noch ${remainingMonths} Monate`;
  }

  return (
    <div className="rounded-xl border border-sand-300 bg-paper-muted px-5 py-4">
      <div className="flex items-center gap-3">
        <BadgeCheckIcon className="h-6 w-6 shrink-0 text-primary-800" />
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-primary-700">
            {label}
          </p>
          <p className="text-sm font-medium text-slate-700">{status}</p>
        </div>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-sand-300">
        <div
          className="h-full rounded-full bg-accent-600"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
