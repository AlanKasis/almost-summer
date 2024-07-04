import PageContent from "@/components/page-content";
import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {};

const Creative = (props: Props) => {
  return (
    <PageContent
      title={
        <div className="flex flex-wrap items-center">
          P002 <ArrowRight className="mx-1" /> Creative Production
        </div>
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
