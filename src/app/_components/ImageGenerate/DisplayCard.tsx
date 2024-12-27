"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { type ImageGenerate } from "@/context/context";
import Funnel from "@/components/funnel/FunnelUi";
import { Card } from "@/components/ui/card";
import loadingImage from "@/assets/images/paint.gif";
import errorImage from "@/assets/images/error.png";
import snakeImage from "@/assets/images/snake.png";

interface DisplayCardProps {
  loading: boolean;
  loadedImage: string;
  cardShow: boolean;
  cardStyle: { background: string; color: string };
  message: ImageGenerate["message"];
  imageContainerRef: React.RefObject<HTMLImageElement | null>;
  cardAlign: CardAlign;
  generateImage: () => void;
}

export const CARD_STYLE = [
  {
    color: "#ffffff",
    background: "#00000066",
  },
  {
    color: "#000000",
    background: "#ffffff66",
  },
  {
    color: "#ffffff",
    background: "#000000",
  },
  {
    color: "#000000",
    background: "#ffffff",
  },
];
export type CardStyle = (typeof CARD_STYLE)[number];

export type CardAlign =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "center"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";
export const CARD_ALIGN_CLASS: Record<CardAlign, string> = {
  "top-left": "col-span-3 row-span-3 col-start-0 row-start-0",
  top: "col-span-full row-span-2 col-start-0 row-start-0",
  "top-right": "col-span-3 row-span-3 col-start-3 row-start-0",
  left: "col-span-2 row-span-full col-start-0 row-start-0",
  center: "col-span-3 row-span-3 col-start-2 row-start-2",
  right: "col-span-2 row-span-full col-start-4 row-start-0",
  "bottom-left": "col-span-3 row-span-3 col-start-0 row-start-3",
  bottom: "col-span-full row-span-2 col-start-0 row-start-4",
  "bottom-right": "col-span-3 row-span-3 col-start-3 row-start-3",
} as const;

export default function DisplayCard({
  loading,
  loadedImage,
  cardShow,
  cardStyle,
  message,
  imageContainerRef,
  cardAlign,
  generateImage,
}: DisplayCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <Card className="w-full relative rounded-xl overflow-hidden flex items-center justify-center">
      <div ref={imageContainerRef} className="w-full h-full min-h-[500px]">
        {loadedImage ? (
          <motion.div
            className={`w-full h-full ${
              hasError ? "flex items-center flex-col justify-center gap-2" : ""
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={hasError ? errorImage : loadedImage}
              onError={() => {
                setHasError(true);
              }}
              alt="Generated Card"
              width={500}
              height={500}
              className={`object-contain w-full h-full ${
                hasError ? "w-1/5 h-1/5" : ""
              }`}
            />
            {hasError && (
              <Funnel.GrayText>
                이미지를 생성하는 중<br /> 오류가 발생했습니다.
              </Funnel.GrayText>
            )}
          </motion.div>
        ) : (
          <div className="text-lg text-grey-700 w-full h-full flex flex-col items-center justify-center">
            {loading ? (
              <>
                <Image
                  src={loadingImage}
                  alt="loading"
                  className="w-1/2"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  priority
                  unoptimized
                />
                <Funnel.GrayText>
                  이미지를 생성 중입니다.
                  <br />
                  20초~2분 정도 소요됩니다.
                </Funnel.GrayText>
              </>
            ) : (
              <>
                <Image
                  src={snakeImage}
                  alt="2025"
                  className="w-1/5 mb-6"
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  priority
                />
                <Funnel.Button onClick={generateImage}>
                  이미지 생성하기
                </Funnel.Button>
              </>
            )}
          </div>
        )}

        {cardShow && !loading && !hasError && message?.text && (
          <div className="absolute w-full h-full left-0 top-0 grid grid-cols-5 grid-rows-5 text-sm sm:text-md md:text-lg">
            <motion.div
              className={`bg-white/80 rounded-xl backdrop-blur-sm cursor-grab m-2 transition-all duration-300 ${CARD_ALIGN_CLASS[cardAlign]}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              drag
              style={{
                backgroundColor: cardStyle.background,
                color: cardStyle.color,
              }}
            >
              <div className="p-2 sm:p-6 flex flex-col gap-3 justify-between h-full">
                <p className="pb-1 border-b-2 border-dotted self-start">
                  {message?.to ? "To." + message?.to : ""}
                </p>
                <p className="break-all flex-1">{message?.text}</p>
                {message?.from && <p className="text-right">{message.from}</p>}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Card>
  );
}
