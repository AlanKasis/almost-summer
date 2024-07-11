import PageContent from "../../components/page-content";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <PageContent
      title={<div className="flex flex-wrap items-center">Contact</div>}
      description={
        <>
          Almost Summer inquiries:
          <br />
          <br />
          <a href="mailto:hello@almostsummer.com" className="underline">
            hello@almostsummer.com
          </a>
        </>
      }
    />
  );
};

export default Contact;
