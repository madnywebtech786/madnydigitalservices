export default function Loading() {
  return (
    <div className="loader-root">

      {/* ── Subtle dot grid bg ── */}
      <div className="loader-dot-grid" aria-hidden="true" />

      {/* ── Ambient glow orbs ── */}
      <div className="loader-orb loader-orb-a" aria-hidden="true" />
      <div className="loader-orb loader-orb-b" aria-hidden="true" />

      {/* ── Corner accents ── */}
      <div className="loader-corner loader-corner-tl" aria-hidden="true" />
      <div className="loader-corner loader-corner-br" aria-hidden="true" />

      {/* ── Main content ── */}
      <div className="loader-center">

        {/* Ring system */}
        <div className="loader-ring-wrap">

          {/* Outer dashed ring */}
          <svg className="loader-ring-outer" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="110" cy="110" r="104"
              fill="none"
              stroke="url(#ringGradOuter)"
              strokeWidth="1"
              strokeDasharray="10 5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="ringGradOuter" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9f2321" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#135180" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#9f2321" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Solid arc ring — only partial, rotates */}
          <svg className="loader-ring-arc" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="110" cy="110" r="96"
              fill="none"
              stroke="url(#ringGradArc)"
              strokeWidth="2.5"
              strokeDasharray="80 222"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="ringGradArc" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9f2321" />
                <stop offset="100%" stopColor="#135180" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner ring — counter-rotates */}
          <svg className="loader-ring-inner" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="110" cy="110" r="78"
              fill="none"
              stroke="url(#ringGradInner)"
              strokeWidth="1"
              strokeDasharray="4 8"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="ringGradInner" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#135180" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#9f2321" stopOpacity="0.35" />
              </linearGradient>
            </defs>
          </svg>

          {/* Orbit dot on the arc */}
          <div className="loader-orbit-dot" aria-hidden="true">
            <div className="loader-orbit-dot-core" />
            <div className="loader-orbit-dot-ping" />
          </div>

          {/* Logo centered */}
          <div className="loader-logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/madny-digital-services-logo.webp"
              alt="Madny Digital Services"
              className="loader-logo-img"
            />
            {/* Subtle inner glow plate */}
            <div className="loader-logo-plate" aria-hidden="true" />
          </div>

          {/* Four cardinal tick marks */}
          {['top', 'right', 'bottom', 'left'].map((pos) => (
            <div key={pos} className={`loader-tick loader-tick-${pos}`} aria-hidden="true" />
          ))}

        </div>

        {/* Brand + status */}
        <div className="loader-text-block">
          <div className="loader-brand">
            <span className="loader-brand-madny">MADNY</span>
            <span className="loader-brand-sep" />
            <span className="loader-brand-digital">DIGITAL</span>
          </div>
          <div className="loader-tagline">SERVICES — CALGARY, AB</div>
        </div>

        {/* Progress */}
        <div className="loader-progress-wrap">
          <div className="loader-progress-track">
            <div className="loader-progress-fill" />
            <div className="loader-progress-shine" />
          </div>
          <div className="loader-progress-meta">
            <span className="loader-meta-text">LOADING</span>
            <span className="loader-meta-dots">
              <span /><span /><span />
            </span>
          </div>
        </div>

      </div>

      <style>{`
        /* ══════════════════════════════════════
           ROOT
        ══════════════════════════════════════ */
        .loader-root {
          position: fixed;
          inset: 0;
          background: #f8f7f5;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
          font-family: var(--font-geist-mono, 'Courier New', monospace);
        }

        /* ── Dot grid ── */
        .loader-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        /* ── Orbs ── */
        .loader-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(70px);
        }
        .loader-orb-a {
          width: 500px;
          height: 500px;
          top: -160px;
          right: -100px;
          background: radial-gradient(circle, rgba(159,35,33,0.1) 0%, transparent 70%);
          animation: loader-orb-float 6s ease-in-out infinite;
        }
        .loader-orb-b {
          width: 440px;
          height: 440px;
          bottom: -140px;
          left: -80px;
          background: radial-gradient(circle, rgba(19,81,128,0.1) 0%, transparent 70%);
          animation: loader-orb-float 6s ease-in-out infinite reverse;
          animation-delay: -3s;
        }
        @keyframes loader-orb-float {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50%       { transform: scale(1.1) translate(10px, -10px); }
        }

        /* ── Corner accents ── */
        .loader-corner {
          position: absolute;
          width: 60px;
          height: 60px;
          pointer-events: none;
          opacity: 0.25;
        }
        .loader-corner-tl {
          top: 24px; left: 24px;
          border-top: 1.5px solid #9f2321;
          border-left: 1.5px solid #9f2321;
        }
        .loader-corner-br {
          bottom: 24px; right: 24px;
          border-bottom: 1.5px solid #135180;
          border-right: 1.5px solid #135180;
        }

        /* ══════════════════════════════════════
           CENTER
        ══════════════════════════════════════ */
        .loader-center {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          animation: loader-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes loader-in {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ══════════════════════════════════════
           RING SYSTEM
        ══════════════════════════════════════ */
        .loader-ring-wrap {
          position: relative;
          width: 220px;
          height: 220px;
        }

        .loader-ring-outer,
        .loader-ring-arc,
        .loader-ring-inner {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .loader-ring-outer {
          animation: loader-spin-cw 12s linear infinite;
          filter: drop-shadow(0 0 1px rgba(159,35,33,0.15));
        }
        .loader-ring-arc {
          animation: loader-spin-cw 2.4s linear infinite;
          filter: drop-shadow(0 0 4px rgba(159,35,33,0.35)) drop-shadow(0 0 8px rgba(19,81,128,0.2));
        }
        .loader-ring-inner {
          animation: loader-spin-ccw 7s linear infinite;
        }
        @keyframes loader-spin-cw  { to { transform: rotate(360deg); } }
        @keyframes loader-spin-ccw { to { transform: rotate(-360deg); } }

        /* Orbit dot */
        .loader-orbit-dot {
          position: absolute;
          top: calc(50% - 96px - 5px);
          left: calc(50% - 5px);
          width: 10px;
          height: 10px;
          transform-origin: 5px calc(96px + 5px);
          animation: loader-spin-cw 2.4s linear infinite;
        }
        .loader-orbit-dot-core {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #9f2321, #135180);
          box-shadow: 0 0 6px rgba(159,35,33,0.5), 0 0 12px rgba(19,81,128,0.3);
          margin: 1px;
        }
        .loader-orbit-dot-ping {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid rgba(159,35,33,0.3);
          animation: loader-ping 1.6s ease-out infinite;
        }
        @keyframes loader-ping {
          0%   { transform: scale(0.7); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* Logo */
        .loader-logo-wrap {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loader-logo-plate {
          position: absolute;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(159,35,33,0.05) 0%, rgba(19,81,128,0.04) 60%, transparent 100%);
          animation: loader-plate-breathe 2.8s ease-in-out infinite;
        }
        @keyframes loader-plate-breathe {
          0%, 100% { transform: scale(0.92); opacity: 0.6; }
          50%       { transform: scale(1.08); opacity: 1; }
        }
        .loader-logo-img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 2px 8px rgba(159,35,33,0.2));
          animation: loader-logo-breathe 2.8s ease-in-out infinite;
        }
        @keyframes loader-logo-breathe {
          0%, 100% { filter: drop-shadow(0 2px 8px rgba(159,35,33,0.15)); }
          50%       { filter: drop-shadow(0 4px 16px rgba(159,35,33,0.35)) drop-shadow(0 0 24px rgba(19,81,128,0.15)); }
        }

        /* Cardinal ticks */
        .loader-tick {
          position: absolute;
          background: linear-gradient(90deg, #9f2321, #135180);
          border-radius: 2px;
        }
        .loader-tick-top, .loader-tick-bottom {
          width: 1.5px;
          height: 10px;
          left: calc(50% - 0.75px);
        }
        .loader-tick-left, .loader-tick-right {
          height: 1.5px;
          width: 10px;
          top: calc(50% - 0.75px);
        }
        .loader-tick-top    { top: 2px; }
        .loader-tick-bottom { bottom: 2px; }
        .loader-tick-left   { left: 2px; }
        .loader-tick-right  { right: 2px; }

        /* ══════════════════════════════════════
           TEXT
        ══════════════════════════════════════ */
        .loader-text-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          animation: loader-fade-up 0.6s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes loader-fade-up {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .loader-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .loader-brand-madny {
          font-family: var(--font-geist-sans, system-ui);
          font-size: 22px;
          font-weight: 900;
          letter-spacing: 0.2em;
          color: #9f2321;
        }
        .loader-brand-sep {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: linear-gradient(135deg, #9f2321, #135180);
          flex-shrink: 0;
        }
        .loader-brand-digital {
          font-family: var(--font-geist-sans, system-ui);
          font-size: 22px;
          font-weight: 900;
          letter-spacing: 0.2em;
          color: #135180;
        }

        .loader-tagline {
          font-size: 8px;
          letter-spacing: 0.3em;
          color: rgba(0,0,0,0.25);
          text-transform: uppercase;
        }

        /* ══════════════════════════════════════
           PROGRESS
        ══════════════════════════════════════ */
        .loader-progress-wrap {
          width: 260px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          animation: loader-fade-up 0.6s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .loader-progress-track {
          position: relative;
          height: 3px;
          background: rgba(0,0,0,0.07);
          border-radius: 99px;
          overflow: hidden;
        }
        .loader-progress-fill {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #9f2321 0%, #135180 100%);
          border-radius: 99px;
          transform-origin: left center;
          animation: loader-progress 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes loader-progress {
          0%   { transform: scaleX(0);    opacity: 1; }
          75%  { transform: scaleX(0.9);  opacity: 1; }
          90%  { transform: scaleX(0.98); opacity: 1; }
          98%  { transform: scaleX(1);    opacity: 1; }
          100% { transform: scaleX(1);    opacity: 0; }
        }
        .loader-progress-shine {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent);
          animation: loader-shine 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes loader-shine {
          0%  { left: -50px; }
          95% { left: 100%; }
          100%{ left: 100%; }
        }

        .loader-progress-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .loader-meta-text {
          font-size: 8px;
          letter-spacing: 0.28em;
          color: rgba(0,0,0,0.2);
          text-transform: uppercase;
        }
        .loader-meta-dots {
          display: flex;
          gap: 3px;
          align-items: center;
        }
        .loader-meta-dots span {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #9f2321;
          animation: loader-dots 1.2s ease-in-out infinite;
          opacity: 0.4;
        }
        .loader-meta-dots span:nth-child(2) { animation-delay: 0.2s; background: #7a3580; }
        .loader-meta-dots span:nth-child(3) { animation-delay: 0.4s; background: #135180; }
        @keyframes loader-dots {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.3; }
          40%            { transform: scale(1.5); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
