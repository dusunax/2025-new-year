import { Dispatch, SetStateAction } from "react";
import { type ImageGenerate } from "@/context/context";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  CARD_ALIGN_CLASS,
  CARD_STYLE,
  CardAlign,
  type CardStyle,
} from "./DisplayCard";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getRandomMessage } from "@/contant/constant";
import { DicesIcon } from "lucide-react";

interface OptionCardProps {
  message: ImageGenerate["message"];
  setMessage: Dispatch<SetStateAction<ImageGenerate["message"] | undefined>>;
  cardStyle: CardStyle;
  setCardStyle: Dispatch<SetStateAction<CardStyle>>;
  cardShow: boolean;
  setCardShow: Dispatch<SetStateAction<boolean>>;
  cardAlign: CardAlign;
  setCardAlign: Dispatch<SetStateAction<CardAlign>>;
}

export default function OptionCard({
  message,
  setMessage,
  cardStyle,
  setCardStyle,
  cardShow,
  setCardShow,
  cardAlign,
  setCardAlign,
}: OptionCardProps) {
  const setRandomMessage = () => {
    const text = getRandomMessage().ko;
    setMessage((prev) =>
      prev
        ? {
            ...prev,
            text,
          }
        : { text, to: "", from: "" }
    );
  };

  return (
    <Card className="flex flex-col gap-4 p-4 lg:w-[500px]">
      <h3 className="text-lg font-bold">Content</h3>
      <div className="flex flex-col gap-2">
        <RowLabel>To:</RowLabel>
        <Input
          placeholder="받는 사람"
          maxLength={20}
          value={message?.to}
          onChange={(e) =>
            setMessage((prev) =>
              prev
                ? { ...prev, to: e.target.value }
                : { to: e.target.value, from: "", text: "" }
            )
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <RowLabel>From:</RowLabel>
        <Input
          placeholder="보내는 사람"
          maxLength={20}
          value={message?.from}
          onChange={(e) =>
            setMessage((prev) =>
              prev
                ? { ...prev, from: e.target.value }
                : { from: e.target.value, to: "", text: "" }
            )
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <RowLabel> Message:</RowLabel>
        <Textarea
          placeholder="메시지를 입력해주세요"
          rows={4}
          maxLength={150}
          value={message?.text}
          onChange={(e) =>
            setMessage((prev) =>
              prev
                ? { ...prev, text: e.target.value }
                : { text: e.target.value, to: "", from: "" }
            )
          }
        />
        <Button variant="outline" onClick={setRandomMessage}>
          <DicesIcon />
          랜덤 메시지
        </Button>
      </div>

      <h3 className="text-lg font-bold">Option</h3>
      <div className="flex flex-col gap-4">
        <Row>
          <RowLabel>Card Color:</RowLabel>
          <ul className="flex gap-1">
            {CARD_STYLE?.map((style) => (
              <li
                key={style.background}
                className={`w-6 h-6 rounded-full border-2 shadow-md text-xs flex items-center justify-center cursor-pointer ${
                  cardStyle === style ? "border-orange-500" : ""
                }`}
                style={{
                  backgroundColor: style.background,
                  color: style.color,
                }}
                onClick={() => setCardStyle(style)}
              >
                Aa
              </li>
            ))}
          </ul>
        </Row>
        <Row>
          <RowLabel>Show Card:</RowLabel>
          <Switch checked={cardShow} onCheckedChange={setCardShow} />
        </Row>
        <Row>
          <RowLabel>Card Align:</RowLabel>
          <ul className="grid grid-cols-3">
            {Object.entries(CARD_ALIGN_CLASS).map(([align]) => (
              <li
                key={align}
                className={cn(
                  "w-16 h-16 border-2 text-[10px] break-all flex items-center justify-center cursor-pointer relative",
                  cardShow && cardAlign === align
                    ? "border-orange-500 bg-orange-100 z-10"
                    : ""
                )}
                onClick={() => setCardAlign(align as CardAlign)}
              >
                {align}
              </li>
            ))}
          </ul>
        </Row>
      </div>
    </Card>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-2">{children}</div>;
}

function RowLabel({ children }: { children: React.ReactNode }) {
  return <label className="font-semibold">{children}</label>;
}
