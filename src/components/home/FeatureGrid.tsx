import { BiWorld } from "react-icons/bi";
import { FaHammer } from "react-icons/fa6";
import { HiMiniReceiptRefund } from "react-icons/hi2";
import { MdLocalShipping } from "react-icons/md";

export const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mt-10 mb-20 lg:grid-cols-4 lg:gap-8">

      {/* ENVÍO GRATIS */}
      <div className="flex items-center gap-5 group transition-all">
        <div className="p-3 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-cyan-500 group-hover:text-white transition-all">
          <MdLocalShipping size={32} />
        </div>

        <div>
          <p className="font-bold text-slate-900">Envío Gratis</p>
          <p className="text-sm text-slate-600">
            En todos los pedidos nacionales.
          </p>
        </div>
      </div>

      {/* DEVOLUCIONES */}
      <div className="flex items-center gap-5 group transition-all">
        <div className="p-3 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-cyan-500 group-hover:text-white transition-all">
          <HiMiniReceiptRefund size={32} />
        </div>

        <div>
          <p className="font-bold text-slate-900">Devoluciones Fáciles</p>
          <p className="text-sm text-slate-600">
            72 horas para cambios sin complicaciones.
          </p>
        </div>
      </div>

      {/* SOPORTE */}
      <div className="flex items-center gap-5 group transition-all">
        <div className="p-3 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-cyan-500 group-hover:text-white transition-all">
          <FaHammer size={32} />
        </div>

        <div>
          <p className="font-bold text-slate-900">Soporte 24/7</p>
          <p className="text-sm text-slate-600">
            Atención inmediata por nuestro equipo.
          </p>
        </div>
      </div>

      {/* GARANTÍA */}
      <div className="flex items-center gap-5 group transition-all">
        <div className="p-3 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-cyan-500 group-hover:text-white transition-all">
          <BiWorld size={32} />
        </div>

        <div>
          <p className="font-bold text-slate-900">Garantía Resilient</p>
          <p className="text-sm text-slate-600">
            1 año de respaldo en todas las prendas.
          </p>
        </div>
      </div>

    </div>
  );
};
