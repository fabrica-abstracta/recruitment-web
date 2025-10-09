import Header from "../../../../components/header/header";

export default function CustomerJobPositions() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Posiciones Laborales</h2>
            <p className="text-gray-600">Gestiona y supervisa tus ofertas de trabajo</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition flex items-center">
            <i className="fas fa-plus mr-2"></i>
            Nueva Posición
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">15</div>
                <div className="text-gray-600">Posiciones Activas</div>
              </div>
              <i className="fas fa-briefcase text-blue-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">127</div>
                <div className="text-gray-600">Aplicaciones</div>
              </div>
              <i className="fas fa-paper-plane text-green-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-yellow-600">8</div>
                <div className="text-gray-600">En Proceso</div>
              </div>
              <i className="fas fa-clock text-yellow-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600">5</div>
                <div className="text-gray-600">Cubiertas</div>
              </div>
              <i className="fas fa-check-circle text-purple-600 text-2xl"></i>
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
                <option value="active">Activa</option>
                <option value="paused">Pausada</option>
                <option value="filled">Cubierta</option>
                <option value="cancelled">Cancelada</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Departamento</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Todos los departamentos</option>
                <option value="it">Tecnología</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Ventas</option>
                <option value="hr">Recursos Humanos</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha desde</label>
              <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
              <input type="text" placeholder="Título, habilidades..." className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Job Card 1 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Desarrollador React Senior</h3>
                  <p className="text-gray-600">Tecnología • Remoto</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Activa
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 text-sm mb-3">
                  Buscamos desarrollador con experiencia en React, TypeScript y Node.js para liderar proyectos de frontend.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">TypeScript</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Node.js</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">
                  <i className="fas fa-dollar-sign mr-1"></i>
                  $80k - $120k
                </div>
                <div className="text-sm text-gray-600">
                  <i className="fas fa-calendar mr-1"></i>
                  Publicado hace 3 días
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm">
                  <span className="text-green-600 font-medium">24 aplicaciones</span>
                  <span className="text-gray-500"> • </span>
                  <span className="text-blue-600 font-medium">3 entrevistas</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Ver Candidatos
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition">
                  Editar
                </button>
              </div>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Diseñador UX/UI</h3>
                  <p className="text-gray-600">Diseño • Híbrido</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  En Proceso
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 text-sm mb-3">
                  Diseñador creativo para trabajar en productos digitales innovadores y experiencias de usuario excepcionales.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Figma</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Adobe XD</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Sketch</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">
                  <i className="fas fa-dollar-sign mr-1"></i>
                  $60k - $85k
                </div>
                <div className="text-sm text-gray-600">
                  <i className="fas fa-calendar mr-1"></i>
                  Publicado hace 1 semana
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm">
                  <span className="text-green-600 font-medium">18 aplicaciones</span>
                  <span className="text-gray-500"> • </span>
                  <span className="text-blue-600 font-medium">5 entrevistas</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Ver Candidatos
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition">
                  Editar
                </button>
              </div>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Analista de Datos</h3>
                  <p className="text-gray-600">Análisis • Presencial</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Cubierta
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 text-sm mb-3">
                  Profesional en análisis de datos para generar insights y apoyar la toma de decisiones estratégicas.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">SQL</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Tableau</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">
                  <i className="fas fa-dollar-sign mr-1"></i>
                  $65k - $90k
                </div>
                <div className="text-sm text-gray-600">
                  <i className="fas fa-calendar mr-1"></i>
                  Completado hace 2 días
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm">
                  <span className="text-green-600 font-medium">Contratado:</span>
                  <span className="text-gray-700"> María González</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Ver Contrato
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm transition">
                  Duplicar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}