import Funnel from "@/components/funnel/FunnelUi";
import DraggableImageCard from "@/components/ImageCard/DraggableImageCard";
import cardImage1 from "@/assets/images/1.png";
import cardImage2 from "@/assets/images/2.png";
import cardImage3 from "@/assets/images/3.png";
import { type Start } from "@/context/context";

export default function Start({ onNext }: { onNext: (props: Start) => void }) {
  return (
    <Funnel>
      <div className="flex flex-col items-center justify-center">
        <Funnel.Title>2025 신년 카드 만들기</Funnel.Title>
        <Funnel.GrayText>
          푸른 뱀이 그려진 AI 이미지를 만들어 보세요.
        </Funnel.GrayText>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 gap-6">
        <div className="flex w-full justify-center">
          <DraggableImageCard
            img={cardImage1}
            initialPosition={50}
            initialRotation={5}
            animateRotation={12}
          />
          <DraggableImageCard
            img={cardImage2}
            initialPosition={-50}
            initialRotation={-5}
            animateRotation={-12}
          />
          <DraggableImageCard
            img={cardImage3}
            initialPosition={-50}
            initialRotation={5}
            animateRotation={12}
          />
        </div>
        <Funnel.BoldTitle>
          2025
          <br />
          신년 카드
          <br />
          만들기
        </Funnel.BoldTitle>
      </div>

      <Funnel.ButtonWrapper>
        <Funnel.Button onClick={() => onNext({})}>Start</Funnel.Button>
      </Funnel.ButtonWrapper>
    </Funnel>
  );
}
