import { Link } from "react-router-dom";
import { useLocalizedHref } from "../LanguageContext";

export default function Logo({ variant = "dark", className = "" }) {
  const href = useLocalizedHref();
  return (
    <Link to={href("/")} className={`inline-flex items-center ${className}`} aria-label="AS Capital Real Estate">
      <img
        src="/logo.svg"
        alt="AS Capital Real Estate"
        className={`h-28 w-auto transition ${
          variant === "light" ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}
