"use client";
import { useRef, useState } from "react";
import { DownloadIcon } from "lucide-react";
import { type ImageGenerate } from "@/context/context";
import Funnel from "@/components/funnel/FunnelUi";
import useImageGenerate from "@/hooks/use-image-generate";
import ConceptChipList from "./ConceptChipList";
import DisplayCard, { CARD_STYLE, CardAlign, CardStyle } from "./DisplayCard";
import OptionCard from "./OptionCard";
import { Button } from "@/components/ui/button";
import KakaoShare from "@/components/kakao/KakaoShare";

export default function ImageGenerate({
  goBack,
  concepts,
}: {
  goBack: () => void;
  concepts?: ImageGenerate["concepts"];
}) {
  const imageContainerRef = useRef<HTMLImageElement>(null);
  const { generateImage, downloadImage, loadedImage, loading, generatedImage } =
    useImageGenerate({
      concepts,
      imageContainerRef,
    });

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
      <Funnel.Title>CardGenerate</Funnel.Title>
        <ConceptChipList concepts={concepts} loading={loading} />

      <div className="flex flex-col gap-1 w-full lg:flex-row lg:max-w-[1200px] mx-auto">
        <DisplayCard
          loading={loading}
          loadedImage={loadedImage}
          cardShow={cardShow}
          cardStyle={cardStyle}
          message={message}
          imageContainerRef={imageContainerRef}
          cardAlign={cardAlign}
          generateImage={generateImage}
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
              <DownloadIcon /> 다운로드
            </Funnel.Button>
            <KakaoShare imageUrl={generatedImage} />
          </div>
        </div>
      </Funnel.ButtonWrapper>
    </Funnel>
  );
}
