import React from 'react';
import LateralLimiter from "@/app/components/LateralLimiter";
import { Button } from "@/app/components/Button";

export default function HomeHero() {
  return (
    <LateralLimiter>
      <div className="flex items-center space-x-2">
        <div className="text-3xl">
          <div>icon</div>
        </div>
        <div className="grow bg-red-50 flex flex-col items-center p-12 pb-4 h-[50vh]">
          <div className="text-2xl font-thin">
            CURSOS
          </div>
          <div className="text-4xl font-bold py-4">
            Filosofia Para Um Novo Milênio
          </div>
          <div className="text-2xl font-semibold">
            "O VERDADEIRO DISCÍPULO É AQUELE QUE SUPERA O MESTRE."
          </div>
          <div className="font-thin">
            Aristóteles
          </div>
          <div className="grow py-12">
            <Button>
              SAIBA MAIS E INSCREVA-SE
            </Button>
          </div>
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-gray-400 rounded-full"/>
            <div className="w-4 h-4 bg-gray-200 rounded-full"/>
            <div className="w-4 h-4 bg-gray-200 rounded-full"/>
            <div className="w-4 h-4 bg-gray-200 rounded-full"/>
            <div className="w-4 h-4 bg-gray-200 rounded-full"/>
          </div>
        </div>
        <div className="text-3xl">
          <div>icon</div>
        </div>
      </div>
    </LateralLimiter>
  )
}
