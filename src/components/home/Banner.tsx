import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <div className="relative bg-gray-950 text-white overflow-hidden min-h-[500px] flex items-center justify-center">

      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 scale-105"
        style={{ backgroundImage: "url(/img/img-banner.png)" }}
        aria-hidden="true"
      />

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      {/* CONTENIDO */}
      <div className="relative z-10 text-center max-w-3xl px-6 py-24 lg:py-40">
        
        {/* TÍTULO PROFESIONAL */}
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4 drop-shadow">
          Eleva tu estilo.
          <span className="block text-cyan-400">Entrena con Resiliencia.</span>
        </h1>

        {/* SUBTÍTULO */}
        <p className="text-lg lg:text-2xl text-gray-300 leading-relaxed mb-10">
          Camisas premium y diseños personalizados pensados para atletas y creadores.  
          Descubre la colección 2026.
        </p>

        {/* CTA POTENTE */}
        <Link
          to="/camisas"
          className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-10 rounded-lg shadow-xl 
                     transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Ver Camisas
        </Link>

      </div>
    </div>
  );
};
