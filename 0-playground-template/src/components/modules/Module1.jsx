import React from 'react';
import { Element1 } from '../elements/Element1';
import { Element2 } from '../elements/Element2';

// This is a module1 component. It cannot take children, because it's not specified in props
export const Module1 = ({ className = '' }) => {
  return (
    <div className={`${className}`}>
      <Element1>First element</Element1>
      <Element2>Second element</Element2>
    </div>
  );
};
