import Link from "next/link";
import React from "react";

type PageFooterProps = {};

const PageFooter = (props: PageFooterProps) => {
  return (
    <footer className="hidden md:flex px-6 h-16 md:text-base 2xl:text-2xl w-full justify-between font-medium gap-8">
      <Link
        href="mailto:hello@almostsummer.com"
        className="text-foreground hover:text-muted-foreground"
      >
        hello@almostsummer.com
      </Link>
      <a href="https://www.instagram.com/almostsummer" target="_blank" className="text-foreground hover:text-foreground">
        Instagram
      </a>
    </footer>
  );
};

export default PageFooter;
