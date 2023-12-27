import React from 'react';
import LateralLimiter from "@/app/components/LateralLimiter";

export default function HomeContent() {
  return (
    <LateralLimiter>
      <div className="grid grid-cols-2">
        <div className="p-10 flex flex-col justify-center">
          <div className="text-4xl font-bold">
            O Liceu Libertário
          </div>
          <div className="py-4 font-thin text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor libero eget odio aliquam, vitae
            ultricies
            nisl ultricies. Donec auctor libero eget odio aliquam, vitae ultricies nisl ultricies.
          </div>
          <div className="flex justify-between pt-12 pb-2">
            <div>signature 1</div>
            <div>signature 2</div>
          </div>
          <div className="text-sm font-thin">
            CO-FUNDADORES
          </div>
        </div>
        <div className="h-[50vh] bg-orange-300 flex justify-center items-center italic text-4xl font-bold">
          banner
        </div>
      </div>
    </LateralLimiter>
  )
}
