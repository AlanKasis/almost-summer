import PageContent from "@/components/page-content";
import React from "react";

type Props = {};

const Talent = (props: Props) => {
  return (
    <PageContent
      title={
        <div className="flex flex-wrap items-center">Talent Management</div>
      }
      description={
        <>Almost Summer oversees and represents diverse talent and creatives.</>
      }
    />
  );
};

export default Talent;
