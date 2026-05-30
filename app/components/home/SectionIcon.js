/**
 * Simple line icons for service sections — navy stroke with optional gold accent.
 */
export default function SectionIcon({ name, className = "h-10 w-10" }) {
  const icons = {
    housing: (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M8 22L24 8l16 14v16a2 2 0 01-2 2H10a2 2 0 01-2-2V22z"
          stroke="#0A1A2F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M18 38V26h12v12" stroke="#C8A45D" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    transport: (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="14" width="36" height="20" rx="3" stroke="#0A1A2F" strokeWidth="2" />
        <circle cx="14" cy="34" r="4" stroke="#C8A45D" strokeWidth="2" />
        <circle cx="34" cy="34" r="4" stroke="#C8A45D" strokeWidth="2" />
        <path d="M12 14V10h24v4" stroke="#0A1A2F" strokeWidth="2" />
      </svg>
    ),
    finance: (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M10 38V18l14-8 14 8v20"
          stroke="#0A1A2F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M18 38V28h12v10" stroke="#C8A45D" strokeWidth="2" />
        <path d="M24 10v6M20 16h8" stroke="#0A1A2F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    community: (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="14" r="6" stroke="#0A1A2F" strokeWidth="2" />
        <circle cx="12" cy="22" r="5" stroke="#C8A45D" strokeWidth="2" />
        <circle cx="36" cy="22" r="5" stroke="#C8A45D" strokeWidth="2" />
        <path
          d="M8 38c0-6 6-10 16-10s16 4 16 10"
          stroke="#0A1A2F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    barrier: (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 8v32M8 24h32" stroke="#0A1A2F" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="14" stroke="#C8A45D" strokeWidth="2" />
      </svg>
    ),
    home: (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M10 20l14-10 14 10" stroke="#0A1A2F" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 20v18h20V20" stroke="#0A1A2F" strokeWidth="2" />
        <path d="M20 38V28h8v10" stroke="#C8A45D" strokeWidth="2" />
      </svg>
    ),
    transit: (
      <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M8 16h32v16a4 4 0 01-4 4H12a4 4 0 01-4-4V16z" stroke="#0A1A2F" strokeWidth="2" />
        <path d="M8 24h32" stroke="#C8A45D" strokeWidth="2" />
        <circle cx="16" cy="32" r="2" fill="#C8A45D" />
        <circle cx="32" cy="32" r="2" fill="#C8A45D" />
      </svg>
    ),
  };

  return icons[name] || null;
}
