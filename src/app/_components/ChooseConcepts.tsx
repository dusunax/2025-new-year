import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONCEPTS, type Concept } from "@/contant/constant";
import Funnel from "@/components/funnel/FunnelUi";
import { type ChooseConcepts } from "@/context/context";
import { colorWeaver } from "@/utils/colorWeaver";
const MAX_SELECTED_CONCEPTS = 4;

export default function ChooseConcepts({
  onNext,
  goBack,
}: {
  onNext: (prev: ChooseConcepts) => void;
  goBack: () => void;
}) {
  const [selectedConcepts, setSelectedConcepts] = useState<Concept[]>([]);

  const handleSelectConcept = (concept: Concept) => {
    if (selectedConcepts.includes(concept)) {
      setSelectedConcepts((prev) => prev.filter((c) => c !== concept));
    } else {
      if (selectedConcepts.length >= MAX_SELECTED_CONCEPTS) return;
      setSelectedConcepts((prev) => [...prev, concept]);
    }
  };
  const gridStyle = (idx: number) => {
    if (idx % 4 === 0) return "sm:col-span-2 md:col-span-1";
    if (idx % 4 === 1)
      return "relative w-full sm:hover:w-[calc(200%)] md:hover:w-[calc(100%)] hover:z-10 sm:hover:-ml-[100%] md:hover:ml-0";
    if (idx % 4 === 2)
      return "relative w-full sm:hover:w-[calc(200%)] md:hover:w-[calc(100%)] hover:z-10";
    if (idx % 4 === 3) return "sm:col-span-2 md:col-span-1";
  };

  const gridStyleMd = (idx: number) => {
    if (idx % 5 === 0) return "md:col-start-1 md:col-span-2";
    if (idx % 5 === 1) return "md:col-start-3 md:col-span-2";
    if (idx % 5 === 2)
      return "relative md:col-start-1 w-full md:hover:w-[calc(200%)] md:hover:z-10";
    if (idx % 5 === 3) return "md:col-start-2 md:col-span-2 z-0";
    if (idx % 5 === 4)
      return "relative w-full md:hover:w-[calc(200%)] md:hover:-ml-[100%]";
  };

  return (
    <Funnel goBack={goBack}>
      <Funnel.Title>ChooseConcepts</Funnel.Title>
      <Funnel.GrayText className="text-center">
        2025년은 파란 뱀의 해입니다🐍
        <br />
        이미지 스타일을 4개까지 선택해주세요.
      </Funnel.GrayText>

      <ul className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-2 pb-24">
        {CONCEPTS.map((concept, idx) => (
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={concept.ko}
            className={cn(
              "sm:h-32 rounded-lg flex transition-all hover:delay-0 gap-2 cursor-pointer items-center sm:items-stretch",
              gridStyle(idx),
              gridStyleMd(idx),
              colorWeaver.getTextColor(concept.color),
              selectedConcepts.length >= MAX_SELECTED_CONCEPTS
                ? "!opacity-[0.6]"
                : ""
            )}
            style={{
              backgroundColor: concept.color,
            }}
            onClick={() => handleSelectConcept(concept)}
            whileHover={{
              shadow: "10px 10px 16px rgba(0, 0, 0, 0.7)",
            }}
          >
            <motion.div
              className="h-32 sm:h-full w-32 p-2 shrink-0"
              whileHover={{
                scale: 1.5,
                zIndex: 50,
                shadow: "10px 10px 16px rgba(0, 0, 0, 1)",
              }}
            >
              <Image
                src={`/images/concepts/${concept.en
                  .toLowerCase()
                  .split(" ")
                  .join("-")}.png`}
                alt={concept.ko}
                width={128}
                height={128}
                className="w-full h-full bg-white rounded-md bg-grey-400 relative"
              />
            </motion.div>
            <div className="relative flex-1 flex flex-col justify-between py-2">
              <p className="text-sm sm:text-md md:text-xl font-semibold font-orbit relative z-10 break-all">
                {concept.ko} {concept.icon}
              </p>
              <Funnel.BoldTitle className="text-right !text-xl sm:!text-3xl text-white/50 -bottom-1 right-2 absolute">
                {concept.en.toUpperCase()}
              </Funnel.BoldTitle>
            </div>
          </motion.li>
        ))}
      </ul>

      <Funnel.ButtonWrapper>
        <div className="flex flex-col w-full">
          {selectedConcepts.length === MAX_SELECTED_CONCEPTS && (
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ delay: 0.1 }}
              className="text-center text-md font-bold text-white"
              style={{
                textShadow: "6px 6px 16px rgba(55, 55, 55, 0.8)",
              }}
            >
              {MAX_SELECTED_CONCEPTS}개 까지 선택할 수 있습니다.
            </motion.p>
          )}
          <ul className="flex flex-wrap gap-2 justify-center bg-gradient-to-t from-white/50 to-transparent pb-4 pt-12">
            {selectedConcepts.map((e) => {
              return (
                <motion.li
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  key={e.ko}
                  className={`rounded-2xl p-2 px-3 shadow-md cursor-pointer font-semibold flex items-center gap-1 ${colorWeaver.getTextColor(
                    e.color
                  )}`}
                  style={{
                    backgroundColor: e.color,
                  }}
                  onClick={() => handleSelectConcept(e)}
                >
                  {e.ko} <XIcon width={16} />
                </motion.li>
              );
            })}
          </ul>
          <Funnel.Button
            onClick={() => onNext({ concepts: selectedConcepts })}
            disabled={
              selectedConcepts.length === 0 ||
              selectedConcepts.length > MAX_SELECTED_CONCEPTS
            }
          >
            Next{" "}
            {selectedConcepts.length
              ? `(${selectedConcepts.length} / ${MAX_SELECTED_CONCEPTS})`
              : ""}
          </Funnel.Button>
        </div>
      </Funnel.ButtonWrapper>
    </Funnel>
  );
}
