import React from 'react';
import { FolderOpen, FileText, Folder, Mail } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex w-64 flex-col justify-between border-r border-[#333] bg-[#111] p-4 shrink-0 font-mono">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#888] text-xs font-bold tracking-widest uppercase mb-2">
            Explorer
          </h1>
          
          <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary cursor-default">
            <FolderOpen size={18} />
            <p className="text-sm font-bold">/ root</p>
          </div>
          
          <div className="flex items-center gap-3 px-3 py-2 text-[#888] hover:text-[#e9e8ce] hover:bg-[#222] rounded-full transition-colors cursor-pointer group">
            <FileText size={18} className="group-hover:text-primary transition-colors" />
            <p className="text-sm">readme.md</p>
          </div>
          
          <div className="flex items-center gap-3 px-3 py-2 text-[#888] hover:text-[#e9e8ce] hover:bg-[#222] rounded-full transition-colors cursor-pointer group">
            <Folder size={18} className="group-hover:text-primary transition-colors" />
            <p className="text-sm">projects</p>
          </div>
          
          <div className="flex items-center gap-3 px-3 py-2 text-[#888] hover:text-[#e9e8ce] hover:bg-[#222] rounded-full transition-colors cursor-pointer group">
            <Mail size={18} className="group-hover:text-primary transition-colors" />
            <p className="text-sm">contact.sh</p>
          </div>
        </div>

        {/* System Status */}
        <div className="flex flex-col gap-3 mt-4 border-t border-[#333] pt-6">
          <h1 className="text-[#888] text-xs font-bold tracking-widest uppercase mb-1">
            System Resources
          </h1>
          
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs text-[#888]">
              <span>CPU</span>
              <span className="text-terminal-green">12%</span>
            </div>
            <div className="h-1 w-full bg-[#333] rounded-full overflow-hidden">
              <div className="h-full bg-terminal-green w-[12%]"></div>
            </div>
          </div>
          
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs text-[#888]">
              <span>MEM</span>
              <span className="text-primary">64%</span>
            </div>
            <div className="h-1 w-full bg-[#333] rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[64%]"></div>
            </div>
          </div>
          
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs text-[#888]">
              <span>UPTIME</span>
              <span className="text-white">419d 14h</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-[#444] text-xs text-center pb-2">
        v2.0.4-stable
      </div>
    </aside>
  );
};