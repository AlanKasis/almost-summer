"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Package2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type Props = {};

const PageHeader = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname()
  

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="sticky md:static top-0 flex h-16 md:h-44 items-center gap-4 bg-background justify-end px-4 md:px-6">
      <div className="hidden md:flex h-full w-full items-center justify-start border-b-2 border-black">
        <span className="mt-12 text-3xl font-medium">Almost Summer</span>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-8 w-8" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/info"
              className="text-foreground hover:text-muted-foreground"
            >
              Info
            </Link>
            <Link
              href="/creative"
              className="text-foreground hover:text-muted-foreground"
            >
              Creative Production
            </Link>
            <Link
              href="/talent"
              className="text-foreground hover:text-muted-foreground"
            >
              Talent Management
            </Link>
            <Link
              href="/ventures"
              className="text-foreground hover:text-muted-foreground"
            >
              Ventures
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-muted-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="w-full flex items-center justify-evenly absolute bottom-0 h-16">
            <Link
              href="mailto:hello@almostsummer.com"
              className="text-foreground hover:text-muted-foreground"
            >
              hello@almostsummer.com
            </Link>
            <Link href="#" className="text-foreground hover:text-foreground">
              Instagram
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default PageHeader;
