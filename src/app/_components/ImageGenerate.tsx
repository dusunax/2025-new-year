import Funnel from "@/components/funnel/FunnelUi";

export default function ImageGenerate({
  onNext,
  goBack,
}: {
  onNext: (props: any) => void;
  goBack: () => void;
}) {
  return (
    <Funnel goBack={goBack}>
      <Funnel.Title>ImageGenerate</Funnel.Title>

      <Funnel.ButtonWrapper>
        <Funnel.Button onClick={() => onNext({})}>Next</Funnel.Button>
      </Funnel.ButtonWrapper>
    </Funnel>
  );
}
