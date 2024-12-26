import { useState } from "react";
import { motion } from "motion/react";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONCEPTS, type Concept } from "@/contant/constant";
import Funnel from "@/components/funnel/FunnelUi";

const MAX_SELECTED_CONCEPTS = 4;

export default function ChooseConcepts({
  onNext,
  goBack,
}: {
  onNext: (props: any) => void;
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

  return (
    <Funnel goBack={goBack}>
      <Funnel.Title>ChooseConcepts</Funnel.Title>
      <Funnel.GrayText className="text-center">
        카드 스타일을 선택해주세요.
      </Funnel.GrayText>

      <ul className="grid grid-cols-4 gap-4 gap-y-2 pb-24">
        {CONCEPTS.map((concept, idx) => (
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={concept.ko}
            className={cn(
              "h-32 rounded-lg flex gap-2 transition-all hover:delay-0 cursor-pointer",
              idx % 5 === 0 ? "col-start-1 col-span-2" : "",
              idx % 5 === 1 ? "col-start-3 col-span-2" : "",
              idx % 5 === 2
                ? "relative col-start-1 w-full hover:w-[calc(200%)] hover:z-10"
                : "",
              idx % 5 === 3 ? "col-start-2 col-span-2 z-0" : "",
              idx % 5 === 4
                ? "relative w-full hover:w-[calc(200%)] hover:-ml-[100%]"
                : "",
              selectedConcepts.length >= MAX_SELECTED_CONCEPTS
                ? "!opacity-[0.6]"
                : ""
            )}
            style={{ backgroundColor: concept.color }}
            onClick={() => handleSelectConcept(concept)}
            whileHover={{
              shadow: "10px 10px 16px rgba(0, 0, 0, 0.7)",
            }}
          >
            <div className="h-full w-32 p-2">
              <div className="w-full h-full bg-white rounded-md bg-grey-400" />
            </div>
            <div className="relative flex-1 flex flex-col justify-between py-2">
              <p>{concept.ko}</p>
              <Funnel.BoldTitle className="text-right !text-3xl text-white/50 -bottom-1 right-2 absolute">
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
                  className="rounded-2xl p-2 px-3 shadow-md cursor-pointer font-semibold flex items-center gap-1"
                  style={{ backgroundColor: e.color }}
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
