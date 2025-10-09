import Link from 'next/link';
import Footer from '@/components/footer/footer';

export default function NotFound() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-green-600 opacity-20 leading-none">
              404
            </h1>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¡Oops! Página no encontrada
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              La página que estás buscando no existe o ha sido movida.
              <br />
              Pero no te preocupes, podemos ayudarte a encontrar lo que necesitas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/"
              className="px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg shadow hover:bg-green-700 transition-colors duration-200"
            >
              Volver al inicio
            </Link>
            <Link
              href="/contact-us"
              className="px-6 py-3 bg-gray-200 text-gray-800 text-lg font-medium rounded-lg shadow hover:bg-gray-300 transition-colors duration-200"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}