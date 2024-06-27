import Link from "next/link";
import React from "react";

type PageFooterProps = {};

const PageFooter = (props: PageFooterProps) => {
  return (
    <footer className="hidden md:flex px-6 h-16 text-lg font-medium gap-8">
      <Link
        href="mailto:example@gmail.com"
        className="text-foreground hover:text-muted-foreground"
      >
        Contact
      </Link>
      <Link
        href="#"
        className="text-foreground hover:text-muted-foreground"
      >
        Instagram
      </Link>
      <Link
        href="#"
        className="text-foreground hover:text-muted-foreground"
      >
        Twitter
      </Link>
    </footer>
  );
};

export default PageFooter;
