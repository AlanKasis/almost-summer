'use client'

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type SidebarProps = {};

const Sidebar = (props: SidebarProps) => {
  const pathname = usePathname();

  return (
    <nav
      className="grid gap-8 md:gap-6 2xl:gap-8 text-2xl md:text-base 2xl:text-xl"
      x-chunk="dashboard-04-chunk-0"
    >
      <Link href="/info" className={`${pathname == '/info' ? "text-muted-foreground" : "text-foreground"}`}>Info</Link>
      <Link href="/creative" className={`${pathname == '/creative' ? "text-muted-foreground" : "text-foreground"}`}>Design + Creative Production</Link>
      <Link href="/talent" className={`${pathname == '/talent' ? "text-muted-foreground" : "text-foreground"}`}>Management</Link>
      <Link href="/film-and-media" className={`${pathname == '/film-and-media' ? "text-muted-foreground" : "text-foreground"}`}>Film + Media</Link>
      <Link href="/special-projects" className={`${pathname == '/special-' ? "text-muted-foreground" : "text-foreground"}`}>Special Projects + Advisory</Link>
      <Link href="/work" className={`${pathname == '/work' ? "text-muted-foreground" : "text-foreground"}`}>Select Work</Link>
      <Link href="/contact" className={`${pathname == '/contact' ? "text-muted-foreground" : "text-foreground"}`}>Contact</Link>
    </nav>
  );
};

export default Sidebar;
