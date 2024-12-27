import Funnel from "@/components/funnel/FunnelUi";
import { Card } from "@/components/ui/card";

export default function Notice({
  onNext,
  goBack,
}: {
  onNext: (props: any) => void;
  goBack: () => void;
}) {
  const { Title, GrayText, ButtonWrapper, Button } = Funnel;

  return (
    <Funnel goBack={goBack}>
      <Title>📌 Notice</Title>

      <Card className="max-w-[600px] w-full p-10 mx-auto flex flex-col gap-[2px]">
        <GrayText>안녕하세요😄</GrayText>
        <GrayText>🌟 2025년 신년 카드 메이커에 오신 것을 환영합니다 </GrayText>
        <GrayText>🎨 간단하게 카드를 만들고 공유해 보세요</GrayText>
        <br />
        <GrayText>1. 로그인을 통해 시작해보세요.</GrayText>
        <GrayText>
          2. 선택한 키워드에 맞춰 OpenAI의 DALL-E 3가 이미지를 생성한다 🖼️
        </GrayText>
        <GrayText>3. 랜덤 메시지 혹은 직접 메시지를 작성한다</GrayText>
        <br />

        <GrayText>
          생성된 카드는 저장하거나 친구들과 공유할 수 있어요! 💾📤
        </GrayText>
        <GrayText>이제 시작해볼까요? ✨</GrayText>
        <br />
        <hr />
        <GrayText>
          모바일 환경에서는 카카오톡 링크로 접근 시, 카드 다운로드가 실패하는
          버그가 있습니다(크롬으로 접속 부탁드려요🥹)
        </GrayText>
      </Card>

      <ButtonWrapper>
        <Button onClick={() => onNext({})}>
          Next
        </Button>
      </ButtonWrapper>
    </Funnel>
  );
}
