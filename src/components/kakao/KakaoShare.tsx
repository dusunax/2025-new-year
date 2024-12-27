import Script from "next/script";
import { KAKAO_API_KEY, WEB_URL } from "@/contant/config";
import { Share2Icon } from "lucide-react";
import { Button } from "../ui/button";

declare global {
  interface Window {
    Kakao: {
      init: (apiKey: string) => void;
      Share: {
        sendDefault: (options: {
          objectType: string;
          content: {
            title: string;
            imageUrl: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          };
        }) => void;
      };
    };
  }
}

function KakaoScript() {
  const onLoad = () => {
    if (!KAKAO_API_KEY) {
      console.assert(KAKAO_API_KEY, "KAKAO_API_KEY is not set");
      return;
    }

    window.Kakao.init(KAKAO_API_KEY);
  };

  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.js"
      async
      onLoad={onLoad}
    />
  );
}

export default function KakaoShare({ imageUrl }: { imageUrl: string }) {
  const kakaoShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "이미지 공유 기능 개발 중입니다✨",
        imageUrl,
        link: {
          mobileWebUrl: WEB_URL,
          webUrl: WEB_URL,
        },
      },
    });
  };

  return (
    <>
      <Button variant="outline" className="!bg-yellow-400" onClick={kakaoShare}>
        <Share2Icon />
        Share
      </Button>
      <KakaoScript />
    </>
  );
}
