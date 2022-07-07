import React from "react";
const Step = ({ step, component, children }) =>
  component ? component : children;
export default Step;
