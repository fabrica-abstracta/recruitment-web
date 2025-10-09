import Header from "@/components/header/header";

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              ¿Listo para encontrar el
              <span className="text-blue-600 italic">talento perfecto</span>?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Conectamos a las mejores empresas con los profesionales más talentosos.
              <br />
              <span className="italic text-blue-700">Tu próximo gran fichaje está a un clic de distancia.</span>
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Hablemos de tu proyecto
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Nuestro equipo de expertos está listo para ayudarte a encontrar los mejores candidatos para tu empresa.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="italic">Consulta gratuita de 30 minutos</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="italic">Análisis personalizado de necesidades</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="italic">Propuesta sin compromiso</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  📞 Llamar Ahora
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  💬 WhatsApp
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300">
                  ✉️ Enviar Email
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 italic">contacto@recruitpro.com</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-gray-800 mb-2">Teléfono</h3>
              <p className="text-gray-600 italic">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold text-gray-800 mb-2">Horario</h3>
              <p className="text-gray-600 italic">Lun-Vie 9:00-18:00</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
