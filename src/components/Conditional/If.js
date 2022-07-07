const If = ({ condition, component, children }) => {
  if (!condition) return null;
  if (component) {
    return component;
  } else {
    return children;
  }
};

export default If;
