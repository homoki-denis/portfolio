import { cn } from "@/lib/utils";
import React from "react";

type BackgroundVideoProps = {
  src: string;
  type?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
};

export default function BackgroundVideo({
  src,
  type,
  className,
  autoPlay,
  loop,
  muted,
  playsInline,
}: BackgroundVideoProps) {
  return (
    <video
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      className={cn("absolute w-full h-full object-cover", className)}
    >
      <source src={src} type={type} />
      Your browser does not support video.
    </video>
  );
}
