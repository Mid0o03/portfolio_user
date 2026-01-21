import React from 'react';

export const StatusBar: React.FC = () => {
  return (
    <footer className="bg-primary/5 border-t border-[#333] px-4 py-1 flex items-center justify-between text-[10px] md:text-xs text-[#666] font-mono shrink-0">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          CONNECTED: 192.168.1.42
        </span>
        <span className="hidden md:inline">UTF-8</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="uppercase text-primary font-bold">-- INSERT --</span>
        <span>Ln 42, Col 12</span>
      </div>
    </footer>
  );
};