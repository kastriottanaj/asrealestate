import { Link } from "react-router-dom";
import { useLocalizedHref } from "../LanguageContext";

export default function Logo({ variant = "dark", className = "" }) {
  const href = useLocalizedHref();
  return (
    <Link to={href("/")} className={`inline-flex items-center ${className}`} aria-label="AS Real Estate">
      <img
        src="/as-real-estate.svg"
        alt="AS Real Estate"
        className={`h-20 w-auto transition ${
          variant === "light" ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}
