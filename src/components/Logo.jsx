export default function Logo({ variant = "dark", className = "" }) {
  return (
    <a href="#top" className={`inline-flex items-center ${className}`} aria-label="AS Capital Real Estate">
      <img
        src="/logo.svg"
        alt="AS Capital Real Estate"
        className={`h-28 w-auto transition ${
          variant === "light" ? "brightness-0 invert" : ""
        }`}
      />
    </a>
  );
}
