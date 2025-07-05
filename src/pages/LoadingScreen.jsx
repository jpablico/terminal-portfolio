import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black z-50 text-green-500 font-mono text-xs overflow-hidden">
      {/* White noise flicker overlay */}
      <div className="absolute inset-0 bg-white opacity-5 animate-flicker pointer-events-none z-10" />

      {/* Terminal-style noise characters */}
      <div className="absolute inset-0 text-white/5 font-mono text-[6px] animate-noise whitespace-pre overflow-hidden z-10 pointer-events-none">
        {Array(300).fill(0).map(() => Math.random().toString(36)[2]).join('')}
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full relative z-20">
        <pre className="mb-4 text-center">
{`    ___  ________  ________  ___  ___          ________  ________  ________  ___       ___  ________  ________     
   |\\  \\|\\   __  \\|\\   ____\\|\\  \\|\\  \\        |\\   __  \\|\\   __  \\|\\   __  \\|\\  \\     |\\  \\|\\   ____\\|\\   __  \\    
   \\ \\  \\ \\  \\|\\  \\ \\  \\___|\\ \\  \\\\\\  \\       \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\ /\\ \\  \\    \\ \\  \\ \\  \\___|\\ \\  \\|\\  \\   
 __ \\ \\  \\ \\  \\\\\\  \\ \\_____  \\ \\   __  \\       \\ \\   ____\\ \\   __  \\ \\   __  \\ \\  \\    \\ \\  \\ \\  \\    \\ \\  \\\\\\  \\  
|\\  \\\\_\\  \\ \\  \\\\\\  \\|____|\\  \\ \\  \\ \\  \\       \\ \\  \\___|\\ \\  \\ \\  \\ \\  \\|\\  \\ \\  \\____\\ \\  \\ \\  \\____\\ \\  \\\\\\  \\ 
\\ \\________\\ \\_______\\____\\_\\  \\ \\__\\ \\__\\       \\ \\__\\    \\ \\__\\ \\__\\ \\_______\\ \\_______\\ \\__\\ \\_______\\ \\_______\\
 \\|________|\\|_______|\\_________\\|__|\\|__|        \\|__|     \\|__|\\|__|\\|_______|\\|_______|\\|__|\\|_______|\\|_______|
                     \\|_________|                                                                                  `}
        </pre>

        <div className="w-1/2 h-1 bg-green-800 relative overflow-hidden rounded">
          <div className="absolute h-full w-1/4 bg-green-400 animate-slide" />
        </div>
      </div>
    </div>
  );
}