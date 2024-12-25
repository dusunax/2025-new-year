import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

export default function ImageCard({
  className,
  img,
}: {
  className?: string;
  img: StaticImageData | string;
}) {
  return (
    <Card
      className={cn(
        `w-[150%] pb-[50%] absolute left-1/2 -translate-x-1/2 shadow-lg bg-blue-200/50 backdrop-blur-sm p-[10%]`,
        className
      )}
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <Image
        src={img}
        alt="card"
        width={300}
        height={300}
        className="object-cover rounded-lg pointer-events-none"
      />
    </Card>
  );
}
