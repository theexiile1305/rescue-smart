import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import ChevronIcon from "@/components/icons/ChevronIcon";
import type { FaqItem } from "@/content/faq";

interface FaqProps {
  items: FaqItem[];
  heading?: string;
  description?: string;
  id?: string;
  schema?: boolean;
}

export function Faq({
  items,
  heading = "Häufig gestellte Fragen",
  description,
  id = "faq",
  schema = true,
}: FaqProps) {
  return (
    <section
      id={id}
      className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-primary-800 sm:text-4xl">
            {heading}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              {description}
            </p>
          )}
        </div>
        <div className="mt-12 space-y-4">
          {items.map((item, index) => (
            <details
              key={index}
              className="group rounded-2xl bg-white shadow-sm open:shadow-md"
            >
              <summary className="marker:hidden flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-4 text-left [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-semibold text-slate-900">
                  {item.question}
                </span>
                <ChevronIcon className="h-5 w-5 shrink-0 text-slate-600 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-4 text-sm leading-relaxed text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
      {schema && <JsonLd data={faqPageSchema(items)} />}
    </section>
  );
}
