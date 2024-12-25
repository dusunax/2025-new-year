import { Concept } from "@/contant/constant";

export type Start = {};
export type SetUser = {
  name?: string;
  email?: string;
};
export type ChooseConcepts = {
  concepts?: Concept[];
};
export type ImageGenerate = {
  image?: string;
};
export type SetMessage = {
  message?: string;
};
export type SaveImage = {
  image?: string;
};

export type FunnelProps = {
  start: Start;
  setUser: SetUser;
  chooseConcepts: ChooseConcepts;
  imageGenerate: ImageGenerate;
  setMessage: SetMessage;
  saveImage: SaveImage;
};
