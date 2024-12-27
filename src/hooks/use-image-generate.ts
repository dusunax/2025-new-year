import { RefObject, useState } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { ChooseConcepts } from "@/context/context";
import { toast } from "./use-toast";

interface UseImageGenerate {
  concepts: ChooseConcepts["concepts"];
  imageContainerRef?: RefObject<HTMLImageElement | null>;
}

export default function useImageGenerate({
  concepts,
  imageContainerRef,
}: UseImageGenerate) {
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");

  const generateImage = async () => {
    try {
      setLoading(true);
      const prompt = `2025 new years, text "2025", a blue snake, confetti, ${concepts?.map(
        (e) => e.en.toLowerCase()
      )}`;

      toast({
        title: "그림을 생성하는 중입니다🥰",
        duration: 10000,
      });

      const response = await fetch("/api/generate-image", {
        method: "POST",
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      const imageUrl = data.imageUrl;

      if (imageUrl) {
        setGeneratedImage(imageUrl);
      } else {
        throw new Error("이미지 url이 없습니다.");
      }
    } catch (e) {
      console.log(e);

      toast({
        title: "이미지 생성에 실패했습니다🥲",
        description:
          "잠시 후 다시 시도해주세요. 문제가 지속될 경우 개발자에게 문의해주세요.",
        duration: 5000,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!imageContainerRef) {
      console.error("imageRef is not defined");
      return;
    }
    try {
      if (imageContainerRef.current && generatedImage) {
        html2canvas(imageContainerRef.current).then((canvas) => {
          canvas.toBlob((blob) => {
            if (blob) saveAs(blob, "2025-new-year-message.png");
          });
        });
      }
      toast({
        title: "카드가 저장 되었습니다",
        duration: 2000,
      });
    } catch (err) {
      console.log(err);

      toast({
        title: "카드 저장에 실패헀습니다",
        duration: 2000,
        variant: "destructive",
      });
    }
  };

  const linkCopy = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast({
          title: "링크가 복사되었습니다",
          duration: 2000,
        });
      })
      .catch((err) => {
        console.error(err);

        toast({
          title: "링크 복사에 실패헀습니다",
          duration: 2000,
          variant: "destructive",
        });
      });
  };

  return {
    generatedImage,
    generateImage,
    downloadImage,
    linkCopy,
    loading,
  };
}
