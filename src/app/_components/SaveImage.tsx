import Funnel from "@/components/funnel/FunnelUi";

export default function SaveImage({
  goBack,
}: {
  goBack: () => void;
}) {
  return (
    <Funnel goBack={goBack}>
      <Funnel.Title>SaveImage</Funnel.Title>

      <Funnel.ButtonWrapper>
        <Funnel.Button onClick={() => {}}>Save</Funnel.Button>
      </Funnel.ButtonWrapper>
    </Funnel>
  );
}
