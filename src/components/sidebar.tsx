import Link from "next/link";
import React from "react";

type SidebarProps = {};

const Sidebar = (props: SidebarProps) => {
  return (
    <nav
      className="grid gap-8 text-2xl text-muted-foreground font-medium"
      x-chunk="dashboard-04-chunk-0"
    >
      <Link href="/info">Info</Link>
      <Link href="/creative">Creative Production</Link>
      <Link href="/talent">Talent Management</Link>
      <Link href="/investments">Investments</Link>
    </nav>
  );
};

export default Sidebar;
