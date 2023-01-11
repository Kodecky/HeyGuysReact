import React from 'react';
import { Element1 } from '../elements/Element1';

// This is a module2 component. It can take children.
export const Module2 = ({ className = '', children }) => {
  return (
    <>
      <Element1>First element in Module2</Element1>
      <div className={`${className}`}>{children}</div>
    </>
  );
};
