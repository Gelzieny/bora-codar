'use client';

import Link from "next/link";
import Image from "next/image";

import { NavItem } from "./nav-item";

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Projetos', href: '/projects' }
];


export function Header() {
  return (
    <header className="absolute top-0 z-10 w-full h-20 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo DevStage "
            width={50}
            height={40}        
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
}