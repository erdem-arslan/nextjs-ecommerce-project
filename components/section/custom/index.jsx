// costum.jsx
"use client"
import React from 'react';
import { useState } from 'react';
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt } from 'react-icons/tfi';
import { FaArrowDownWideShort, FaArrowDownShortWide } from 'react-icons/fa6';

function Index({ handleSort }) {
  const [layout, setLayout] = useState(3);

  const changeLayout = (layout) => {
    setLayout(layout);
  }

  return (
    <div>
      <div className='flex justify-start lg:justify-end pb-2 mb-3 items-center justify-center'>
        <div className='items-center flex flex-row'>
          <div className="w-full flex">
            <div onClick={() => handleSort("ascending")} className='flex w-full justify-between px-4 items-center text-lg font-medium opacity-80 cursor-pointer  my-2 p-1'>
              <p>Growing</p>
              <FaArrowDownShortWide className='cursor-pointer' />
            </div>
            <hr className='w-2/3 mx-auto bg-black' />
            <div onClick={() => handleSort("descending")} className='flex w-full justify-between px-4 items-center text-lg font-medium opacity-80 cursor-pointer my-2  p-1'>
              <p>Decreasing</p>
              <FaArrowDownWideShort className='cursor-pointer' />
            </div>
          </div>
        </div>
        {/* <div className='hidden lg:block'>
          <div className=' ml-5 flex justify-end p-2'>
            <TfiLayoutGrid2Alt size={30} className={`cursor-pointer ${layout == 2 ? 'opacity-100' : 'opacity-20'}`} onClick={() => changeLayout(2)} />
            <TfiLayoutGrid3Alt size={30} className={`ml-2 cursor-pointer ${layout == 3 ? 'opacity-100' : 'opacity-20'}`} onClick={() => changeLayout(3)} />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Index;
