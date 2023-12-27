import React from 'react'

interface LateralLimiterProps {
  className?: string;
  children: React.ReactNode;
}

export default function LateralLimiter({ className, children }: LateralLimiterProps) {
  return (
    <div className={ `max-w-6xl m-auto ${ className }` }>
      { children }
    </div>
  )
}
