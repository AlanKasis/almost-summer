import PageContent from "@/components/page-content";
import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {};

const Talent = (props: Props) => {
  return (
    <PageContent
      title={
        <div className="flex flex-wrap items-center">
          P003 <ArrowRight className="mx-1" /> Talent Management
        </div>
      }
      description={<>Almost Summer oversees and represents diverse talent.</>}
    />
  );
};

export default Talent;
