import React from 'react';
import LateralLimiter from "@/app/components/LateralLimiter";

const features = [
  {
    title: 'PROGRAMAS',
    description: 'Oferecemos 6 programas principais com professores especializados.',
    icon: 'university',
  },
  {
    title: 'CERTIFICADOS',
    description: 'Desafie-se e comprove seu aprendizado.',
    icon: 'certificate',
  },
  {
    title: 'ACESSÍVEL',
    description: 'Desenhe seu curso de acordo com seus recursos e objetivos.',
    icon: 'hand-holding-usd',
  },
];

export default function HomeFeatures() {
  return (
    <LateralLimiter>
      <div className="grid grid-cols-3 justify-between p-8">
        {features.map((feature) => (
          <div className="flex space-x-2">
            <div className="pt-1 text-orange-500">
              <div>icon</div>
            </div>
            <div className="text-sm">
              <div className="font-bold">
                {feature.title}
              </div>
              <div>
                {feature.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </LateralLimiter>
  );
}
