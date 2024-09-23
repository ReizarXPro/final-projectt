import React from 'react';
import { AnimatedBackground } from 'animated-backgrounds';
function AnimatedBack() {
  return (
    <div>
      <AnimatedBackground animationName="starryNight" />
    </div>
  );
}
export default AnimatedBack;
function AnimatedBackDay() {
  return (
    <div>
      <AnimatedBackground animationName="neonPulse" />
    </div>
  );
}
export { AnimatedBackDay}  ;
