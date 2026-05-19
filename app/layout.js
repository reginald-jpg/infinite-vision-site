import "../styles/globals.css";

export const metadata = {
  title: "Infinite Vision | Veteran Housing & Transportation – Memphis",
  description:
    "Veteran-led, Memphis-based nonprofit integrating housing, transportation, and financial empowerment for long-term stability."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
