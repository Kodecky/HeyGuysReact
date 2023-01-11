import React, { createContext, useState } from 'react';
import { Element1 } from './components/elements/Element1';
import './styles/global.css';

//create a context 
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');

  return (

    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Create Provider and pass value to the provider */}
      <main>
        <div className="max-w-screen-lg px-5 py-20 mx-auto">
          <p className="mb-10 text-xl">
            Your theme is: <span className="font-bold">{theme}</span>
          </p>
          <div className='flex gap-4'>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 active:bg-blue-800" onClick={() => setTheme('light')}>
              Set Light Theme
            </button>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 active:bg-blue-800" onClick={() => setTheme('dark')}>
              Set Dark Theme
            </button>
          </div>
          {/* now you can use context in the component */}
          <Element1 />
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;


