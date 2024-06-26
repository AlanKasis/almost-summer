import Link from "next/link";
import React from "react";

type PageFooterProps = {};

const PageFooter = (props: PageFooterProps) => {
  return (
    <footer className="hidden md:flex px-6 h-16 text-lg text-muted-foreground font-medium gap-8">
      <Link
        href="mailto:example@gmail.com"
        className=""
      >
        Contact
      </Link>
      <Link
        href="#"
        className=""
      >
        Instagram
      </Link>
      <Link
        href="#"
        className=""
      >
        Twitter
      </Link>
    </footer>
  );
};

export default PageFooter;
