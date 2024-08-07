import PageContent from "@/components/page-content";
import React from "react";

type Props = {};

const Creative = (props: Props) => {
  return (
    <PageContent
      title={
        <div className="flex flex-wrap items-center">Design + Creative Production</div>
      }
      description={
        <>
          Almost Summer designs and executes projects and campaigns across various sectors.
        </>
      }
    />
  );
};

export default Creative;
