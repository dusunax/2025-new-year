"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { type ImageGenerate } from "@/context/context";
import Funnel from "@/components/funnel/FunnelUi";
import { Card } from "@/components/ui/card";
import loadingImage from "@/assets/images/paint.gif";
import snakeImage from "@/assets/images/snake.png";
import CardImage from "./CardImage";

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
  return (
    <Card className="w-full relative rounded-xl overflow-hidden flex items-center justify-center">
      <div ref={imageContainerRef} className="w-full h-full min-h-[500px]">
        {loadedImage ? (
          <CardImage image={loadedImage} />
        ) : (
          <div className="text-lg text-grey-700 w-full h-full flex flex-col items-center justify-center">
            {loading ? (
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
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
              </motion.div>
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

        {cardShow && !loading && loadedImage && (
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
              <div className="p-2 sm:p-6 flex flex-col gap-3 justify-between h-full text-4xl">
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
