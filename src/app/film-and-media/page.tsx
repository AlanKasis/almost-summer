import PageContent from "@/components/page-content";
import React from "react";

type FilmProps = {}

const FilmAndMedia = (props: FilmProps) => {
  return (
    <PageContent
      title={
        <div className="flex flex-wrap items-center">
          Film + Media
        </div>
      }
      description={
        <>
          Almost Summer produces and develops film and media projects.
        </>
      }
    />
  );
};

export default FilmAndMedia;
