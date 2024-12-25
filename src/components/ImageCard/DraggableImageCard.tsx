import { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";

export default function DraggableImageCard({
  img,
  initialPosition = 0,
  animatePosition = 0,
  initialRotation = 0,
  animateRotation = 0,
}: {
  img: StaticImageData | string;
  initialPosition?: number;
  animatePosition?: number;
  initialRotation?: number;
  animateRotation?: number;
}) {
  return (
    <motion.div
      className="max-w-[200px] w-[30%] pb-[45%] sm:pb-[300px] relative"
      initial={{ left: initialPosition, rotate: initialRotation }}
      animate={{ rotate: animateRotation, left: animatePosition }}
      transition={{ duration: 1, ease: "easeInOut" }}
      drag
      dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
      whileDrag={{
        top: -10,
        shadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
        zIndex: 100,
      }}
    >
      <ImageCard img={img} />
    </motion.div>
  );
}
