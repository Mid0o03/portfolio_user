import React from 'react';
import { Terminal, Maximize2, Minus, X } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-[#333] bg-[#1a1a1a] px-6 py-3 shrink-0">
      <div className="flex items-center gap-4 text-terminal-green">
        <Terminal size={20} />
        <h2 className="text-[#e9e8ce] text-sm md:text-base font-bold tracking-wide font-mono">
          user@portfolio:~
        </h2>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 font-mono text-xs">
          <a href="#home" className="text-[#888] hover:text-primary transition-colors">
            /home
          </a>
          <a href="#about" className="text-[#888] hover:text-primary transition-colors">
            /about
          </a>
          <a href="#projects" className="text-[#888] hover:text-primary transition-colors">
            /projects
          </a>
          <a href="#contact" className="text-[#888] hover:text-primary transition-colors">
            /contact
          </a>
        </div>
        
        {/* Window Controls (Purely decorative) */}
        <div className="flex gap-2">
          <div className="h-3.5 w-3.5 rounded-full bg-yellow-500/20 border border-yellow-500/50 hover:bg-yellow-500 cursor-pointer transition-colors flex items-center justify-center group">
             <Minus size={8} className="opacity-0 group-hover:opacity-100 text-black" />
          </div>
          <div className="h-3.5 w-3.5 rounded-full bg-green-500/20 border border-green-500/50 hover:bg-green-500 cursor-pointer transition-colors flex items-center justify-center group">
            <Maximize2 size={8} className="opacity-0 group-hover:opacity-100 text-black" />
          </div>
          <div className="h-3.5 w-3.5 rounded-full bg-red-500/20 border border-red-500/50 hover:bg-red-500 cursor-pointer transition-colors flex items-center justify-center group">
            <X size={8} className="opacity-0 group-hover:opacity-100 text-black" />
          </div>
        </div>
      </div>
    </header>
  );
};