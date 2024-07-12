import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode; 
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className='group relative'>
      <div>{children}</div>
      <div className="hidden group-hover:block absolute bg-black text-white rounded-md border text-[12px] text-center left-1/2 transform -translate-x-1/2 px-[5px] py-[3px] top-[38px] z-[999] whitespace-nowrap">
        {text}
        <div className="absolute w-0 h-0 top-[-5px] -translate-x-2/4 border-b-[5px] border-b-[black] border-x-[5px] border-x-transparent border-solid left-2/4" />
      </div>
    </div>
  );
};