import React from 'react';
import { TopBar } from './components/TopBar';
import { Sidebar } from './components/Sidebar';
import { Terminal } from './components/Terminal';
import { StatusBar } from './components/StatusBar';

function App() {
  return (
    <div className="font-display h-screen w-full flex flex-col relative bg-background-dark">
      {/* CRT Overlay Effect */}
      <div className="crt-overlay absolute inset-0 z-50 h-full w-full pointer-events-none"></div>

      {/* Main Layout Container */}
      <div className="layout-container flex h-full grow flex-col p-2 md:p-8">
        
        {/* Terminal Window Frame */}
        <div className="flex flex-col flex-1 bg-terminal-black border border-[#3f3f2f] rounded-xl shadow-2xl overflow-hidden relative z-10 max-w-[1600px] mx-auto w-full">
          
          <TopBar />
          
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <Terminal />
          </div>
          
          <StatusBar />
        </div>
      </div>
    </div>
  );
}

export default App;