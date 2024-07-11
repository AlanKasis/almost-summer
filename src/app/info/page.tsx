import PageContent from "@/components/page-content";
import React from "react";

type Props = {};

const Info = (props: Props) => {
  return (
    <PageContent
      title={<div className="flex flex-wrap items-center">Info</div>}
      description={
        <>
          Almost Summer is a creative production and talent management company.
          <br />
          <br />
          Our initiatives span industries, including entertainment, film,
          fashion, technology, sports, and philanthropy.
        </>
      }
    />
  );
};

export default Info;
