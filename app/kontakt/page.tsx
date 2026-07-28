"use client";

import { useState } from "react";
import Link from "next/link";
import { business, fullAddress } from "@/content/site-config";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-primary-800 sm:text-4xl">
          Kontakt
        </h1>
        <p className="mt-4 text-slate-600">
          Haben Sie Fragen zu unseren Kursen oder möchten Sie ein individuelles
          Angebot? Schreiben Sie uns. Wir melden uns so schnell wie möglich bei
          Ihnen.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Noch unsicher, welcher Kurs passt?{" "}
          <Link
            href="/#leistungen"
            className="font-medium text-primary-700 underline hover:text-primary-800"
          >
            Zur Kursübersicht
          </Link>{" "}
          oder direkt zu unserem{" "}
          <Link
            href="/einsatzgebiet"
            className="font-medium text-primary-700 underline hover:text-primary-800"
          >
            Einsatzgebiet
          </Link>
          .
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700"
            >
              Name <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="Ihr vollständiger Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              E-Mail <span aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="ihre@email.de"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700"
            >
              Nachricht <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="Wie können wir Ihnen helfen?"
            />
          </div>

          {status === "success" && (
            <p className="text-sm text-green-600">
              Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es
              erneut.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-800 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Wird gesendet…" : "Nachricht senden"}
          </button>
        </form>

        <div className="mt-12 rounded-xl bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Direkt erreichen
          </h2>
          <dl className="mt-4 space-y-3 text-sm text-slate-600">
            <div>
              <dt className="font-medium text-slate-700">Telefon</dt>
              <dd>
                <a
                  href={`tel:${business.telephone}`}
                  className="transition-colors hover:text-primary-700"
                >
                  {business.telephoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-700">E-Mail</dt>
              <dd>
                <a
                  href={`mailto:${business.email}`}
                  className="transition-colors hover:text-primary-700"
                >
                  {business.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-700">Adresse</dt>
              <dd>{fullAddress}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
