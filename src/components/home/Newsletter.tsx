export const Newsletter = () => {
  return (
    <div className="relative bg-gray-950 text-white py-24 overflow-hidden min-h-[450px] flex items-center justify-center">

      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url(/img/img-news.png)" }}
        aria-hidden="true"
      />

      {/* OVERLAY MÁS SUAVE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />

      {/* CONTENIDO CENTRADO */}
      <div className="relative z-10 w-full max-w-xl px-6">

        {/* TARJETA GLASS */}
        <div className="bg-white/15 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl space-y-6 text-center">

          <p className="text-xs uppercase font-bold tracking-widest text-cyan-300">
            Comunidad Resilient
          </p>

          <h3 className="text-2xl font-extrabold text-white leading-snug">
            Recibe ofertas exclusivas y nuevos lanzamientos antes que nadie.
          </h3>

          <p className="text-sm text-gray-300 leading-6">
            Camisas premium y diseños personalizados para atletas y creadores.
          </p>

          {/* FORMULARIO */}
          <form className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="bg-white/90 text-gray-900 rounded-full py-3 px-6 w-full text-sm font-medium
                         border border-gray-300 shadow-sm placeholder-gray-500
                         focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400 transition"
            />

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold rounded-full uppercase tracking-wider 
                         py-3 px-8 text-xs shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/40"
            >
              Suscribirme
            </button>
          </form>

        </div>
      </div>

    </div>
  );
};
