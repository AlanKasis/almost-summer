"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Package2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";

type Props = {};

const PageHeader = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header className="sticky mb-[-4rem] md:mb-0 static top-0 flex h-16 md:h-44 items-center gap-4 bg-background justify-between  md:justify-end px-4 md:px-6">
      <div className="hidden md:flex h-full w-full items-center justify-start border-b-2 md:border-0 border-black">
        <span className="mt-12 text-3xl font-medium">Almost Summer</span>
      </div>
      <a
        href="/"
        className="md:hidden rounded-full border border-black w-10 h-10 flex justify-center items-center"
      >
        AS
      </a>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-8 w-8" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="">
          <DialogTitle className="sr-only">Menu</DialogTitle>
          <DialogDescription className="sr-only">Side Menu</DialogDescription>
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/info"
              className={`${pathname == '/info' ? "text-muted-foreground" : "text-foreground"}`}
              onClick={() => setIsOpen(false)}
            >
              Info
            </Link>
            <Link
              href="/creative"
              className={`${pathname == '/creative' ? "text-muted-foreground" : "text-foreground"}`}
              onClick={() => setIsOpen(false)}
            >
              Design + Creative Production
            </Link>
            <Link
              href="/talent"
              className={`${pathname == '/talent' ? "text-muted-foreground" : "text-foreground"}`}
              onClick={() => setIsOpen(false)}
            >
              Talent Management
            </Link>
            <Link
              href="/film-and-media"
              className={`${pathname == '/film-and-media' ? "text-muted-foreground" : "text-foreground"}`}
              onClick={() => setIsOpen(false)}
            >
              Film + Media
            </Link>
            <Link
              href="/investments"
              className={`${pathname == '/investments' ? "text-muted-foreground" : "text-foreground"}`}
              onClick={() => setIsOpen(false)}
            >
              Investments
            </Link>
            <Link
              href="/work"
              className={`${pathname == '/work' ? "text-muted-foreground" : "text-foreground"}`}
              onClick={() => setIsOpen(false)}
            >
              Select Work
            </Link>
            <Link
              href="/contact"
              className={`${pathname == '/contact' ? "text-muted-foreground" : "text-foreground"}`}
              onClick={() => setIsOpen(false)}
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
