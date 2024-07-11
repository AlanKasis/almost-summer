import PageContent from "@/components/page-content";
import React from "react";

type Props = {};

const Creative = (props: Props) => {
  return (
    <PageContent
      title={
        <div className="flex flex-wrap items-center">Creative Production</div>
      }
      description={
        <>
          Almost Summer manages and creates projects, partnerships, and
          campaigns across various sectors.
        </>
      }
    />
  );
};

export default Creative;
