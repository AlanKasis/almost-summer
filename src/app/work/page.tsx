import PageContent from "@/components/page-content";
import React from "react";

type Props = {};

const Work = (props: Props) => {
  return (
    <PageContent
      title={
        <div className="flex flex-wrap items-center">Select Work</div>
      }
      description={
        <>Almost Summer&apos;s select work provided <a href="https://drive.google.com/file/d/18JaBaMpY5nsTWqrP4Rcn4gm1HckX7u2T/view?usp=sharing" className="underline">here</a>.</>
      }
    />
  );
};

export default Work;
