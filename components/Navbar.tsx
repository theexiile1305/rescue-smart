"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { courseList } from "@/content/courses";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/einsatzgebiet", label: "Einsatzgebiet" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand-300 bg-paper/95 backdrop-blur-sm">
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link href="/" aria-label="Rescue Smart - Startseite">
          <Image
            src="/logo.png"
            alt="Rescue Smart"
            width={400}
            height={120}
            priority
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary-700"
            >
              Startseite
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={isServicesOpen}
              aria-controls="services-menu"
              className="flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-primary-700"
              onClick={() => setIsServicesOpen((open) => !open)}
            >
              Leistungen
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <ul
                id="services-menu"
                className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-sand-300 bg-white p-2 shadow-lg"
              >
                {courseList.map((course) => (
                  <li key={course.slug}>
                    <Link
                      href={`/${course.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-paper-muted hover:text-primary-700"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {course.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {navLinks.slice(1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-paper-muted md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="border-t border-sand-300 md:hidden">
          <ul className="space-y-1 px-4 py-3">
            <li>
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-paper-muted hover:text-primary-700"
                onClick={() => setIsOpen(false)}
              >
                Startseite
              </Link>
            </li>
            <li className="px-3 pt-3 font-mono text-xs uppercase tracking-wider text-slate-600">
              Leistungen
            </li>
            {courseList.map((course) => (
              <li key={course.slug}>
                <Link
                  href={`/${course.slug}`}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-paper-muted hover:text-primary-700"
                  onClick={() => setIsOpen(false)}
                >
                  {course.name}
                </Link>
              </li>
            ))}
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-paper-muted hover:text-primary-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
