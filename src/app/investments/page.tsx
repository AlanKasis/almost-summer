import PageContent from "@/components/page-content";
import React from "react";

type Props = {};

const Investments = (props: Props) => {
  return (
    <PageContent
      title={<div className="flex flex-wrap items-center">Investments</div>}
      description={
        <>Almost Summer allocates capital into growth-oriented opportunities.</>
      }
    />
  );
};

export default Investments;
