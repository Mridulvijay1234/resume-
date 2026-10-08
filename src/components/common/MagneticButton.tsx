import React, { useRef, useState } from 'react';
import './MagneticButton.css';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
  target,
  rel,
  download,
  type = 'button',
  disabled = false,
}) => {
  const btnRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.22;
    const distanceY = (e.clientY - centerY) * 0.22;
    setOffset({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const style = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
  };

  const fullClassName = `magnetic-btn-editorial magnetic-${variant} ${className}`;

  if (href) {
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={fullClassName}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        data-interactive="true"
      >
        <span className="btn-inner-content">{children}</span>
        <span className="btn-shimmer" />
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      className={fullClassName}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-interactive="true"
    >
      <span className="btn-inner-content">{children}</span>
      <span className="btn-shimmer" />
    </button>
  );
};

export default MagneticButton;
