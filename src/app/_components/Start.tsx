import Funnel from "@/components/funnel/FunnelUi";
import DraggableImageCard from "@/components/ImageCard/DraggableImageCard";
import cardImage1 from "@/assets/images/cool.png";
import cardImage2 from "@/assets/images/you-are-your-own-universe.png";
import cardImage3 from "@/assets/images/countdown.png";
import { type Start } from "@/context/context";

export default function Start({ onNext }: { onNext: (props: Start) => void }) {
  return (
    <Funnel>
      <div className="flex flex-col items-center justify-center">
        <Funnel.Title>2025 새해 카드 만들기</Funnel.Title>
        <Funnel.GrayText>친구들에게 새해 카드를 만들어 보세요.</Funnel.GrayText>
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
