import React from 'react';

export const Element1 = ({ className = '', children }) => {
  return <div className={`${className}`}>{children}</div>;
};
