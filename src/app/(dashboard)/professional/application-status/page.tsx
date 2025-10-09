import Header from "../../../../components/header/header";

export default function ProfessionalApplicationStatus() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Estado de Postulaciones</h2>
            <p className="text-gray-600">Seguimiento de todas tus aplicaciones y procesos de selección</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition flex items-center">
            <i className="fas fa-search mr-2"></i>
            Buscar Nuevas Ofertas
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">12</div>
                <div className="text-gray-600">Total Postulaciones</div>
              </div>
              <i className="fas fa-paper-plane text-blue-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-yellow-600">5</div>
                <div className="text-gray-600">En Proceso</div>
              </div>
              <i className="fas fa-clock text-yellow-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">3</div>
                <div className="text-gray-600">Entrevistas</div>
              </div>
              <i className="fas fa-comments text-green-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600">2</div>
                <div className="text-gray-600">Ofertas Recibidas</div>
              </div>
              <i className="fas fa-trophy text-purple-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Todos los estados</option>
                <option value="applied">Aplicado</option>
                <option value="reviewing">En Revisión</option>
                <option value="interview">Entrevista</option>
                <option value="offer">Oferta Recibida</option>
                <option value="rejected">Rechazado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Todas las empresas</option>
                <option value="techcorp">TechCorp</option>
                <option value="startupxyz">StartupXYZ</option>
                <option value="innovatech">InnovaTech</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha desde</label>
              <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
              <input type="text" placeholder="Posición, empresa..." className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-6">
          {/* Application 1 - Interview */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">Senior React Developer</h3>
                  <p className="text-gray-600">TechCorp Solutions</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <i className="fas fa-calendar mr-2"></i>
                    Aplicado el 15 Oct 2025
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Entrevista Programada
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Progreso del proceso</span>
                  <span className="text-sm text-gray-600">3/5 etapas</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Aplicado</span>
                  <span>Revisión</span>
                  <span className="font-medium text-green-600">Entrevista</span>
                  <span>Oferta</span>
                  <span>Contrato</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <span className="text-sm text-gray-600">Salario:</span>
                  <span className="ml-2 font-medium">$80k - $120k</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Modalidad:</span>
                  <span className="ml-2 font-medium">Remoto</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Próxima cita:</span>
                  <span className="ml-2 font-medium text-green-600">22 Oct, 10:00 AM</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">
                  Ver Detalles
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition">
                  Confirmar Entrevista
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm transition">
                  Contactar HR
                </button>
              </div>
            </div>
          </div>

          {/* Application 2 - Under Review */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">Frontend Engineer</h3>
                  <p className="text-gray-600">StartupXYZ</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <i className="fas fa-calendar mr-2"></i>
                    Aplicado el 18 Oct 2025
                  </div>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                  En Revisión
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Progreso del proceso</span>
                  <span className="text-sm text-gray-600">2/5 etapas</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '40%'}}></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Aplicado</span>
                  <span className="font-medium text-yellow-600">Revisión</span>
                  <span>Entrevista</span>
                  <span>Oferta</span>
                  <span>Contrato</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <span className="text-sm text-gray-600">Salario:</span>
                  <span className="ml-2 font-medium">$70k - $95k</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Modalidad:</span>
                  <span className="ml-2 font-medium">Híbrido</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Tiempo estimado:</span>
                  <span className="ml-2 font-medium">3-5 días</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">
                  Ver Detalles
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm transition">
                  Seguimiento
                </button>
              </div>
            </div>
          </div>

          {/* Application 3 - Offer Received */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition border-l-4 border-purple-500">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">Full Stack Developer</h3>
                  <p className="text-gray-600">InnovaTech Labs</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <i className="fas fa-calendar mr-2"></i>
                    Aplicado el 10 Oct 2025
                  </div>
                </div>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  🎉 Oferta Recibida
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Progreso del proceso</span>
                  <span className="text-sm text-gray-600">4/5 etapas</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Aplicado</span>
                  <span>Revisión</span>
                  <span>Entrevista</span>
                  <span className="font-medium text-purple-600">Oferta</span>
                  <span>Contrato</span>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-purple-800 mb-2">Detalles de la Oferta:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-purple-600">Salario:</span>
                    <span className="ml-2 font-medium">$95,000 anuales</span>
                  </div>
                  <div>
                    <span className="text-purple-600">Beneficios:</span>
                    <span className="ml-2 font-medium">Seguro médico, 25 días vacaciones</span>
                  </div>
                  <div>
                    <span className="text-purple-600">Inicio:</span>
                    <span className="ml-2 font-medium">1 Nov 2025</span>
                  </div>
                  <div>
                    <span className="text-purple-600">Tiempo respuesta:</span>
                    <span className="ml-2 font-medium text-orange-600">2 días restantes</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition">
                  <i className="fas fa-check mr-2"></i>
                  Aceptar Oferta
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition">
                  <i className="fas fa-times mr-2"></i>
                  Rechazar
                </button>
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm transition">
                  Negociar
                </button>
              </div>
            </div>
          </div>

          {/* Application 4 - Rejected */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition opacity-75">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">Data Scientist</h3>
                  <p className="text-gray-600">DataTech Corp</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <i className="fas fa-calendar mr-2"></i>
                    Aplicado el 05 Oct 2025
                  </div>
                </div>
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                  No Seleccionado
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Proceso finalizado</span>
                  <span className="text-sm text-gray-600">2/5 etapas</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-red-700">
                  <strong>Feedback:</strong> Perfil muy interesante, pero buscamos candidatos con más experiencia en Machine Learning avanzado.
                </p>
              </div>
              
              <div className="flex space-x-3">
                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm transition">
                  Ver Feedback Completo
                </button>
                <button className="text-blue-600 hover:text-blue-700 px-4 py-2 text-sm font-medium">
                  Buscar Posiciones Similares
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}