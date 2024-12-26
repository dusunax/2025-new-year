"use client";
import { useFunnel } from "@use-funnel/browser";
import { FunnelProps } from "@/context/context";
import Start from "./Start";
import Notice from "./Notice";
import ChooseConcepts from "./ChooseConcepts";
import ImageGenerate from "./ImageGenerate/ImageGenerate";
import Share from "./Share";

export default function FunnelRender() {
  const funnel = useFunnel<FunnelProps>({
    id: "new-year-2025-funnel",
    initial: {
      step: "start",
      context: {},
    },
  });

  return (
    <>
      <funnel.Render
        start={({ context, history }) => (
          <Start
            {...context}
            onNext={(props) => history.push("notice", props)}
          />
        )}
        notice={({ context, history }) => (
          <Notice
            {...context}
            onNext={(props) => history.push("chooseConcepts", props)}
            goBack={() => history.back()}
          />
        )}
        chooseConcepts={({ context, history }) => (
          <ChooseConcepts
            {...context}
            onNext={(props) => history.push("imageGenerate", props)}
            goBack={() => history.back()}
          />
        )}
        imageGenerate={({ context, history }) => (
          <ImageGenerate
            {...context}
            onNext={(props) => history.push("share", props)}
            goBack={() => history.back()}
          />
        )}
        share={({ context, history }) => (
          <Share {...context} goBack={() => history.back()} />
        )}
      />
    </>
  );
}
