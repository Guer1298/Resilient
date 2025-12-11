import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import type { VariantProduct } from "../../interfaces";
import { formatPrice } from "../../helpers";
import { useCartStore } from "../../store/cart.store";
import toast from 'react-hot-toast';

interface Props {
  img: string;
  name: string;
  price: number;
  slug: string;
  colors: { name: string; color: string }[];
  variants: VariantProduct[];
}

export const CardProduct = ({
  img,
  name,
  price,
  slug,
  colors,
  variants,
}: Props) => {

  // Color seleccionado
  const [activeColor, setActiveColor] = useState(colors[0]);

  const addItem = useCartStore(state => state.addItem);

	const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (selectedVariant && selectedVariant.stock > 0) {
			addItem({
				variantId: selectedVariant.id,
				productId: slug,
				name,
				image: img,
				color: activeColor.name,
				talla: selectedVariant.talla,
				price: selectedVariant.price,
				quantity: 1,
			});
			toast.success('Producto añadido al carrito', {
				position: 'bottom-right',
			});
		} else {
			toast.error('Producto agotado', {
				position: 'bottom-right',
			});
		}
	};

  // Variante según color
  const selectedVariant = variants.find(
    (variant) => variant.color === activeColor.color
  );

  const stock = selectedVariant?.stock || 0;



  return (
    <div className="flex flex-col gap-5 relative group">

      {/* IMAGEN + CTA */}
      <Link
        to={`/camisas/${slug}`}
        className="relative overflow-hidden rounded-xl border border-slate-200 bg-white"
      >
        <div className="flex h-[320px] w-full items-center justify-center py-4 lg:h-[250px]">
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* BOTÓN AÑADIR */}
        <button
          className="
            absolute bottom-0 w-full py-3 rounded-t-2xl 
            bg-white border border-slate-300 flex items-center justify-center gap-2 
            text-sm font-medium 
            translate-y-[100%] group-hover:translate-y-0 
            transition-all duration-300 hover:bg-slate-100
          " onClick={handleAddClick}
        >
          <FiPlus size={16} />
          Añadir
        </button>
      </Link>

      {/* INFO */}
      <div className="flex flex-col gap-1 items-center">
        <p className="text-[15px] font-semibold text-slate-800">{name}</p>
        <p className="text-[15px] font-medium text-slate-600">{formatPrice(price)}</p>

        {/* SELECTOR DE COLORES */}
        <div className="flex gap-2 mt-1">
          {colors.map((color) => (
            <button
              key={color.color}
              onClick={() => setActiveColor(color)}
              className={`
                w-5 h-5 rounded-full grid place-items-center 
                border-2 transition-all duration-200 
                ${
                  activeColor.color === color.color
                    ? "border-cyan-500 scale-110"
                    : "border-transparent opacity-70 hover:opacity-100"
                }
              `}
            >
              <span
                className="w-[14px] h-[14px] rounded-full"
                style={{ backgroundColor: color.color }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* BADGE DE STOCK */}
      {stock === 0 && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-[11px] px-2 py-1 rounded-md font-semibold tracking-wide shadow-md">
          Agotado
        </span>
      )}
    </div>
  );
};
