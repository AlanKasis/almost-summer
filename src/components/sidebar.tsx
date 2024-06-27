import Link from "next/link";
import React from "react";

type SidebarProps = {};

const Sidebar = (props: SidebarProps) => {
  return (
    <nav
      className="grid gap-8 text-2xl font-medium"
      x-chunk="dashboard-04-chunk-0"
    >
      <Link href="/info" className="text-foreground hover:text-muted-foreground">Info</Link>
      <Link href="/creative" className="text-foreground hover:text-muted-foreground">Creative Production</Link>
      <Link href="/talent" className="text-foreground hover:text-muted-foreground">Talent Management</Link>
      <Link href="/ventures" className="text-foreground hover:text-muted-foreground">Ventures</Link>
    </nav>
  );
};

export default Sidebar;
