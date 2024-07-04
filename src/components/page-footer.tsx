import Link from "next/link";
import React from "react";

type PageFooterProps = {};

const PageFooter = (props: PageFooterProps) => {
  return (
    <footer className="hidden md:flex px-6 h-16 text-lg w-full justify-between font-medium gap-8">
      <Link
        href="mailto:hello@almostsummer.com"
        className="text-foreground hover:text-muted-foreground"
      >
        hello@almostsummer.com
      </Link>
      <Link href="#" className="text-foreground hover:text-foreground">
        Instagram
      </Link>
    </footer>
  );
};

export default PageFooter;
