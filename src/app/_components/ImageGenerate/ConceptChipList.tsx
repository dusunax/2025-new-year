import { motion } from "framer-motion";
import { ChooseConcepts } from "@/context/context";
import { colorWeaver } from "@/utils/colorWeaver";

export default function ConceptChipList({
  concepts,
  loading,
}: {
  concepts: ChooseConcepts["concepts"];
  loading: boolean;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      {concepts?.map((concept, idx) => (
        <motion.div
          key={concept.en}
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className={`flex items-center justify-center rounded-xl px-2 py-[2px] text-md font-semibold ${
            loading ? "animate-bounce" : ""
          }`}
          style={{
            backgroundColor: concept.color,
            animationDelay: `${idx % 2 === 0 ? "0" : "0.5s"}`,
            color: colorWeaver.getTextColor(concept.color),
          }}
        >
          {concept.ko}
        </motion.div>
      ))}
      {concepts?.length === 0 ? "?" : ""}
    </div>
  );
}
