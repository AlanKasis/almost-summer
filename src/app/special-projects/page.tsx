import PageContent from "@/components/page-content";
import React from "react";

type Props = {};

const SpecialProjects = (props: Props) => {
  return (
    <PageContent
      title={
        <div className="flex flex-wrap items-center">
          Special Projects + Advisory
        </div>
      }
      description={
        <>
          Almost Summer structures strategic partnerships and drives
          growth-oriented opportunities.
        </>
      }
    />
  );
};

export default SpecialProjects;
