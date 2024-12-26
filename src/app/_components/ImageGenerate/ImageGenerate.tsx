"use client";
import { useEffect, useRef, useState } from "react";
import { type ImageGenerate } from "@/context/context";
import Funnel from "@/components/funnel/FunnelUi";
import { Toaster } from "@/components/ui/toaster";
import useImageGenerate from "@/hooks/use-image-generate";
import ConceptChipList from "./ConceptChipList";
import DisplayCard, { CARD_STYLE, CardAlign, CardStyle } from "./DisplayCard";
import OptionCard from "./OptionCard";

export default function ImageGenerate({
  onNext,
  goBack,
  concepts,
}: {
  onNext: (props: any) => void;
  goBack: () => void;
  concepts?: ImageGenerate["concepts"];
}) {
  const imageContainerRef = useRef<HTMLImageElement>(null);
  const { generateImage, downloadImage, loadedImage, loading, setLoading } =
    useImageGenerate({
      concepts: [],
      imageContainerRef,
    });

  useEffect(() => {
    if (!loadedImage) {
      generateImage();
    }
  }, []);

  const [message, setMessage] = useState<{
    to: string;
    from: string;
    text: string;
  }>({
    to: "",
    from: "",
    text: "",
  });
  const [cardStyle, setCardStyle] = useState<CardStyle>(CARD_STYLE[0]);
  const [cardShow, setCardShow] = useState(true);
  const [cardAlign, setCardAlign] = useState<CardAlign>("bottom");

  return (
    <Funnel goBack={goBack}>
      <Toaster />
      <Funnel.Title>CardGenerate</Funnel.Title>
      <div className="flex gap-2 flex-wrap justify-center">
        <Funnel.GrayText className="text-center">
          카드 생성 🎨
          {loading ? "..." : ""}
        </Funnel.GrayText>
        <ConceptChipList concepts={concepts} loading={loading} />
      </div>

      <div className="flex flex-col gap-1 w-full lg:flex-row lg:max-w-[1200px] mx-auto">
        <DisplayCard
          loading={loading}
          loadedImage={loadedImage}
          cardShow={cardShow}
          cardStyle={cardStyle}
          message={message}
          imageContainerRef={imageContainerRef}
          cardAlign={cardAlign}
        />
        <OptionCard
          message={message}
          setMessage={setMessage}
          cardStyle={cardStyle}
          setCardStyle={setCardStyle}
          cardShow={cardShow}
          setCardShow={setCardShow}
          cardAlign={cardAlign}
          setCardAlign={setCardAlign}
        />
      </div>

      <Funnel.ButtonWrapper>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-2">
            <Funnel.Button
              disabled={!loadedImage}
              onClick={() => downloadImage()}
            >
              다운로드
            </Funnel.Button>
            <Funnel.Button
              disabled={!loadedImage}
              onClick={() =>
                onNext({
                  image: loadedImage,
                })
              }
            >
              Share
            </Funnel.Button>
          </div>
        </div>
      </Funnel.ButtonWrapper>
    </Funnel>
  );
}
