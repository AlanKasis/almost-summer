import PageContent from "../../components/page-content";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <PageContent
      title="P005 -> Contact"
      description={
        <>
          Almost Summer inquiries:
          <br />
          <br />
          <a href="mailto:hello@almostsummer.com" className="underline">hello@almostsummer.com</a>
        </>
      }
    />
  );
};

export default Contact;
