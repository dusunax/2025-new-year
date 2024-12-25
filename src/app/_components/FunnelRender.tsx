"use client";
import { useFunnel } from "@use-funnel/browser";
import { FunnelProps } from "@/context/context";
import SetUser from "./SetUser";
import ChooseConcepts from "./ChooseConcepts";
import ImageGenerate from "./ImageGenerate";
import SetMessage from "./SetMessage";
import Start from "./Start";
import SaveImage from "./SaveImage";

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
            onNext={(props) => history.push("setUser", props)}
          />
        )}
        setUser={({ context, history }) => (
          <SetUser
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
            onNext={(props) => history.push("setMessage", props)}
            goBack={() => history.back()}
          />
        )}
        setMessage={({ context, history }) => (
          <SetMessage
            {...context}
            onNext={(props) => history.push("saveImage", props)}
            goBack={() => history.back()}
          />
        )}
        saveImage={({ context, history }) => (
          <SaveImage
            {...context}
            goBack={() => history.back()}
          />
        )}
      />
    </>
  );
}
