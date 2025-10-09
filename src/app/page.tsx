import Footer from "@/components/footer/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#F8F7F4] to-[#E8F0F2] flex flex-col font-sans text-[#2F2F2F] overflow-x-hidden">
      <main className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8 py-24 flex flex-col gap-24 leading-relaxed 
        [padding-inline:calc(env(safe-area-inset-left)+1rem)_calc(env(safe-area-inset-right)+1rem)]">

        <section className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#1C1C1C]">
            No contratamos.{" "}
            <span className="italic text-[#7EB4D4]">Conectamos.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto">
            Somos un equipo que entiende que detrás de cada rol hay una historia.
            Personas con propósito, empresas con visión.
            Nuestra tarea es simple, pero poderosa:{" "}
            <strong>hacer que se encuentren.</strong>
          </p>
        </section>

        <section className="bg-white/90 rounded-3xl shadow-lg p-8 sm:p-10 flex flex-col md:flex-row items-center gap-10 backdrop-blur-sm">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">
              Creemos en el talento con propósito
            </h2>
            <p className="text-[#4B5563] text-md leading-relaxed">
              No buscamos currículums que llenen casillas.
              Buscamos personas que entiendan lo que hacen, que comuniquen con claridad,
              que tengan la sensibilidad de aportar más que resultados:{" "}
              <strong>criterio y visión</strong>.
              <br /><br />
              Llamanos románticos, pero pensamos que los equipos excepcionales
              se construyen con algo más que experiencia: <em>con sentido.</em>
            </p>
          </div>

          <div className="flex-1 bg-gradient-to-br from-[#F6D6AD]/80 to-[#FCE8C3]/80 rounded-2xl p-8 text-center shadow-inner">
            <p className="text-xl italic text-[#1C1C1C] mb-4">
              “No hay talento sin propósito.
              Solo personas que aún no encontraron su lugar.”
            </p>
            <p className="text-sm text-[#4B5563]">– Fábrica Abstracta</p>
          </div>
        </section>

        <section className="flex flex-col gap-6 text-center">
          <h2 className="text-4xl font-bold text-[#1C1C1C] mb-2">
            Outsourcing, selección, búsqueda.
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            No importa el formato: lo que ofrecemos es <strong>criterio humano</strong> aplicado.
            Procesos de selección inteligentes, decisiones conscientes,
            y una red de profesionales que <em>viven lo que hacen.</em>
          </p>
        </section>

        <section className="bg-gradient-to-r from-[#8BBBD9] to-[#F6D6AD] rounded-3xl shadow-lg py-16 px-6 sm:px-10 text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C1C1C] leading-snug">
            ¿Tu equipo está listo para encontrar su próximo talento con propósito?
          </h2>
          <p className="text-lg md:text-xl text-[#2F2F2F] max-w-2xl">
            Escribinos. Escuchamos primero, conectamos después.
            <span className="italic"> Así empieza cada historia de impacto.</span>
          </p>
          <div className="w-full max-w-md mt-4 space-y-3">
            <label htmlFor="mobile-phone" className="sr-only">Teléfono</label>
            <input
              id="mobile-phone"
              type="tel"
              inputMode="tel"
              placeholder="Ej: +51 912 345 678"
              className="w-full px-5 py-3 border-2 border-transparent rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 shadow-sm 
              focus:outline-none focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57] hover:bg-white transition-all"
            />
            <Link
              href="/contact-us"
              className="w-full block text-center bg-[#2E8B57] hover:bg-[#256D45] text-white px-5 py-3 rounded-lg transition-all font-medium shadow-md"
            >
              Contactar a un asesor
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
