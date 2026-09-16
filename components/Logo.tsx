import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "light" | "image";
  showSubtitle?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Navy Gable */}
      <path
        d="M15 72 L60 22 L105 72"
        stroke="#0B2A4A"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Red Gable */}
      <path
        d="M26 69 L60 32 L94 69"
        stroke="#E8412C"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Navy Peak */}
      <path
        d="M60 45 L44 63 H76 Z"
        fill="#0B2A4A"
      />
      {/* Base Horizontal Bar */}
      <rect
        x="36"
        y="72"
        width="48"
        height="10"
        rx="5"
        fill="#0B2A4A"
      />
    </svg>
  );
}

export function LogoIconLight({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer White Gable for Dark Backgrounds */}
      <path
        d="M15 72 L60 22 L105 72"
        stroke="#FFFFFF"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Red Gable */}
      <path
        d="M26 69 L60 32 L94 69"
        stroke="#E8412C"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner White Peak */}
      <path
        d="M60 45 L44 63 H76 Z"
        fill="#FFFFFF"
      />
      {/* Base Horizontal Bar */}
      <rect
        x="36"
        y="72"
        width="48"
        height="10"
        rx="5"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default function Logo({
  variant = "default",
  showSubtitle = true,
  className = "",
  size = "md",
}: LogoProps) {
  const iconSizeClass =
    size === "sm" ? "w-8 h-8" : size === "lg" ? "w-14 h-14" : "w-10 h-10";
  const titleSizeClass =
    size === "sm"
      ? "text-lg"
      : size === "lg"
      ? "text-2xl sm:text-3xl"
      : "text-xl sm:text-2xl";
  const subtitleSizeClass =
    size === "sm" ? "text-[9px]" : size === "lg" ? "text-xs" : "text-[10px] sm:text-[11px]";

  if (variant === "image") {
    return (
      <Link href="#hero" className={`inline-flex items-center ${className}`}>
        <Image
          src="/images/logo.png"
          alt="Umaid Alam - All Interior Specialist"
          width={240}
          height={64}
          priority
          className="h-10 sm:h-12 w-auto object-contain"
        />
      </Link>
    );
  }

  const isLight = variant === "light";

  return (
    <Link href="#hero" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Icon */}
      <div className="shrink-0">
        {isLight ? (
          <LogoIconLight className={iconSizeClass} />
        ) : (
          <LogoIcon className={iconSizeClass} />
        )}
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`font-black uppercase tracking-tight font-heading leading-none ${
            isLight ? "text-white" : "text-[#0B2A4A]"
          } ${titleSizeClass}`}
        >
          UMAID ALAM
        </span>
        {showSubtitle && (
          <span
            className={`font-bold text-[#E8412C] tracking-wider uppercase mt-0.5 ${subtitleSizeClass}`}
          >
            ALL INTERIOR SPECIALIST
          </span>
        )}
      </div>
    </Link>
  );
}
