import Image from "next/image";
import { motion } from "motion/react";
import Funnel from "@/components/funnel/FunnelUi";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Start({ onNext }: { onNext: (props: any) => void }) {
  return (
    <Funnel>
      <div className="flex flex-col items-center justify-center">
        <Funnel.Title>2025 새해 카드 만들기</Funnel.Title>
        <Funnel.GrayText>친구들에게 새해 카드를 만들어 보세요.</Funnel.GrayText>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 gap-6">
        <div className="flex">
          <motion.div
            className="w-[200px] h-[300px] relative"
            initial={{ left: 50, rotate: 5 }}
            animate={{ rotate: 12, left: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            drag
            dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
            whileDrag={{
              top: -10,
              shadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
              zIndex: 100,
            }}
            whileHover={{
              rotateY: 180,
            }}
          >
            <ImageCard imgSrc="/images/card-1.png" />
          </motion.div>
          <motion.div
            className="w-[200px] h-[300px] relative"
            initial={{ left: -50, rotate: -5 }}
            animate={{ rotate: -12, left: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
            drag
            whileDrag={{
              top: -10,
              shadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
              zIndex: 100,
            }}
          >
            <ImageCard imgSrc="/images/card-2.png" />
          </motion.div>
          <motion.div
            className="w-[200px] h-[300px] relative"
            initial={{ left: -50, rotate: 5 }}
            animate={{ rotate: 12, left: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
            drag
            whileDrag={{
              top: -10,
              shadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
              zIndex: 100,
            }}
            whileHover={{
              rotateY: 180,
            }}
          >
            <ImageCard imgSrc="/images/card-3.png" />
          </motion.div>
        </div>
        <Funnel.BoldTitle>
          2025
          <br />
          새해인사
          <br />
          카드 만들기
        </Funnel.BoldTitle>
      </div>
      <Funnel.ButtonWrapper>
        <Funnel.Button onClick={() => onNext({})}>Start</Funnel.Button>
      </Funnel.ButtonWrapper>
    </Funnel>
  );
}

function ImageCard({
  className,
  imgSrc,
}: {
  className?: string;
  imgSrc: string;
}) {
  return (
    <Card
      className={cn(
        `w-[300px] h-[300px] absolute left-1/2 -translate-x-1/2 p-2 shadow-md`,
        className
      )}
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <Image
        src={imgSrc}
        alt="card"
        width={300}
        height={300}
        className="object-cover bg-blue-200 rounded-lg"
      />
    </Card>
  );
}
