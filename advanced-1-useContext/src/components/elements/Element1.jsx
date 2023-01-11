import React from 'react';
import { ThemeContext } from '../../App';

//example of a React component
export const Element1 = () => {
  const {theme} = React.useContext(ThemeContext);

  return <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} w-full h-96 flex mt-10 font-bold justify-center items-center text-4xl`}>Theme</div>;
};
