import PageContent from "@/components/page-content";
import React from "react";
import { ArrowRight } from "lucide-react";

type Props = {};

const Ventures = (props: Props) => {
  return (
    <PageContent
      title={
        <div className="flex flex-wrap items-center">
          P004{" "}
          <ArrowRight className="mx-1" />{" "}
          Ventures
        </div>
      }
      description={
        <>Almost Summer allocates capital into growth-oriented opportunities.</>
      }
    />
  );
};

export default Ventures;
