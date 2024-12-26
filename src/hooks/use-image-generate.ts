import { RefObject, useEffect, useState } from "react";
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
  const [loadedImage, setLoadedImage] = useState("");

  const generateImage = async () => {
    try {
      setLoading(true);
      const prompt = `2025 new years, text "2025", a blue snake, confetti, ${concepts?.map(
        (e) => e.en.toLowerCase()
      )}`;

      toast({
        title: "그림을 생성하는 중입니다🥰",
        duration: 5000,
      });

      const response = await fetch("/api/generate-image", {
        method: "POST",
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      const imageUrl = data.imageUrl;
      setGeneratedImage(imageUrl ?? "");
    } catch (e) {
      console.log(e);
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

  useEffect(() => {
    if (!generatedImage) return;
    setLoading(true);

    const proxyFetch = async () => {
      try {
        const response = await fetch(
          `/api/proxy?url=${encodeURIComponent(generatedImage)}`
        );
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setLoadedImage(url);
      } catch (error) {
        console.error("Error loading image:", error);
      } finally {
        setLoading(false);
      }
    };

    proxyFetch();
  }, [generatedImage]);

  return {
    generatedImage,
    loadedImage,
    generateImage,
    downloadImage,
    linkCopy,
    loading,
    setLoading,
  };
}
