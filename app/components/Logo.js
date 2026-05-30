/**
 * Infinite Vision logo mark — vector paths preserving the core infinity + upward vision shape.
 * Brand palette: Navy #0A1A2F, Gold #C8A45D
 */

export const BRAND = {
  navy: "#0A1A2F",
  navyDark: "#061220",
  navyMid: "#122640",
  gold: "#C8A45D",
  goldLight: "#D4B06E",
  goldMuted: "#B8924A",
  white: "#FFFFFF",
};

/** Core icon paths shared across variants */
export function LogoMark({ variant = "flat", className = "h-full w-full" }) {
  const isNavy = variant === "navy" || variant === "hero";
  const isHero = variant === "hero";
  const isFlat = variant === "flat" || variant === "icon";

  const bodyFill = isNavy ? BRAND.navyMid : BRAND.navy;
  const bodyStroke = isNavy ? BRAND.gold : "none";
  const bodyStrokeWidth = isNavy ? 1.25 : 0;
  const houseFill = isNavy ? BRAND.goldLight : BRAND.gold;
  const loopStroke = isFlat ? "none" : BRAND.navyDark;

  return (
    <svg
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {isHero ? (
        <defs>
          <filter id="iv-hero-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="iv-hero-body" x1="24" y1="4" x2="24" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor={BRAND.navyMid} />
            <stop offset="1" stopColor={BRAND.navy} />
          </linearGradient>
        </defs>
      ) : isFlat ? null : (
        <defs>
          <linearGradient id="iv-body-depth" x1="14" y1="6" x2="34" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor={BRAND.navyMid} />
            <stop offset="1" stopColor={BRAND.navy} />
          </linearGradient>
        </defs>
      )}

      <g filter={isHero ? "url(#iv-hero-glow)" : undefined}>
        {/* Outer vision / flame silhouette */}
        <path
          d="M24 3.5C31.5 3.5 37.2 9.8 39.5 18.2C41.8 26.6 39.8 36.2 34.5 43.5C31.2 48.2 27 50.5 24 50.5C21 50.5 16.8 48.2 13.5 43.5C8.2 36.2 6.2 26.6 8.5 18.2C10.8 9.8 16.5 3.5 24 3.5Z"
          fill={isHero ? "url(#iv-hero-body)" : isFlat ? bodyFill : "url(#iv-body-depth)"}
          stroke={bodyStroke}
          strokeWidth={bodyStrokeWidth}
        />
        {/* Infinity loop base */}
        <path
          d="M11 44.5C11 40.5 15.5 38.5 19.5 41C21.5 42.3 22.5 43.5 24 43.5C25.5 43.5 26.5 42.3 28.5 41C32.5 38.5 37 40.5 37 44.5C37 48 33 50.5 24 50.5C15 50.5 11 48 11 44.5Z"
          fill={bodyFill}
          stroke={loopStroke}
          strokeWidth={isFlat ? 0 : 0.5}
        />
        <path
          d="M13 46.5C15.5 44 18.5 44 21 46.5C22.5 48 23.2 48.8 24 48.8C24.8 48.8 25.5 48 27 46.5C29.5 44 32.5 44 35 46.5"
          stroke={isNavy ? BRAND.goldMuted : BRAND.navyDark}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity={isFlat ? 0.35 : 0.5}
        />
        {/* Inner house / upward stability mark */}
        <path d="M24 22L17.5 28.5H20V36.5H28V28.5H30.5L24 22Z" fill={houseFill} />
      </g>
    </svg>
  );
}

export function LogoWordmark({ onDark = true, className = "" }) {
  return (
    <span
      className={`font-bold uppercase leading-none tracking-[0.14em] ${className}`}
      style={{
        color: BRAND.gold,
        textShadow: onDark ? `0 1px 0 ${BRAND.navyDark}, 0 0 1px ${BRAND.navy}` : "none",
      }}
    >
      Infinite Vision
    </span>
  );
}

/**
 * Layout variants: flat | navy | hero | icon | horizontal | stacked
 */
export default function Logo({
  variant = "horizontal",
  className = "",
  iconClassName = "h-[52px] w-[44px] md:h-[60px] md:w-[50px] lg:h-[68px] lg:w-[57px]",
  wordmarkClassName = "text-sm md:text-base lg:text-lg",
}) {
  const markVariant =
    variant === "navy" || variant === "hero" || variant === "icon"
      ? variant === "icon"
        ? "flat"
        : variant
      : "navy";

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <LogoMark variant={markVariant === "hero" ? "hero" : "navy"} className="h-20 w-[68px]" />
        <LogoWordmark onDark className={wordmarkClassName} />
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        <LogoMark variant="navy" className={iconClassName} />
        <LogoWordmark onDark className={wordmarkClassName} />
      </div>
    );
  }

  return (
    <div className={className}>
      <LogoMark variant={markVariant} className={iconClassName} />
    </div>
  );
}
