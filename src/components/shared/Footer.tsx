import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { socialLinks } from "../../constans/links";

const Footer = () => {
  return (
    <footer className="py-16 bg-gray-950 px-8 md:px-12 text-slate-200 text-sm mt-10 border-t border-gray-800">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-10">

        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-white transition-all hover:text-cyan-500 flex-1"
        >
          RESILIENT
        </Link>

        {/* SUSCRIPCIÓN */}
        <div className="flex flex-col gap-4 flex-1 max-w-xs">
          <p className="font-semibold uppercase tracking-tight text-white">
            Suscríbete
          </p>

          <p className="text-xs text-gray-400 leading-relaxed">
            Únete a nuestra comunidad fitness y recibe ofertas exclusivas, 
            lanzamientos de nuevas camisas y diseños personalizados cada semana.
          </p>

          <div className="border border-gray-700 bg-gray-900 flex items-center px-3 py-2 rounded-full focus-within:ring-1 focus-within:ring-cyan-500">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="pl-1 bg-transparent text-slate-200 w-full focus:outline-none"
            />
            <button
              aria-label="Enviar correo de suscripción"
              className="text-slate-200 hover:text-cyan-400 transition-all"
            >
              <BiChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* POLÍTICAS */}
        <div className="flex flex-col gap-4 flex-1">
          <p className="font-semibold uppercase tracking-tight text-white">
            Políticas
          </p>

          <nav className="flex flex-col gap-2 text-xs font-medium text-slate-300">
            <Link to="/productos" className="hover:text-white">
              Productos
            </Link>
            <Link to="/privacidad" className="hover:text-white">
              Políticas de privacidad
            </Link>
            <Link to="/terminos" className="hover:text-white">
              Términos de uso
            </Link>
          </nav>
        </div>

        {/* REDES SOCIALES */}
        <div className="flex flex-col gap-4 flex-1">
          <p className="font-semibold uppercase tracking-tight text-white">
            Síguenos
          </p>

          <p className="text-xs text-gray-400 leading-relaxed">
            Descubre nuevas colecciones, descuentos y diseños personalizados 
            exclusivos para la comunidad RESILIENT.
          </p>

          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 w-10 h-10 border border-gray-700 flex items-center justify-center rounded-md transition-all hover:bg-white hover:text-gray-950 hover:border-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} Resilient. Todos los derechos reservados.  
        Diseñado para atletas, creadores y mentes fuertes.
      </div>
    </footer>
  );
};

export default Footer;
