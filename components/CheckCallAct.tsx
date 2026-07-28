import type { CheckCallActSteps } from "@/content/checkCallAct";
import { iconMap } from "@/components/icons";

interface CheckCallActProps {
  title?: string;
  steps: CheckCallActSteps;
}

export function CheckCallAct({
  title = "So einfach geht's",
  steps,
}: CheckCallActProps) {
  return (
    <div className="rounded-2xl border border-sand-300 bg-paper-muted p-6 sm:p-8">
      <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary-700">
        {title}
      </p>
      <ol className="mt-6 grid gap-6 sm:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon];
          return (
            <li key={step.label} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-800 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-primary-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="font-display text-lg font-semibold text-primary-800">
                {step.label}
              </p>
              {step.description && (
                <p className="text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
