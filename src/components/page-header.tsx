"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Package2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type Props = {};

const PageHeader = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky md:static top-0 flex h-16 md:h-52 items-center gap-4 bg-background justify-end px-4 md:px-6">
      <div className="hidden md:flex h-full w-full items-center justify-start border-b-2 border-black">
        <span className="text-3xl font-medium">Almost Summer</span>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-8 w-8" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="absolute top-4 left-4 p-1 flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Almost Summer</span>
            </Link>
            <Link
              href="/info"
              className="text-muted-foreground hover:text-foreground"
            >
              Info
            </Link>
            <Link
              href="/creative"
              className="text-muted-foreground hover:text-foreground"
            >
              Creative Production
            </Link>
            <Link
              href="/talent"
              className="text-muted-foreground hover:text-foreground"
            >
              Talent Management
            </Link>
            <Link
              href="/investments"
              className="text-muted-foreground hover:text-foreground"
            >
              Investments
            </Link>
            <Link
              href="mailto:example@gmail.com"
              className="text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Twitter
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default PageHeader;
