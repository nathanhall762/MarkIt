import Nav from './Nav';
import { useStepComponents, useStepRules } from '../StepConfiguration';
import React, { useEffect } from 'react';
import useAddSequenceStore from '../AddSequenceStore';

const App: React.FC = () => {
  const stepComponents = useStepComponents();
  const currentStep = useAddSequenceStore((state) => state.currentStep);
  const stepRules = useStepRules();
  

  useEffect(() => {
    const ruleForCurrentStep = stepRules[currentStep];
    if (typeof ruleForCurrentStep === 'function') {
      ruleForCurrentStep();
    }
  }, [currentStep, stepRules]);

  return (
    <div className='mx-auto max-w-3xl bg-ltbg1 dark:bg-dkbg1'>
      <div className='h-[88vh] flex items-center flex-col justify-evenly overflow-scroll md:overflow-auto'>
        {stepComponents.map((Component, index) => (
          <React.Fragment key={index}>{Component}</React.Fragment>
        ))}
      </div>
      <Nav />
    </div>
  );
};

export default App;
