import Image from "next/image";
import { motion } from "framer-motion";
import { type ImageGenerate } from "@/context/context";
import Funnel from "@/components/funnel/FunnelUi";
import { Card } from "@/components/ui/card";
import loadingImage from "@/assets/images/paint.gif";

interface DisplayCardProps {
  loading: boolean;
  loadedImage: string;
  cardShow: boolean;
  cardStyle: { background: string; color: string };
  message: ImageGenerate["message"];
  imageContainerRef: React.RefObject<HTMLImageElement | null>;
  cardAlign: CardAlign;
}

export const CARD_STYLE = [
  {
    color: "#000000",
    background: "#ffffff",
  },
  {
    color: "#ffffff",
    background: "#000000",
  },
  {
    color: "#ffffff",
    background: "#00000066",
  },
  {
    color: "#000000",
    background: "#ffffff66",
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
}: DisplayCardProps) {
  return (
    <Card
      className={`w-full relative rounded-xl overflow-hidden flex items-center justify-center ${
        loading ? "bg-gray-200" : ""
      }`}
    >
      <div ref={imageContainerRef}>
        {loadedImage ? (
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={loadedImage}
              alt="Generated Card"
              width={500}
              height={500}
              className="object-contain w-full h-full"
            />
          </motion.div>
        ) : (
          <div className="text-lg text-grey-700 w-full h-[500px] flex flex-col items-center justify-center">
            <Image
              src={loadingImage}
              alt="loading"
              className="w-1/2"
              style={{
                mixBlendMode: "multiply",
              }}
            />
            <Funnel.GrayText>이미지를 생성 중입니다.</Funnel.GrayText>
          </div>
        )}

        {cardShow && !loading && (
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
                {message?.from && (
                  <p className="text-right">{message.from} 보냄</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </Card>
  );
}
