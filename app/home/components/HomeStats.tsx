import React from 'react';
import LateralLimiter from "@/app/components/LateralLimiter";

const stats = [
  { value: 2020, label: "FUNDAÇÃO" },
  { value: 2, label: "TURMAS FORMADAS" },
  { value: 4, label: "PROGRAMAS" },
  { value: 6, label: "CURSOS" },
];

export default function HomeStats() {
  return (
    <div className="bg-orange-400">
      <LateralLimiter className="flex justify-evenly py-20">
        {stats.map((stat) => (
          <div className="text-center" key={stat.label}>
            <div className="text-4xl font-bold">
              {stat.value}
            </div>
            <div className="font-thin">
              {stat.label}
            </div>
          </div>
        ))}
      </LateralLimiter>
    </div>
  );
}
