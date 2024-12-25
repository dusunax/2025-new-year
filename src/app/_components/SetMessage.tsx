import Funnel from "@/components/funnel/FunnelUi";

export default function SetMessage({
  goBack,
  onNext,
}: {
  goBack: () => void;
  onNext: (props: any) => void;
}) {
  return (
    <Funnel goBack={goBack}>
      <Funnel.Title>SetMessage</Funnel.Title>

      <Funnel.ButtonWrapper>
        <Funnel.Button onClick={() => onNext({})}>Save</Funnel.Button>
      </Funnel.ButtonWrapper>
    </Funnel>
  );
}
