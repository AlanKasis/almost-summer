import PageContent from "@/components/page-content";
import React from "react";

type Props = {};

const Info = (props: Props) => {
  return (
    <PageContent
      title={<div className="flex flex-wrap items-center">Info</div>}
      description={
        <>
          Almost Summer is a creative venture and advisory firm.
          <br />
          <br />
          Our initiatives span industries including entertainment, film,
          fashion, technology, sports, and philanthropy.
          <br />
          <br />
          We design and execute projects, partnerships, and campaigns across
          various sectors, represent diverse talent, and produce film and media
          projects.
        </>
      }
    />
  );
};

export default Info;
