export const AboutPage = () => {
	return (
		<section className="space-y-8 pb-20">
			{/* Encabezado */}
			<header className="text-center space-y-3">
				<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
					Somos <span className="text-cyan-600">Movimiento</span>
				</h1>
				<p className="text-gray-600 font-medium text-sm md:text-base max-w-2xl mx-auto">
					En cada costura, en cada fibra y en cada gota de sudor, llevamos una idea simple: 
					el cuerpo cambia cuando la mente decide no rendirse.
				</p>
			</header>

			{/* Imagen */}
			<div className="relative">
				<img
					src="https://images.unsplash.com/photo-1599058917212-d750089bc07b?auto=format&fit=crop&w=3000&q=60"
					alt="Atleta entrenando"
					className="h-[500px] w-full object-cover rounded-2xl shadow-lg"
				/>
				<div className="absolute inset-0 bg-black/30 rounded-2xl" />
			</div>

			{/* Contenido principal */}
			<div className="max-w-3xl mx-auto text-center space-y-6 tracking-tight leading-7 text-slate-800">
				<p>
					Somos <span className="font-semibold text-cyan-600">TATO RESILIENT</span>, una marca nacida entre barras, 
					kettlebells y sueños grandes. No diseñamos ropa: 
					diseñamos <span className="font-semibold">actitud</span>. 
					Cada prenda está hecha para quienes no le temen al cansancio 
					y saben que la disciplina también se entrena.
				</p>

				<p>
					Nuestro compromiso va más allá del gimnasio: buscamos inspirar 
					a una comunidad que se levanta temprano, que falla, 
					que vuelve a intentarlo y que encuentra en el movimiento su refugio.
				</p>

				<p>
					Creamos ropa que respira contigo, que se adapta, que resiste.  
					Porque en el gym y en la vida, lo que importa no es ser perfecto, 
					sino ser <span className="font-semibold text-cyan-600 uppercase">resiliente</span>.
				</p>

				<h2 className="text-2xl font-bold mt-10">
					#EntrenaConActitud 💥
				</h2>

				<p className="text-sm text-gray-600">
					¿Tienes dudas o quieres colaborar con nosotros?  
					Escríbenos a{" "}
					<a
						href="mailto:contacto@tatoresilient.com"
						className="text-cyan-600 underline hover:text-cyan-700"
					>
						contacto@tatoresilient.com
					</a>{" "}
					o llámanos al{" "}
					<a
						href="tel:+573333333333"
						className="text-cyan-600 underline hover:text-cyan-700"
					>
						+57 333 333 3333
					</a>.
				</p>
			</div>
		</section>
	);
};

