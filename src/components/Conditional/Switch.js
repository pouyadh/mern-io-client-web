import React from "react";
export const Case = ({ value, component, children }) => {
  if (component) {
    return component;
  } else {
    return children;
  }
};
const Switch = ({ expression, children }) => {
  const newChildren = React.Children.map(children, (child) => {
    const err = new Error(
      "Only component 'Case' allowed inside component 'Switch'"
    );
    if (typeof child === "string") throw err;
    if (typeof child.type === "string") throw err;
    if (child.type.name !== "Case") throw err;
    return child.props.value === expression ? child : null;
  });
  return newChildren;
};

export default Switch;
