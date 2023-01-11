import React from 'react';

export const Element2 = ({ className = '', children }) => {
  return <div className={`${className}`}>{children}</div>;
};
