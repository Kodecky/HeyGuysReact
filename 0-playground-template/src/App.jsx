import React from 'react';
import './styles/global.css';
import { Module1 } from './components/modules/Module1';
import { Module2 } from './components/modules/Module2';

function App() {
  return (
    <main>
      <div className="max-w-screen-lg mx-auto py-20 px-5">
        <h1 className="text-4xl">React Playground</h1>
        <Module1 />
        <Module2>
          <p>I can take children!</p>
        </Module2>
      </div>
    </main>
  );
}

export default App;
