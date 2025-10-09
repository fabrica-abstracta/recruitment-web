import Header from "../../../../components/header/header";

export default function SupplierJobPositions() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Proyectos de Reclutamiento</h2>
            <p className="text-gray-600">Gestiona las posiciones asignadas por tus clientes</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition flex items-center">
            <i className="fas fa-plus mr-2"></i>
            Nuevo Proyecto
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">18</div>
                <div className="text-gray-600">Proyectos Activos</div>
              </div>
              <i className="fas fa-project-diagram text-blue-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">42</div>
                <div className="text-gray-600">Posiciones Totales</div>
              </div>
              <i className="fas fa-briefcase text-green-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-yellow-600">156</div>
                <div className="text-gray-600">Candidatos Enviados</div>
              </div>
              <i className="fas fa-paper-plane text-yellow-600 text-2xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-purple-600">23</div>
                <div className="text-gray-600">Colocaciones</div>
              </div>
              <i className="fas fa-handshake text-purple-600 text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Estado Proyecto</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Todos los estados</option>
                <option value="active">Activo</option>
                <option value="completed">Completado</option>
                <option value="paused">Pausado</option>
                <option value="cancelled">Cancelado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cliente</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Todos los clientes</option>
                <option value="techcorp">TechCorp</option>
                <option value="startupxyz">StartupXYZ</option>
                <option value="innovatech">InnovaTech</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Prioridad</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Todas las prioridades</option>
                <option value="high">Alta</option>
                <option value="medium">Media</option>
                <option value="low">Baja</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
              <input type="text" placeholder="Proyecto, posición..." className="w-full border border-gray-300 rounded-lg px-3 py-2" />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">TechCorp - Desarrolladores</h3>
                  <p className="text-gray-600">5 posiciones • Frontend & Backend</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Activo
                </span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Cliente:</span>
                  <span className="font-medium">TechCorp Solutions</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Inicio:</span>
                  <span className="font-medium">15 Oct 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Deadline:</span>
                  <span className="font-medium text-orange-600">30 Nov 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Valor proyecto:</span>
                  <span className="font-medium text-green-600">$25,000</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progreso del proyecto</span>
                  <span className="text-sm text-gray-600">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-600">3</div>
                  <div className="text-xs text-gray-600">Cubiertas</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-yellow-600">2</div>
                  <div className="text-xs text-gray-600">En proceso</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-600">0</div>
                  <div className="text-xs text-gray-600">Pendientes</div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Ver Detalles
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Candidatos
                </button>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">StartupXYZ - Marketing</h3>
                  <p className="text-gray-600">2 posiciones • Digital Marketing</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Iniciando
                </span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Cliente:</span>
                  <span className="font-medium">StartupXYZ Inc.</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Inicio:</span>
                  <span className="font-medium">20 Oct 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Deadline:</span>
                  <span className="font-medium text-orange-600">15 Dec 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Valor proyecto:</span>
                  <span className="font-medium text-green-600">$12,000</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progreso del proyecto</span>
                  <span className="text-sm text-gray-600">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '25%'}}></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-600">0</div>
                  <div className="text-xs text-gray-600">Cubiertas</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-yellow-600">1</div>
                  <div className="text-xs text-gray-600">En proceso</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-600">1</div>
                  <div className="text-xs text-gray-600">Pendientes</div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Ver Detalles
                </button>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Búsqueda
                </button>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">InnovaTech - Diseño</h3>
                  <p className="text-gray-600">3 posiciones • UX/UI Design</p>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Completado
                </span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Cliente:</span>
                  <span className="font-medium">InnovaTech Labs</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Completado:</span>
                  <span className="font-medium">05 Oct 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duración:</span>
                  <span className="font-medium">45 días</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Facturado:</span>
                  <span className="font-medium text-green-600">$18,500</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progreso del proyecto</span>
                  <span className="text-sm text-gray-600">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div className="text-lg font-bold text-green-600">3</div>
                  <div className="text-xs text-gray-600">Cubiertas</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-600">0</div>
                  <div className="text-xs text-gray-600">En proceso</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-600">0</div>
                  <div className="text-xs text-gray-600">Pendientes</div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Ver Reporte
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Facturar
                </button>
              </div>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">DevCorp - Full Stack</h3>
                  <p className="text-gray-600">4 posiciones • Full Stack Development</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Entrevistas
                </span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Cliente:</span>
                  <span className="font-medium">DevCorp Enterprise</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Inicio:</span>
                  <span className="font-medium">10 Oct 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Deadline:</span>
                  <span className="font-medium text-orange-600">20 Nov 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Valor proyecto:</span>
                  <span className="font-medium text-green-600">$32,000</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progreso del proyecto</span>
                  <span className="text-sm text-gray-600">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-600">2</div>
                  <div className="text-xs text-gray-600">Cubiertas</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-yellow-600">2</div>
                  <div className="text-xs text-gray-600">En proceso</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-600">0</div>
                  <div className="text-xs text-gray-600">Pendientes</div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Ver Detalles
                </button>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg text-sm transition">
                  Entrevistas
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}