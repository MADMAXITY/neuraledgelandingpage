"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="container-page h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="NeuralEdge" width={112} height={112} className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:opacity-100 transition-opacity duration-200 ${
                pathname === item.href ? "opacity-100" : "opacity-80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact#book"
            className="button-primary"
            title="Fast 15–20 min call. We map one workflow and share templates."
          >
            Book a call
          </Link>
        </nav>

        <div className="md:hidden">
          <Link
            href="/contact#book"
            className="button-primary"
            title="Fast 15–20 min call. We map one workflow and share templates."
          >
            Book
          </Link>
        </div>
      </div>
    </header>
  );
} 