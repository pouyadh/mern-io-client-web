import React, { createContext, useContext, useState } from "react";

const StepperContext = createContext();
export const useStepper = () => useContext(StepperContext);

const Stepper = ({
  initialStep = 0,
  onDone = () => {},
  onCancel = () => {},
  onChange = () => {},
  children,
}) => {
  const [activeStep, setActiveStep] = useState(initialStep);
  const stepperBag = {
    activeStep,
    next: () => setActiveStep((st) => st + 1),
    previous: () => setActiveStep((st) => st - 1),
    done: (data) => onDone(data),
    cancel: (data) => onCancel(data),
  };
  const step = React.Children.map(children, (child) => {
    const err = new Error(
      "Only component 'Step' allowed inside component 'Stepper'"
    );
    if (typeof child === "string") throw err;
    if (typeof child.type === "string") throw err;
    if (child.type.name !== "Step") throw err;
    return child.props.step === activeStep ? child : null;
  });
  return (
    <StepperContext.Provider value={stepperBag}>{step}</StepperContext.Provider>
  );
};

export default Stepper;
