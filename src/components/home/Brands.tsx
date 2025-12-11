const brands = [
  { image: "/img/brands/apple-logo.webp", alt: "A" },
  { image: "/img/brands/samsung-logo.webp", alt: "S" },
  { image: "/img/brands/xiaomi-logo.webp", alt: "X" },
  { image: "/img/brands/realme-logo.webp", alt: "R" },
  { image: "/img/brands/huawei-logo.png", alt: "H" },
  { image: "/img/brands/honor-logo.png", alt: "H" },
];

export const Brands = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-20 pb-16">

      {/* TÍTULO */}
      <h2 className="font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900">
        Marcas aliadas de Resilient
      </h2>

      {/* SUBTÍTULO */}
      <p className="w-3/4 md:w-1/2 text-center text-sm md:text-base text-slate-600 leading-relaxed">
        Trabajamos con marcas líderes para ofrecerte camisas personalizadas con 
        calidad premium y colores fieles al estilo original.
      </p>

      {/* LOGOS */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-10 w-full max-w-4xl">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center opacity-80 hover:opacity-100 transition duration-300"
          >
            <img
              src={brand.image}
              alt={`${brand.alt} logo`}
              className="w-20 md:w-24 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* MENSAJE DE CONFIANZA */}
      <p className="text-xs text-slate-500 mt-6">
        Confianza y calidad respaldadas por marcas globales.
      </p>
    </div>
  );
};
