// app/components/Navbar.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="h-16 bg-penn-red-700 flex items-center justify-between px-6 shadow-md">
      <div className="flex items-center gap-3">
        <Image
          src="/LOGO.svg"
          alt="Logo"
          width={50}
          height={50}
          priority
        />
        <span className="text-white font-semibold text-lg">Sankranthi-IIESTS</span>
      </div>
      <div className="flex gap-6 text-white text-sm font-medium">
        <Link href="/bhogi">Bhogi</Link>
        <Link href="/sankranti">Sankranti</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </nav>
  );
}
