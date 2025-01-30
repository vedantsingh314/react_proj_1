import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [na, setNa] = useState(false);
  const [char, setChar] = useState(false);
  const [pswd, setPswd] = useState("");
  const pswdref = useRef(null);

  const copypswdtoclip = useCallback(() => {
    if (pswdref.current) {
      pswdref.current.select();
      window.navigator.clipboard.writeText(pswd);
    }
  }, [pswd]);

  const pswdgen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (na) {
      str += "1234567890";
    }
    if (char) {
      str += "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
    }

    for (let index = 0; index < length; index++) {
      const e = Math.floor(Math.random() * str.length);
      pass += str.charAt(e);
    }

    setPswd(pass);
  }, [length, na, char]);

  useEffect(() => {
    pswdgen();
  }, [length, na, char, pswdgen]);

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={pswd}
          ref={pswdref}
          className='outline-none bg-white w-full py-1 px-3'
          placeholder='Password'
          readOnly
        />
        <button onClick={copypswdtoclip} className='bg-white-700'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            checked={na}
            onChange={() => setNa((prev) => !prev)}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            checked={char}
            onChange={() => setChar((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
