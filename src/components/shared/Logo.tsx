import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      aria-label="Ir a inicio - Resilient"
      className="group text-3xl font-extrabold tracking-tight transition-all duration-300 hover:text-cyan-600 flex items-center gap-1"
    >
      {/* Desktop Branding */}
      <span className="hidden lg:inline-flex items-center gap-1">
        <span className="text-black">RESI</span>
        <span className="relative text-slate-600">
          LIENT
          {/* underline reveal animation */}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </span>

      {/* Mobile Branding (Monograma) */}
      <span className="lg:hidden font-extrabold flex items-center">
        <span className="text-slate-600 text-4xl leading-none">R</span>
        <span className="text-black text-xl ml-0.5">°</span>
      </span>
    </Link>
  );
};

export default Logo;
