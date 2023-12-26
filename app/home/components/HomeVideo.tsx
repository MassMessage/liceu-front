import React from 'react';
import LateralLimiter from "@/app/components/LateralLimiter";

export default function HomeVideo() {
  return (
    <LateralLimiter>
      <div className="py-24 space-y-4">
        <div className="text-2xl font-bold text-center">
          ASSISTA AO VÍDEO:
        </div>
        <div className="aspect-video h-[50vh] bg-black"/>
      </div>
    </LateralLimiter>
  )
}
