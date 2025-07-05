// src/pages/Home.jsx
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  const [displayedText, setDisplayedText] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const hasRun = useRef(false);
  const messages = [
    '>>> Initializing JP-OPS Terminal Interface...',
    '>>> SYSTEM ONLINE',
  ];

  const links = [
    { text: 'Crew Profile', to: '/about' },
    { text: 'Operations Log', to: '/projects' },
    { text: 'Transmission Log', to: '/blog' },
    { text: 'Launch Comms', to: '/contact' },
    { text: 'Resume Access', to: '/resume.pdf', external: true }
  ];

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    function typeLine() {
      let allMessages = [...messages, ...links.map(link => link)];
      let lineIndex = 0;
      let charIndex = 0;
      let current = '';

      function typeNext() {
        const item = allMessages[lineIndex];

        if (!item) {
          setShowCursor(true);
          return;
        }

        const isLink = typeof item === 'object';
        const content = isLink ? `>>> ${item.text}` : item;

        if (charIndex < content.length) {
          current += content[charIndex];
          setCurrentLine(current);
          charIndex++;
          setTimeout(typeNext, 50);
        } else {
          setDisplayedText(prev => [...prev, item]);
          setCurrentLine('');
          charIndex = 0;
          current = '';
          lineIndex++;
          setTimeout(typeNext, 300);
        }
      }

      typeNext();
    }

    typeLine();
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6 flex flex-col items-start justify-center space-y-6">
      <div className="space-y-2 text-2xl text-left">
        {displayedText.map((line, idx) => {
          if (typeof line === 'string') {
            return <p key={idx}>{line}</p>;
          } else {
            return (
              <p key={idx}>
                >>>{' '}
                {line.external ? (
                  <a href={line.to} className="hover:text-cyan-400">{line.text}</a>
                ) : (
                  <Link to={line.to} className="hover:text-cyan-400">{line.text}</Link>
                )}
              </p>
            );
          }
        })}
        {currentLine && <p>{currentLine}</p>}
        {showCursor && <p>&gt; <span className="animate-pulse">|</span></p>}
      </div>
    </div>
  );
}