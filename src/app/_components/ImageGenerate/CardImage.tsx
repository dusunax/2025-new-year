import { memo, useState } from "react";
import Image from "next/image";
import errorImage from "@/assets/images/error.png";
import Funnel from "@/components/funnel/FunnelUi";
import { motion } from "motion/react";

function CardImage({ image }: { image: string }) {
  const [hasError, setHasError] = useState(false);
  return (
    <motion.div
      className={`w-full h-full ${
        hasError ? "flex items-center flex-col justify-center gap-2" : ""
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={hasError ? errorImage : image}
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
  );
}

export default memo(CardImage);
