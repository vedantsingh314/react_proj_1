import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className="w-full h-screen duration-300" style={{ backgroundColor: color }}>
      
      <div className='fixed flex flex-wrap justify-center bottom-12 gap-10 inset-x-0 px-2'>
        
        {[
          { name: "Red", hex: "red" },
          { name: "Green", hex: "green" },
          { name: "Blue", hex: "blue" },
          { name: "Yellow", hex: "yellow" },
          { name: "Purple", hex: "purple" },
          { name: "Orange", hex: "orange" },
          { name: "White", hex: "white" },
          { name: "Black", hex: "black", textColor: "text-white" },
          { name: "Cyan", hex: "cyan" }
        ].map(({ name, hex, textColor = "text-black" }) => (
          <div key={hex} className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button 
              onClick={() => setColor(hex)} 
              className={`outline-none px-4 py-1 rounded-full shadow-sm ${textColor}`} 
              style={{ backgroundColor: hex }}
            >
              {name.toUpperCase()}
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
