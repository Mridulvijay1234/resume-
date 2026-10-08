import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let isVisible = false;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (followerRef.current) followerRef.current.style.opacity = '1';
      }

      // Check hover states via target inspection without state re-renders
      const target = e.target as HTMLElement | null;
      if (target && followerRef.current) {
        const projectCard = target.closest('[data-cursor-text]');
        const interactive = target.closest('a, button, [data-interactive="true"]');

        if (projectCard) {
          const text = projectCard.getAttribute('data-cursor-text') || 'VIEW';
          followerRef.current.classList.add('has-text');
          followerRef.current.classList.add('is-hover');
          if (labelRef.current) labelRef.current.textContent = text;
        } else if (interactive) {
          followerRef.current.classList.remove('has-text');
          followerRef.current.classList.add('is-hover');
          if (labelRef.current) labelRef.current.textContent = '';
        } else {
          followerRef.current.classList.remove('has-text');
          followerRef.current.classList.remove('is-hover');
          if (labelRef.current) labelRef.current.textContent = '';
        }
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (followerRef.current) followerRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (followerRef.current) followerRef.current.style.opacity = '1';
    };

    // Ultra-smooth 60-120fps RAF loop with zero React re-renders
    const renderLoop = () => {
      // Instant snap for dot (zero lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Smooth buttery lerp for follower ring
      followerX += (mouseX - followerX) * 0.22;
      followerY += (mouseY - followerY) * 0.22;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    renderLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={followerRef} className="custom-cursor-follower">
        <span ref={labelRef} className="cursor-label" />
      </div>
    </>
  );
};

export default CustomCursor;
