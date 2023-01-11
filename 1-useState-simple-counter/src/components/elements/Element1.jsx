import React from 'react';

//example of a React component
export const Element1 = ({ className = '', children }) => {
  return <div className={`${className}`}>{children}</div>;
};
