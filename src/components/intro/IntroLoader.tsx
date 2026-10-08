import React, { useEffect, useState } from 'react';
import './IntroLoader.css';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'entering' | 'revealing' | 'exiting' | 'done'>('entering');

  useEffect(() => {
    // Quick, elegant 1.1s total intro sequence
    const t1 = setTimeout(() => setStage('revealing'), 250);
    const t2 = setTimeout(() => setStage('exiting'), 850);
    const t3 = setTimeout(() => {
      setStage('done');
      onComplete();
    }, 1150);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (stage === 'done') return null;

  return (
    <div className={`intro-curtain ${stage === 'exiting' ? 'curtain-exit' : ''}`} aria-hidden="true">
      <div className="intro-content">
        <div className="intro-wordmark">
          <span className="intro-first">MRIDUL</span>
          <span className="intro-second">VIJAY</span>
        </div>
        <div className="intro-progress-line">
          <div className="intro-line-bar" />
        </div>
        <div className="intro-subtext">2026 · AI + ENGINEERING</div>
      </div>
    </div>
  );
};

export default IntroLoader;
