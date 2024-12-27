import { Concept } from "@/contant/constant";

export type Start = object;
export type Notice = {
  name?: string;
  email?: string;
};
export type ChooseConcepts = {
  concepts?: Concept[];
};
export type ImageGenerate = {
  concepts?: Concept[];
  image?: string;
  message?: {
    to: string;
    from: string;
    text: string;
  };
};

export type FunnelProps = {
  start: Start;
  notice: Notice;
  chooseConcepts: ChooseConcepts;
  imageGenerate: ImageGenerate;
};
